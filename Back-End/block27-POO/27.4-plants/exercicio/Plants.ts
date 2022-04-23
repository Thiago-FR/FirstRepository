import fs from 'fs/promises';
import IPlant from './src/interfaces/Plants';

const PLANTS_JSON = 'plants.json';

interface IOpsInfo { createdPlants: number }

class Plants {
  initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }

  async getPlants() {
    const plantsRaw = await fs.readFile(PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  async getPlantById(id: number) {
    const plantsRaw = await fs.readFile(PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant: IPlant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  async removePlantById(id: number) {
    const plantsRaw = await fs.readFile(PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant: IPlant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(PLANTS_JSON, JSON.stringify(newPlants));

    return removedPlant;
  }

  async getPlantsThatNeedsSunWithId(id: number) {
    const plantsRaw = await fs.readFile(PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter((plant) => {
      if (plant.needsSun && plant.id === id
        && (!plant.specialCare || plant.specialCare.waterFrequency > 2)) {
          return true;
      }

      return false;
    });
    return filteredPlants;
  }

  async editPlant(plantId: number, newPlant: IPlant) {
    const plantsRaw = await fs.readFile(PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(PLANTS_JSON, JSON.stringify(updatedPlants));
    return newPlant;
  }

  async savePlant(plant: IPlant) {
    const plantsRaw = await fs.readFile(PLANTS_JSON, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = this.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

    await fs.writeFile(PLANTS_JSON, JSON.stringify(plants));
    return newPlant;
  }
}

const p1 = new Plants();
const func = async () => {
  const p = await p1.getPlants();
  console.log(p);  
}
func();

export default Plants;
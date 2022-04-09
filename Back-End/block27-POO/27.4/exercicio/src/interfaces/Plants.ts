type specialCare = { waterFrequency: number } | null | number;

interface IPlant {
  id?: number,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: any
}

export default IPlant;
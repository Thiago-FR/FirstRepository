const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1
const addTurno = (order, obj, value) => {
  order[obj] = value;
}
addTurno(lesson2, 'turno', 'manhã');


//Exercício 2
const returnKey = order => Object.keys(order);

//Exercício 3 ***********
const sizeObj = order => Object.keys(order).length;

//Exerício 4
const returnValue = order => Object.values(order);

//Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

//Exercício Bonus 1
const somaEstudantes = obj => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}

function consulta(obj, nome) {
  const number = Object.values(obj);
}

//console.log(somaEstudantes(allLessons));

//Exercício Bonus - Existe na função

const verificarPar = (obj, chave, valor) => {
  const newObj = {};
  const array = Object.keys(obj);
  for (index in array) {
    const objSection = obj[array[index]];
    const arrayKeys = Object.keys(objSection);
    const arrayValues = Object.values(objSection);
    //console.log(array[index]);

    /*if (arrayKeys[index] === chave) {
      console.log('igual')
    }*/
    //console.log(Object.values(objSection));
    for(html in arrayKeys){
      const chaveKey = arrayKeys[html];
      const valorKey = arrayValues[html]
       if (chaveKey === chave && valorKey === valor) {
        console.log(`Existe na função ${array[index]}`)
      }
    }
  }
  return newObj;
}

//Exercício Bonus - Existe na função - modo 2

const verificarParTwo = (obj, chave, valor) => {
  const newObj = {};
  const array = Object.keys(obj);
  for (index in array) {
    const objSection = obj[array[index]];
    const arrayKeys = Object.entries(objSection);
    for(html in arrayKeys){
       if (arrayKeys[html][0] === chave && arrayKeys[html][1] === valor) {
        console.log(`Existe na função ${array[index]}`)
      }
    }
  }
  return newObj;
}

console.log(verificarParTwo(allLessons, 'professor', 'Carlos'));

//console.log(verificarPar(allLessons, 'professor', 'Maria Clara'));


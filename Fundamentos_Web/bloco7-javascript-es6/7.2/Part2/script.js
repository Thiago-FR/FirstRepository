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

//Exercício 6
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

//Exercício 7

function retornarValor(lesson, chave) {
  let cont = 0;
  let name;
  for (index in lesson) {   
    if (cont === chave) {
      name = lesson[index];
    }
    cont += 1;
  }
  return name;
}

//console.log(retornarValor(lesson1, 0))

// Exércicio 7 simplificado
const getValeu = (obj, value) => Object.values(obj)[value];
//console.log(getValeu(lesson1, 1));


//console.log(somaEstudantes(allLessons));

//Exercício 8 - Existe na função

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

//Exercício 8 - Existe na função - modo 2

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

//console.log(verificarParTwo(allLessons, 'professor', 'Carlos'));

//Exercício Bonus 2

//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const infoProf = (obj, valor) => {
  const materias = [];
  let alunos = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === valor) {
      materias.push(array[index].materia);
      alunos += array[index].numeroEstudantes;
    }
    //console.log(array[index].professor);
  }
  
  return {lessons: materias, estudantes: alunos};
}

const juntaInfo = (obj, valor) => {
  const newObj = {};
  newObj.professor = valor;
  Object.assign(newObj, infoProf(allLessons, valor));
  return newObj;
}

//console.log(juntaInfo(allLessons, 'Maria Clara'));
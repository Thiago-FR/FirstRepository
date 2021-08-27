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

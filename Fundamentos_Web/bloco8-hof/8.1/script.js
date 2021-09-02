// Exercício 1

const newEmployees = () => {
  const employees = {
    id1: contratado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: contratado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: contratado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const contratado = name => {
  const obj = {};
  const email = name.split(' ').join('_').toLowerCase();
  obj.Name = name;
  obj.Email = `${email}@trybe.com` 
  return obj;
}

//console.log(newEmployees());

//Exercício 2

const checkResult = (num1, num2) => num1 === num2 ? true: false;

const resulSort = (apost, func) => {
  const num = Math.ceil(Math.random() * 5);
  console.log(num);
  return func(apost, num) ? 'Parabéns você ganhou' : 'Tente novamente';

}

console.log(resulSort(4,checkResult));
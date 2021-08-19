const estados = {
  NONE: 'Selecione',
  AC: 'Acre',
  AL: 'Alagoas',
  AM: 'Amapá',
  AP: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',  
  TO: 'Tocantins'
}

const corpo = document.querySelector('body');
const nameID = document.getElementById('name');
const emailID = document.getElementById('email');
const cpfID = document.getElementById('cpf');
const enderecoID = document.getElementById('endereco');
const cidadeID = document.getElementById('cidade');
const estadosSelect = document.getElementById('estado-select');
const casaID = document.getElementsByName('home');
const resumoD = document.getElementById('resumo-c');
const cargoD = document.getElementById('cargo-c');
const dateID = document.getElementById('date');
const div = document.createElement('div');
const paragrafo = document.createElement('p');

for(let index in estados){
  const estadoBr = document.createElement('option');
  estadoBr.innerHTML = estados[index];
  estadoBr.value = index;
  estadosSelect.appendChild(estadoBr);
}

function verificaName() {
  if (nameID.value.length > 40 || nameID.value.length === 0) {
    alert('Valor Inválido');
  }
}

function verificaEmail() {
  if (emailID.value.length > 50 || emailID.value.length === 0) {
   // alert('Valor Inválido');
  }else{
    for(let index = 0; index < emailID.value.length; index += 1){
      const email = emailID.value[index];      
      if (email === '@') {
        return;
      }
    }
   //alert('Valor Inválido');
  }
}

function check(element){
  for(let index = 0; index< element.length; index += 1){
    if(element[index].checked){
      return element[index].value;
    }
  }
}

function objForms() { 
  //  Algoritimo para inversão de Data utilizado do Link:
  //  https://blog.betrybe.com/javascript/javascript-date-format/
  let data = new Date(dateID.value);
  let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
  const formsObj = {
    'Nome: ': nameID.value,
    'E-mail: ': emailID.value,
    'CPF: ': cpfID.value,
    'Endereço: ': enderecoID.value,
    'Residência: ': check(casaID),
    'Cidade: ': cidadeID.value,
    'Estado: ': estadosSelect.value,
    'Resumo: ': resumoD.value,
    'Cargo: ': cargoD.value,
    'Data Início: ': dataFormatada
  }
  return formsObj;
}

function criarDiv(objForms) {
  corpo.appendChild(div);
  for(let index in objForms){
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = index + objForms[index];
    div.appendChild(paragrafo);
  }
}

function addHandler(event) {
  event.preventDefault();
  verificaName();
  verificaEmail();

  criarDiv(objForms());
}

window.onload = function() {
  const btnEnviar = document.querySelector('.submit-button');
  btnEnviar.addEventListener('click',addHandler);
}


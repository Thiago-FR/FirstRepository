const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
]


const corpo = document.querySelector('body');
const nameID = document.getElementById('name');
const emailID = document.getElementById('email');
const cpfID = document.getElementById('cpf');
const enderecoID = document.getElementById('endereco');
const cidadeID = document.getElementById('cidade');
const estadosSelect = document.getElementById('estado-select');
const casaID = document.getElementById('casa');
const apID = document.getElementById('ap');
const resumoD = document.getElementById('resumo');
const cargoD = document.getElementById('cargo');
const dateID = document.getElementById('date');
const div = document.createElement('div');
const paragrafo = document.createElement('p');

for(let index = 0; index < estados.length; index += 1){
  const estadoBr = document.createElement('option');
  estadoBr.innerHTML = estados[index];
  estadosSelect.appendChild(estadoBr);
}

function verificaName() {
  if (nameID.value.length > 40 || nameID.value.length === 0) {
    alert('Valor Inválido');
  }
}

function verificaEmail() {
  if (emailID.value.length > 50 || emailID.value.length === 0) {
    alert('Valor Inválido');
  }else{
    for(let index = 0; index < emailID.value.length; index += 1){
      const email = emailID.value[index];      
      if (email === '@') {
        console.log(email);
        return;
      }
    }
    alert('Valor Inválido');
  }
}

function criarDiv() {
  corpo.appendChild(div);
}

function addHandler(event) {
  event.preventDefault();
  verificaName();
  verificaEmail();

  criarDiv();
}

window.onload = function() {
  const btnEnviar = document.querySelector('.submit-button');
  btnEnviar.addEventListener('click',addHandler);
}




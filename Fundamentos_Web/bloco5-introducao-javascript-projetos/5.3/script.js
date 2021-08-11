function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
createDays();
btnFeriado("Feriados");
btnSextaFeira("Sexta-Feita")
// Escreva seu código abaixo.

//#1
function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const weekDays = document.querySelector('#days');
  for(let index = 0; index < dezDaysList.length; index += 1){
    let days = dezDaysList[index];  
    let daysListItem = document.createElement('li');  
    daysListItem.innerHTML = days;  
    if(index === 0 || index === 1){
      weekDays.appendChild(daysListItem); 
    }else if(days === 24 || days === 25 || days === 31){
      daysListItem.className = 'day holiday'; 
      weekDays.appendChild(daysListItem);   
    }else if(days === 4 || days === 11 || days === 18 || days === 25){
      daysListItem.className = 'day friday';
      weekDays.appendChild(daysListItem); 
    }else{
      weekDays.appendChild(daysListItem);
    }   
}
}

//#2

function btnFeriado(string){
  let btnContainer = document.querySelector('.buttons-container');
  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerHTML = string;
  btnContainer.appendChild(btnHoliday);
  
}


//#3

let btnHolidayDay = document.getElementById("btn-holiday");

  btnHolidayDay.addEventListener('click',btnFeriadoAction);


function btnFeriadoAction(){
  let btnAction = document.getElementsByClassName('holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let colorwhite = 'white';
  for(let index = 0; index < btnAction.length; index += 1){
    if(btnAction[index].style.background == colorwhite){
      btnAction[index].style.background = backgroundColor;  
    } else{
      btnAction[index].style.background = colorwhite;  
    }   
  }
}

//#4
function btnSextaFeira(string){
  let btnContainer = document.querySelector('.buttons-container');
  let btnSextaFeira = document.createElement('button');
  btnSextaFeira.id = 'btn-friday';
  btnSextaFeira.innerHTML = string;
  btnContainer.appendChild(btnSextaFeira);  
}


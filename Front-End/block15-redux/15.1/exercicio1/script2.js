function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextIndex = () => ({
  type: 'NEXT_COLOR',
});

const previousIndex = () => ({
  type: 'PREVIOUS_COLOR',
});

const randomIndex = (state) => ({
  type: 'RANDOM_COLOR',
});

const nextArray = (state) => {
  if (state.index < state.colors.length - 1) {
    state.index += 1;
  } else {
    state.index = 0;
  }  
  //console.log(state.index);
  return state.index;
}

const previousArray = (state) => {
  if (state.index > 0) {
    state.index -= 1;
  } else {
    state.index = state.colors.length - 1;
  }  
  //console.log(state.index);
  return state.index;
}



const reduce = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: nextArray(state),
      }      
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: previousArray(state),
      } 
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors,  criarCor()],
        index: state.colors.length,
      } 
    default: console.log('deu ruim');
  }
};

const store = Redux.createStore(reduce);

document.getElementById('next')
  .addEventListener('click', () => {
    store.dispatch(nextIndex());
});

document.getElementById('previous')
.addEventListener('click', () => {
  store.dispatch(previousIndex());
});

document.getElementById('random-color')
.addEventListener('click', () => {
  store.dispatch(randomIndex());
});

store.subscribe(() => {
  const storeIndex = store.getState();
  document.getElementById('value').innerHTML = storeIndex.colors[storeIndex.index];
  document.getElementById('container').style.background = storeIndex.colors[storeIndex.index];
    
  console.log(store.getState());
});

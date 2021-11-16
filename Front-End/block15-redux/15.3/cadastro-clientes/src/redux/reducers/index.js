import { NEW_LOGIN, NEW_CADASTRO } from "../actions";

const INITIAL_STATE = {
  login: true,
  name: '',
  email: '',
};

const INITIAL_CADASTRO = [];

export const loginReducer = (state =INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_LOGIN:
      return {
        ...state,
        ...action.value,
      }
    default:
      return state;
  }
}

export const cadastroReducer = (state =INITIAL_CADASTRO, action) => {
  switch (action.type) {
    case NEW_CADASTRO:
      console.log(action);
      return [
        ...state,
        action.value,
    ]
    default:
      return state;
  }
}
export const NEW_LOGIN = 'NEW_LOGIN';
export const NEW_CADASTRO = 'NEW_CADASTRO';

 export const newLogin = (value) => ({
  type: NEW_LOGIN,
  value,
});

export const newCadastro = (value) => ({
  type: NEW_CADASTRO,
  value,
});

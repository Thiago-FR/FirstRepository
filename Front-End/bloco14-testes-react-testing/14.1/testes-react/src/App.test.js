import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de inserção de email', () => {
  test('renders learn react link', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type','email');
  });
  
  test('Verificando se existe um botão', () => {
    render(<App />);
    const btn = screen.getAllByRole('button');
    expect(btn).toHaveLength(2);
  });
  
  test('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  
  test('Verificando se o botão e o campo email estão funcionando', () => {
    render(<App />);
  
    const EMAIL_USER = 'email@test.com'
  
    //Acessar os Elementos da tela
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor');
  
    // Interagir com os Elementos (Se for necessário)
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
  
    // Fazer ps testes
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });
});

# Exercicíos

### Atividade 1

1. Crie uma rota **POST /user/register** que receba uma requisição que envie username , email e password no body da requisição, onde:
  * username deve ter mais de 3 caracteres;
  * email deve ter o formato email@mail.com;
  * password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
  * Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e **{ "message": "invalid data" }** ;
  * Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e **{ "message": "user created" }** ;

2. Crie uma rota **POST /user/login** que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
  * O formato desse token retornado deve ser uma string aleatória com 12 caracteres;
  * O email recebido deve ter o formato email@mail.com;
  * O password deve conter no mínimo 4 caracteres e no máximo 8, todos números;
  * Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e **{ "message": "email or password is incorrect" }**
  * Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e **{ "token": "86567349784e" }** ;

Dicas: separe suas rotas em arquivos e utilize middlewares para validar os campos recebidos nas requisições

### Atividade 2:

1. Crie uma rota **GET /btc/price** que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
  * O token deve ser uma string de 12 caracteres contendo letras e/ou números.
  * Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 401 e **{ "message": "invalid token" }** ;
  * Caso tenha sucesso deve ser feito um fetch em uma API externa de sua preferência e retorne os dados da API como resposta;

Dicas: - Sugestão de[API](https://api.coindesk.com/v1/bpi/currentprice/BTC.json); - O token será passado pelo header da seguinte forma: authorization: 86567349784e; - Utilize middlewares para validar o token; - Para fazer uma requisição a uma API externa utilizer o FETCH ou AXIOS, parecido com que vimos em Front-end;
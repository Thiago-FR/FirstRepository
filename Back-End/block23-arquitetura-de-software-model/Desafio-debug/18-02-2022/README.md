
# Projeto cadastro de novas pessoas clientes :man: :woman:

Este projeto é uma API Node.JS com Express que tem o intuito de cadastrar novas pessoas
em um banco de dados MySQL. Aqui vamos utilizar a arquitetura **MSC** para organizar
nossos arquivos e diretórios :smile: :rocket: 

### Passo a passo para executar a aplicação :green_heart:

Atualmente estamos com alguns erros e nossa API **não** funciona :disappointed:

```bash
  // start server
  npm start

  // start dev server
  npm run dev
```

Atualmente temos esta **"organização"** :thinking: :smile:

```bash
├── 21-01-2022
│   ├── middlewares
│   │    └── validation.js
│   ├── routers
│   │   └── clients.js
│   ├── database.js
│   ├── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

PS. Ainda não conseguimos cadastrar as pessoas no MySQL (esta tudo em um array no arquivo **database.js**) e a API não esta funcionando :sob:
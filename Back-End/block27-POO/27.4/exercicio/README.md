# Exercicíos

Esse módulo controla um catálogo de plantas para um instituto de botânica. É utilizado Typescript para adaptar o código de modo a transformá-lo em uma API respeitando os princípios SOLID. Para isso, foi necessário modificar o arquivo Plants.ts, bem como criar um arquivo index.ts para criar sua API com express.

* Foco nos princípios SOLID: Single Responsibility , Dependency Inversion e Open/Closed .
* Aproveitamento dos pilares da Orientação a Objetos.

* GET /plants : retorna todas as plantas;
* GET /plant/:id : retorna uma planta com o id;
* DELETE /plant/:id : deleta uma planta com o id;
* POST /plant/:id : sobrescreve a planta com id;
* POST /plant : cria uma planta nova;
* GET /sunny/:id : retorna uma planta que precisa de sol com o id.

# Bônus

* Foi criado um banco de dados para persistir os dados das plantas com ORM Prisma.
* Aplicação utiliza arquitetura de software MSC.
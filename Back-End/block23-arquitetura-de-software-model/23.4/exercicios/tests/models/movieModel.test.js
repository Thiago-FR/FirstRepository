const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../models/connection');
const moviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1, }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response =  await moviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response =  await moviesModel.create(payloadMovie);

      expect(response).to.be.a.property('id');
    });
  });
});

describe('Localiza filme por ID', () => {
  describe('Quando o ID não é valido', () => {
    before(() => {
      const response = [[], []];

      sinon.stub(connection, 'execute').resolves(response);
    });

    after(() => {
      connection.execute.restore();
    });

    const INVALID_ID = 100;

    it('É retornado um array', async () => {
      const response = await moviesModel.findById(INVALID_ID);

      expect(response).to.be.a('array')
    });

    it('É retornado um array vazio', async () => {
      const response = await moviesModel.findById(INVALID_ID);

      expect(response).to.be.empty;
    });
  });

  describe('Quando o ID é valido', () => {
    before(() => {
      const response = [{
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }];

      sinon.stub(connection, 'execute').resolves(response);
    });

    after(() => {
      connection.execute.restore();
    });

    const VALID_ID = 1;

    it('É retornado um "object"', async () => {
      const response = await moviesModel.findById(VALID_ID);

      expect(response).to.be.an('object')
    });

    it('É retornado o objeto movie', async () => {
      const { id } = await moviesModel.findById(VALID_ID);

      expect(id).to.be.equal(VALID_ID)
    });
  });
});


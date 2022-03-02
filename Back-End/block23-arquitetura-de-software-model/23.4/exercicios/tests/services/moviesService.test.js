const { expect } = require('chai');
const sinon = require('sinon');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/MoviesService');

describe('Insere um novo filme no BD', () => {
  const payloadMovieFalse = {};
  const payloadMovieTrue = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(() => {
    const ID_EXAMPLE = 1;

    sinon.stub(MoviesModel, 'create')
      .resolves({ id: ID_EXAMPLE });
  });

  after(() => {
    MoviesModel.create.restore();
  });

  describe('quando o payload informado não é válido', () => {
    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovieFalse);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovieFalse);

      expect(response).to.be.equal(false);
    }); 
  });

  describe('quando o payload informado é válido', () => {    
    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovieTrue);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovieTrue);

      expect(response).to.be.a.property('id');
    }); 
  });
});

describe('Localiza filme por ID', () => {
  describe('Quando o ID não é valido', () => {
    const reject = {
      error: {
        code: 'notFound',
        message: 'Id não encontrado'
      }
    }

    const INVALID_ID = 100;

    before(() => {
      sinon.stub(MoviesModel, 'findById').resolves(false);
    });

    after(() => {
      MoviesModel.findById.restore();
    });    

    it('É retornado um Erro', async () => {
      const response = await MoviesService.findById(INVALID_ID);

      expect(response).to.be.a('object')
    });

    it('Verifica se é retornardo mensagem de erro', async () => {
      const response = await MoviesService.findById(INVALID_ID);

      expect(response.error.code).to.be.equal(reject.error.code)
      expect(response.error.message).to.be.equal(reject.error.message)
    });
  });

  describe('Quando o ID é valido', () => {
    before(() => {
      const response = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      sinon.stub(MoviesModel, 'findById').resolves(response);
      // sinon.stub(MoviesService, 'findById').resolves(response);
    });

    after(() => {
      MoviesModel.findById.restore();
    });

    const VALID_ID = 1;

    it('É retornado um "object"', async () => {
      const response = await MoviesService.findById(VALID_ID);

      expect(response).to.be.an('object')
    });

    it('É retornado o objeto movie', async () => {
      const { id } = await MoviesService.findById(VALID_ID);

      expect(id).to.be.equal(VALID_ID)
    });
  });
});

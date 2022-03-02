const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/MoviesService');
const moviesController = require('../../controller/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {}

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'create').resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await moviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await moviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'create').resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await moviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await moviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });
  });
});

describe('Ao chamar o controller de findByYd', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = { id: 1 };
      const reject = {
        error: {
          code: 'notFound',
          message: 'Id não encontrado'
        }
      }

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(reject);

      sinon.stub(MoviesService, 'findById').resolves(reject);
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('é chamado o status com o código 404', async () => {
      const result = await moviesController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    // it('é chamado o json com o objeto', async () => {
    //   await moviesController.findById(request, response);

    //   expect(response.json.calledWith('error')).to.be.equal(true);
    // });
  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = { id: 1 };
      const resolved = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(resolved);

      sinon.stub(MoviesService, 'findById').resolves(resolved);
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await moviesController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    // it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
    //   await moviesController.findById(request, response);

    //   expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    // });
  });
});


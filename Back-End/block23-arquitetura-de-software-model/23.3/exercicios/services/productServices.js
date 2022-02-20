const ProductModel = require('../models/productModel');

const getAll = async () => {
  const products = await ProductModel.getAll();

  if (!products.length) {
    return {
      error: {
        code: 'notFound',
        message: 'Produtos não encontrado'
      }
    }
  }

  return products;
};

const getByID = async (id) => {
  const products = await ProductModel.getByID(id);

  if (!products.length) {
    return {
      error: {
        code: 'notFound',
        message: 'Produtos não encontrado'
      }
    }
  }

  return products;
};

const add = async (name, brand) => {
  const products = await ProductModel.getByName(name);

  if (products.length) {
    return {
      error: {
        code: 'alredyExisting',
        message: 'Produto já existe'
      }
    }
  }

  const newProducts = await ProductModel.add(name, brand);

  if (!newProducts) {
    return {
      error: {
        code: 'serverError',
        message: 'Não foi possivel cadastra o produto'
      }
    }
  }

  return newProducts;
};

const exclude = async (id) => {
  const products = await getByID(id);

  if (products.error) return products;
  
  await ProductModel.exclude(id);
};

const update = async (id, name, brand) => {
  const products = await getByID(id);

  if (products.error) return products;

  await ProductModel.update(id, name, brand);
};

module.exports = {
  getAll,
  getByID,
  add,
  exclude,
  update,
};

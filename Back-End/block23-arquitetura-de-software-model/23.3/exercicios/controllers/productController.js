const express = require('express');
const ProductServices = require('../services/productServices');
const rescue = require('express-rescue');
const { validateName } = require('../middleware');

const router = express.Router();

router.get('/list-products', rescue(async (_req, res, next) => {
  const products = await ProductServices.getAll();

  if (!products.error) return res.status(200).json(products);

  return next(products.error);
}));


router.get('/list-products/:id', rescue(async (req, res, next) => {
  const { id } = req.params;
  const products = await ProductServices.getByID(id);

  if (!products.error) return res.status(200).json(products);

  return next(products.error);
}));

router.post('/', validateName, rescue(async (req, res, next) => {
  const { name, brand } = req.body
  const products = await ProductServices.add(name, brand);

  if (!products.error) return res.status(201).json(products);

  return next(products.error);
}));

router.delete('/:id', rescue(async (req, res, next) => {
  const { id } = req.params

  const products = await ProductServices.exclude(id);

  if (!products) return res.status(200).json({ message: 'Produto deletado com sucesso' });

  return next(products.error);
}));

router.put('/:id', validateName, rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const products = await ProductServices.update(id, name, brand);

  if (!products) return res.status(201).json({ id, name, brand });
1
  return next(products.error);
}));

module.exports = router;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const error_middleware_1 = __importDefault(require("../middlewares/error.middleware"));
const router = (0, express_1.Router)();
const booksController = new book_controller_1.default();
router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books/', books_middleware_1.default, booksController.create);
router.put('/books/:id', books_middleware_1.default, booksController.update);
router.use(error_middleware_1.default);
exports.default = router;

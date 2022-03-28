"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const books_service_1 = __importDefault(require("../services/books.service"));
const bookService = new books_service_1.default();
class BookController {
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield bookService.getAll();
            return res.status(http_status_codes_1.StatusCodes.OK).json(books);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const book = yield bookService.getById(Number(id));
            if (!book)
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'Book not found' });
            return res.status(http_status_codes_1.StatusCodes.OK).json(book);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = req.body;
            const bookCreated = yield bookService.create({ title, price, author, isbn });
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(bookCreated);
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, price, author, isbn } = req.body;
            const result = yield bookService.update(Number(id), { title, price, author, isbn });
            if (result)
                return next(result);
            return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield bookService.remove(Number(id));
            return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
    }
}
exports.default = BookController;

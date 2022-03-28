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
const connection_1 = __importDefault(require("../models/connection"));
const book_model_1 = __importDefault(require("../models/book.model"));
class BookService {
    constructor() {
        this.model = new book_model_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.model.getAll();
            return books;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getById(id);
            return book;
        });
    }
    create(book) {
        return this.model.create(book);
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const check = yield this.model.getById(id);
                if (!check) {
                    throw new Error('Book doesn`t exists!');
                }
                return yield this.model.update(id, book);
            }
            catch (error) {
                return error;
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const check = yield this.model.getById(id);
                if (!check) {
                    throw new Error('Book doesn`t exists!');
                }
                return this.model.remove(id);
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = BookService;

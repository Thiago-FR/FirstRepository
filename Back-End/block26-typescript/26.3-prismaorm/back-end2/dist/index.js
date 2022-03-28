"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const books_routes_1 = __importDefault(require("./routes/books.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.OK).send('Express + TypeScript');
});
app.use(books_routes_1.default);
app.use(error_middleware_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

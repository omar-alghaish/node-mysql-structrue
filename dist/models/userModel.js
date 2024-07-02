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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsersCount = exports.getUserById = exports.getAllUsers = void 0;
const database_1 = __importDefault(require("../config/database"));
const userQueries_1 = require("../queries/userQueries");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.default.query(userQueries_1.userQueries.getAllUsers);
    return rows;
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.default.query(userQueries_1.userQueries.getUserById, [id]);
    return rows.length ? rows[0] : null;
});
exports.getUserById = getUserById;
const getUsersCount = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.default.query(userQueries_1.userQueries.getRowsCount);
    return rows.length ? rows[0] : null;
});
exports.getUsersCount = getUsersCount;
const createUser = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query(userQueries_1.userQueries.createUser, [name, email]);
});
exports.createUser = createUser;
const updateUser = (id, name, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query(userQueries_1.userQueries.updateUser, [name, email, id]);
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.query(userQueries_1.userQueries.deleteUser, [id]);
});
exports.deleteUser = deleteUser;

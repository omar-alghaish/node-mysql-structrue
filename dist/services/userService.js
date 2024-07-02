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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.editUser = exports.addUser = exports.fetchUsersCount = exports.fetchUserById = exports.fetchAllUsers = void 0;
const userModel_1 = require("../models/userModel");
const fetchAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, userModel_1.getAllUsers)();
});
exports.fetchAllUsers = fetchAllUsers;
const fetchUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, userModel_1.getUserById)(id);
});
exports.fetchUserById = fetchUserById;
const fetchUsersCount = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, userModel_1.getUsersCount)();
});
exports.fetchUsersCount = fetchUsersCount;
const addUser = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, userModel_1.createUser)(name, email);
});
exports.addUser = addUser;
const editUser = (id, name, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, userModel_1.updateUser)(id, name, email);
});
exports.editUser = editUser;
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, userModel_1.deleteUser)(id);
});
exports.removeUser = removeUser;

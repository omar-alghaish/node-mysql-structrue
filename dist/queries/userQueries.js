"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQueries = void 0;
exports.userQueries = {
    getAllUsers: 'SELECT *, CONCAT(first_name, " " , last_name) AS full_name FROM users',
    getUserById: 'SELECT * FROM users WHERE id = ?',
    getRowsCount: 'SELECT COUNT(id) AS results FROM users ',
    createUser: 'INSERT INTO users (name, email) VALUES (?, ?)',
    updateUser: 'UPDATE users SET name = ?, email = ? WHERE id = ?',
    deleteUser: 'DELETE FROM users WHERE id = ?',
};

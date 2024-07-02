export const userQueries = {
    getAllUsers: (pageNumber:number = 0, pageCount:number =10)=> `SELECT *, CONCAT(first_name, " " , last_name) AS full_name FROM users limit ${(pageNumber - 1) * pageCount}, ${pageCount}`,
    getUserById: 'SELECT * FROM users WHERE id = ?',
    getRowsCount:'SELECT COUNT(id) AS results FROM users ',
    createUser: 'INSERT INTO users (name, email) VALUES (?, ?)',
    updateUser: 'UPDATE users SET name = ?, email = ? WHERE id = ?',
    deleteUser: 'DELETE FROM users WHERE id = ?',
};

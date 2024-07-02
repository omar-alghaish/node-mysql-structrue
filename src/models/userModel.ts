import pool from '../config/database';
import { RowDataPacket } from 'mysql2';
import { userQueries } from '../queries/userQueries';

export interface User {
    results: any;
    id: number;
    name: string;
    email: string;
}

export interface getParams {
    pageNumber: number,
    pageCount: number
}

export const getAllUsers = async (pangination: getParams): Promise<User[]> => {
    const [rows] = await pool.query<RowDataPacket[]>(userQueries.getAllUsers(pangination.pageNumber, pangination.pageCount));
    return rows as User[];
};

export const getUserById = async (id: number): Promise<User | null> => {
    const [rows] = await pool.query<RowDataPacket[]>(userQueries.getUserById, [id]);
    return rows.length ? (rows[0] as User) : null;
};

export const getUsersCount = async (): Promise<User | null> => {
    const [rows] = await pool.query<RowDataPacket[]>(userQueries.getRowsCount);
    return rows.length ? (rows[0] as User) : null;
};

export const createUser = async (name: string, email: string): Promise<void> => {
    await pool.query(userQueries.createUser, [name, email]);
};

export const updateUser = async (id: number, name: string, email: string): Promise<void> => {
    await pool.query(userQueries.updateUser, [name, email, id]);
};

export const deleteUser = async (id: number): Promise<void> => {
    await pool.query(userQueries.deleteUser, [id]);
};

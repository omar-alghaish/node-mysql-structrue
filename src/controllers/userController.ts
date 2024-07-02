import { Request, Response } from 'express';
import { fetchAllUsers, fetchUserById, addUser, editUser, removeUser, fetchUsersCount } from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  const pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber as string, 10) : 1;
  const pageCount = req.query.pageCount ? parseInt(req.query.pageCount as string, 10) : 5;

  try {
    const users = await fetchAllUsers({ pageNumber, pageCount });
    const countResult = await fetchUsersCount();

    if (countResult?.results === null) {
      throw new Error('Failed to retrieve user count');
    }

    const count = Number(countResult?.results);

    const totalPages = Math.ceil(count / pageCount);

    const pagination = {
      pageNumber,
      pageCount,
      totalPages,
      nextPage: pageNumber < totalPages ? pageNumber + 1 : null,
      prevPage: pageNumber > 1 ? pageNumber - 1 : null,
    };

    const response = {
      status: 'success',
      results: count,
      pagination,
      data: users,
      metadata: {
        requestTime: new Date().toISOString(),
        server: 'e-commerce server',
        user: 'Guest', // Example if you have user info in the request
      },
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await fetchUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    await addUser(name, email);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    await editUser(Number(id), name, email);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await removeUser(Number(id));
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

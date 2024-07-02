import { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUsersCount } from '../models/userModel';
import { getParams } from '../models/userModel';



export const fetchAllUsers = async (pagination : getParams) => {
  return await getAllUsers(pagination);
};

export const fetchUserById = async (id: number) => {
  return await getUserById(id);
};

export const fetchUsersCount = async () =>{
    return await getUsersCount();
}

export const addUser = async (name: string, email: string) => {
  await createUser(name, email);
};

export const editUser = async (id: number, name: string, email: string) => {
  await updateUser(id, name, email);
};

export const removeUser = async (id: number) => {
  await deleteUser(id);
};

import { User } from '../models/User';

export const usersResopnse: (User & { password: string })[] = [
  {
    token: 'bearer adminToken',
    password: 'admin',
    username: 'admin',
    role: 'admin',
  },
  {
    token: 'bearer adminToken',
    password: 'user',
    role: 'user',
    username: 'user',
  },
];

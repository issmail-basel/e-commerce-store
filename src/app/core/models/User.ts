export type User = {
  username: string;
  token: string;
  role: UserRole;
};

export type UserRole = 'admin' | 'user';

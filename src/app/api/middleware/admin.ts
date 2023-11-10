// pages/api/admin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from './middleware';


const adminHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  user: { username: any; },
) => {
  // Your admin API logic goes here
  res.status(200).json({ message: `Welcome, ${user.username}!` });
};

export default withAuth(adminHandler);

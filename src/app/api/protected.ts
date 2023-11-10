// pages/api/protected.ts
import { NextApiRequest, NextApiResponse } from 'next';
import authMiddleware from './middleware/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // This is the actual handler logic for the protected API route
  res.status(200).json({ message: 'This is a protected route.' });
};

export default authMiddleware(handler);

// pages/api/middleware/auth.ts
import { checkAuthentication } from '../../../auth/auth';
import { NextApiRequest, NextApiResponse } from 'next';


const authMiddleware =
  (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const user = checkAuthentication(req);

    if (!user) {
      // Return a 401 Unauthorized response if the user is not authenticated
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // If user is authenticated, call the main route handler
    return handler(req, res);
  };

export default authMiddleware;

// middleware.ts
import { checkAuthentication } from '../../../auth/auth';
import { NextApiRequest, NextApiResponse } from 'next';


type MiddlewareHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
  user: ReturnType<typeof checkAuthentication>,
) => Promise<void>;

export const withAuth =
  (handler: MiddlewareHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const user = checkAuthentication(req);

    if (!user) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    await handler(req, res, user);
  };

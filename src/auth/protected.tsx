// components/ProtectedRoute.tsx
import { ReactNode } from 'react';
import { checkAuthentication } from './auth';
import { useRouter } from 'next/router';
import { NextApiRequest } from 'next';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  
  const router = useRouter();
  const user = checkAuthentication(router.req as NextApiRequest);

  if (!user) {
    // Redirect to the login page if the user is not authenticated
    router.replace('/login');
    return null;
  }

  // Render the protected content if authentication and authorization pass
  return <>{children}</>;
};

export default ProtectedRoute;

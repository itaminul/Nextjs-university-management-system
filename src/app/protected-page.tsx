// pages/protected-page.tsx
import { checkAuthentication } from '../path/to/auth';
import { GetServerSideProps } from 'next';

type ProtectedPageProps = {
  user: User; // Assuming you have a User interface defined in your application
};

const ProtectedPage: React.FC<ProtectedPageProps> = ({ user }) => {
  // Protected page content
  return <div>Welcome, {user.username}!</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = checkAuthentication(context.req);

  if (!user) {
    // If user is not authenticated, redirect to login page
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // If user is authenticated, pass user data to the page
  return {
    props: {
      user,
    },
  };
};

export default ProtectedPage;

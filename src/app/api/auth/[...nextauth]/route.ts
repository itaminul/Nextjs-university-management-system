import { Backend_URL } from '@/app/lib/Constants';
import { message } from 'antd';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialPrvider from 'next-auth/providers/credentials';
import { redirect } from 'next/navigation';
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialPrvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'user name',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        
          console.log('check');
          if (!credentials?.username || !credentials?.password) return null;
          const { username, password } = credentials;
          console.log("cre", username);
             const res = await fetch('http://192.168.0.84:4001/api/auth/loginuser', {
            // const res = await fetch('http://localhost:8000/user/login', {
            method: 'POST',
            body: JSON.stringify({
              username,
              password,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if ((res.status == 401)) {
            console.log(res.statusText);
            return null;
          }
          const user = await res.json();
          setTimeout(() => {
            message.success('Login Successfully');
            // localStorage.setItem('isAuthenticated', 'true');
            redirect('/layouts/dashboard');
            // window.location.reload();
          }, 1000);
          return user;
        
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      console.log({ token});
      if (token) return { ...token};
      return token;
    },
    async session({ token, session }) {
      // session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import { useSession } from "next-auth/react";


function Protected() {
  const { data: session } = useSession();
  
  if (!session) {
    return <div>You are not authenticated. Please sign in.</div>;
  }
  return <div>Welcome</div>;
}

export default Protected;

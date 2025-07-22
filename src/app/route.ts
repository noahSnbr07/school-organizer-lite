import getAuth from './server/get-auth';
import { redirect } from 'next/navigation';

export async function GET() {

  //redirect from index
  //either dashboard or login
  //verify token and proceed

  const auth = await getAuth();
  if (!auth) redirect("/login");
  else redirect("/dashboard");
}
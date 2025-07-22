import getAuth from './server/get-auth';
import { redirect } from 'next/navigation';

export async function GET() {

  const auth = await getAuth();
  if (!auth) redirect("/login");
  else redirect("/dashboard");
}
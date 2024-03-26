import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function getUserData() {
  if (!cookies().has('access_token_cookie')) {
    redirect('/');
  }
  const access_token_cookie = cookies().get('access_token_cookie')?.value;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/user`,
    {
      cache: 'no-cache',
      headers: {
        credentials: 'include',
        Cookie: `access_token_cookie=${access_token_cookie}`,
      },
    },
  );
  if (!response.ok) {
    redirect('/');
  }
  return response.json();
}

export default async function Dashboard() {
  const response = await getUserData();
  return <h1>{response?.logged_in_as.first_name}</h1>;
}

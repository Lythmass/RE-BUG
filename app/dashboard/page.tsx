import { cookies } from 'next/headers';

async function getUserData() {
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
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Dashboard() {
  const response = await getUserData();
  return <h1>{response.logged_in_as.first_name}</h1>;
}

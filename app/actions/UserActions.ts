'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getUserDataAction = async () => {
  if (!cookies().has('access_token_cookie')) {
    redirect('/');
  }
  const access_token_cookie = cookies().get('access_token_cookie')?.value;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/user`,
    {
      next: { revalidate: 3600 },
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
};

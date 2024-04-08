'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const FetchAuthDataActions = async (query: string) => {
  if (!cookies().has('access_token_cookie')) {
    redirect('/');
  }
  const access_token_cookie = cookies().get('access_token_cookie')?.value;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${query}`, {
    next: { revalidate: 3600, tags: [query] },
    headers: {
      credentials: 'include',
      Cookie: `access_token_cookie=${access_token_cookie}`,
    },
  });
  if (!response.ok && response.status != 404) {
    redirect('/');
  }
  if (response.status == 404) return { data: { name: 'Page Not Found' } };
  return response.json();
};

export const revalidateData = async (query: string) => {
  revalidateTag(query);
};

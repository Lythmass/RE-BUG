import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const loginAction = async (formData: FormData) => {
  const response = await instance.post('/users/login', formData);
  return response;
};

export const registerAction = async (formData: FormData) => {
  const response = await instance.post('/users/register', formData);
  return response;
};

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

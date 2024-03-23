import type { Metadata } from 'next';
import '../globals.css';
import { roboto_mono } from 'fonts';
import { AuthLayout } from 'components';

export const metadata: Metadata = {
  title: 'RE-BUG',
  description: 'Bug tracker app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`w-full min-h-screen py-10 lg:py-0 flex justify-center items-center ${roboto_mono.className}`}
      >
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}

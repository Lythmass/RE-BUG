import type { Metadata } from 'next';
import '../globals.css';
import { roboto_mono } from 'fonts';
import {
  AnalyticsDataContainer,
  BugsDataContainer,
  ProjectsDataContainer,
  UserDataContainer,
} from 'components';

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
        className={`w-full h-screen p-10 flex flex-col ${roboto_mono.className}`}
      >
        <div className='w-full flex justify-between'>
          <UserDataContainer />
          <AnalyticsDataContainer />
        </div>
        <div className='w-full flex justify-between'>
          <ProjectsDataContainer />
          <BugsDataContainer>{children}</BugsDataContainer>
        </div>
      </body>
    </html>
  );
}

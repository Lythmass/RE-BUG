import type { Metadata } from 'next';
import '../globals.css';
import { roboto_mono } from 'fonts';
import {
  AddProjectModal,
  AnalyticsDataContainer,
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
        className={`w-full h-screen p-10 flex flex-col gap-5 ${roboto_mono.className}`}
      >
        <AddProjectModal />
        <div className='w-full h-1/3 flex justify-between gap-5'>
          <UserDataContainer />
          <AnalyticsDataContainer />
        </div>
        <div className='w-full h-full overflow-hidden flex justify-between gap-5'>
          <ProjectsDataContainer />
          {children}
        </div>
      </body>
    </html>
  );
}

'use client';
import { raleway } from 'fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ProjectType } from 'types';

export const ProjectOption: React.FC<ProjectType> = (props) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/dashboard/${props.project_id}`}
      className={`${raleway.className} ${pathname == `/dashboard/${props.project_id}` ? 'bg-dark text-light' : 'hover:bg-dark hover:text-light'} font-medium w-full flex gap-1 cursor-default px-2 py-1`}
    >
      <h1>{props.id}.</h1>
      <h1>{props.project}</h1>
    </Link>
  );
};

export default ProjectOption;

'use client';
import { FetchAuthDataActions } from 'actions';
import { ContainerLayout } from 'components';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProjectType } from 'types';

export const AnalyticsDataContainer = () => {
  const [project, setProject] = useState<ProjectType>();
  const params = useParams();
  useEffect(() => {
    const fetchProject = async () => {
      const response = await FetchAuthDataActions(`/projects/get/${params.id}`);
      if (response.status == 404) {
        alert(response.data.data.name);
      }
      setProject(response.data);
      return response;
    };
    fetchProject();
  }, [params.id]);
  return (
    <ContainerLayout width='75%'>
      <h1>Project: {project?.project}</h1>
      <h1>Total Bugs: {project?.bugs?.length}</h1>
      <h1>
        Oldest Bug:{' '}
        {project?.bugs &&
          new Date(project?.bugs[0]?.created_at).toLocaleDateString()}
      </h1>
      <h1>
        Newest Bug:{' '}
        {project?.bugs &&
          new Date(
            project?.bugs[project?.bugs?.length - 1]?.created_at,
          ).toLocaleDateString()}
      </h1>
    </ContainerLayout>
  );
};

export default AnalyticsDataContainer;

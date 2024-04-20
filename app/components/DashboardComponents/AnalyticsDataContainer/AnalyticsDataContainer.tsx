'use client';
import { FetchAuthDataActions } from 'actions';
import { ContainerLayout } from 'components';
import { pieChartOptions } from 'config';
import { fillPieChartData } from 'helpers';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { ProjectAnalyticsType } from 'types';

export const AnalyticsDataContainer = () => {
  const [project, setProject] = useState<ProjectAnalyticsType>();
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
      <div className='flex'>
        <div className='w-full'>
          <h1>
            Project: <span className='font-bold'>{project?.project}</span>
          </h1>
          <h1>
            Total Bugs:{' '}
            <span className='font-bold'>{project?.bugs_length}</span>
          </h1>
          <h1>
            Oldest Bug:{' '}
            <span className='font-bold'>
              {new Date(project?.oldest_bug).toLocaleDateString()}
            </span>
          </h1>
          <h1>
            Newest Bug:{' '}
            <span className='font-bold'>
              {new Date(project?.newest_bug).toLocaleDateString()}
            </span>
          </h1>
        </div>

        {project?.statuses && project?.severities && (
          <div className='w-full h-1/2 flex justify-between'>
            <Chart
              {...pieChartOptions}
              data={fillPieChartData(project?.statuses)}
            />
            <Chart
              data={fillPieChartData(project?.severities)}
              {...pieChartOptions}
            />
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default AnalyticsDataContainer;

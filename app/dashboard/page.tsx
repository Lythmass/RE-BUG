import { ContainerLayout } from 'components';

export default async function Dashboard() {
  return (
    <ContainerLayout width='75%'>
      <h1 className='text-4xl text-center w-full capitalize'>
        choose an existing project or create one.
      </h1>
    </ContainerLayout>
  );
}

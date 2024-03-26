import { ReactNode } from 'react';

export const BugsDataContainer: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div>
      <h1>BugsDataContainer</h1>
      {props.children}
    </div>
  );
};

export default BugsDataContainer;

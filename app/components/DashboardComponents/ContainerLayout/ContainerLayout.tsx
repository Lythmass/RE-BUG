import { ReactNode } from 'react';

export const ContainerLayout: React.FC<{
  children: ReactNode;
  width: string;
}> = (props) => {
  return (
    <div
      style={{ width: props.width }}
      className={`h-full bg-light rounded-xl p-4 text-dark`}
    >
      {props.children}
    </div>
  );
};

export default ContainerLayout;

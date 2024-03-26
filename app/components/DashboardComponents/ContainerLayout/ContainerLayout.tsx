import { ReactNode } from 'react';

export const ContainerLayout: React.FC<{
  children: ReactNode;
  width: string;
}> = (props) => {
  return (
    <div className={`w-[${props.width}] h-full bg-light rounded-xl p-4`}>
      {props.children}
    </div>
  );
};

export default ContainerLayout;

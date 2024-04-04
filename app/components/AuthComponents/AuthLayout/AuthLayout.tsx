export const AuthLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className='border backdrop-brightness-50 border-light min-w-[30rem] rounded-xl shadow-2xl'>
      {props.children}
    </div>
  );
};

export default AuthLayout;

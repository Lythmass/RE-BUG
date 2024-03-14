export const AuthLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className='border backdrop-brightness-50 border-light w-[40%] h-[33vw] rounded-xl shadow-2xl'>
      {props.children}
    </div>
  );
};

export default AuthLayout;

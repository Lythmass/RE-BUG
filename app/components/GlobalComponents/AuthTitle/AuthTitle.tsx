export const AuthTitle: React.FC<{ text: string }> = (props) => {
  return (
    <h1 className='uppercase leading-none text-4xl font-bold text-light'>
      {props.text} <span className='text-accent-1'>Re-bug</span>
    </h1>
  );
};

export default AuthTitle;

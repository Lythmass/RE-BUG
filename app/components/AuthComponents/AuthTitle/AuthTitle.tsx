export const AuthTitle: React.FC<{ text: string; text_opt?: string }> = (
  props,
) => {
  return (
    <h1 className='uppercase leading-none text-4xl font-bold text-light text-center'>
      {props.text} <span className='text-accent-1'>Re-bug</span>{' '}
      {props.text_opt}
    </h1>
  );
};

export default AuthTitle;

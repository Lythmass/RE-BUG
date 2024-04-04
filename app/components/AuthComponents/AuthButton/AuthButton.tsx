import { raleway } from 'fonts';

export const AuthButton: React.FC<{ text: string }> = (props) => {
  return (
    <button
      type='submit'
      className={`${raleway.className} cursor-pointer transition-all bg-transparent border border-accent-2 text-accent-2 text-center font-bold w-full hover:bg-accent-2 text-xl py-2 px-3 rounded-full hover:text-dark`}
    >
      {props.text}
    </button>
  );
};

export default AuthButton;

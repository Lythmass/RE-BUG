export const DateContainer: React.FC<{ date: string }> = (props) => {
  return (
    <h1 className='font-medium border border-dark px-3 py-1'>{props.date}</h1>
  );
};

export default DateContainer;

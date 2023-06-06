export const Square = (props) => {
  return (
    <div className="square" onClick={props.onClick}>
      <p>{props.value}</p>
    </div>
  );
};

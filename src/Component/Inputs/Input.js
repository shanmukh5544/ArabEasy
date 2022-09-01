


export default function Input(props) {
  const InputClass =
    "form-control" + (props.className ? ` ${props.className}` : "");
  const InputType = props.type ? `${props.type}` : "text";
  return (
    <>
      <input {...props} type={InputType} className={InputClass} />
    </>
  );
}

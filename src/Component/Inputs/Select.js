


export default function Select(props) {
  const Selectclass =
    "form-select" + (props.className ? ` ${props.className}` : "");
    // console.log(props.options);
   return (
    <>
      <select  className={Selectclass} >
        { 
          props.options.map(e=>{
            // console.log(e.values)
            return <option value={e.values}>{e.values}</option>
            // return console.log(e);
          })
         }
      </select>
    </>
  );
}

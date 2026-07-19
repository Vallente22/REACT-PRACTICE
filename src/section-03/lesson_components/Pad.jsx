const Pad = (props) => {
    
  return (
    <button className={props.on ? "on" : undefined}  
      style={{backgroundColor: props.color}}
      onClick={props.toggle}  
    ></button>
  )
}

export default Pad;
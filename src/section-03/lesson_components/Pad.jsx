const Pad = (props) => {
  /**
   * The inline arrow function waits until the button is clicked.
   * Arrow function handles the button's click event.
   * When the click happens, it calls props.toggle(props.id).
   * This lets us pass the id of the clicked pad to the parent
   * component's togglePad function.
   */
  return (
    <button className={props.on ? "on" : undefined}  
      style={{backgroundColor: props.color}}
      onClick={() => props.toggle(props.id)}  
    ></button>
  )
}

export default Pad;
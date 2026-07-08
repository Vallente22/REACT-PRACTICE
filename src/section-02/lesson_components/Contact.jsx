//challenge from lesson 10 use case of the parameter to get the prop

const Contact = (props) => {
  console.log(props)
  return (
    <>
    <article className="contact-card">
        <img 
            src={props.img}
            alt="Photo of Mr. Whiskerson"
        />
        <h3>{props.name}</h3>
        <div className="info-group">
            <img 
                src="src\section-02\assets\phone-icon.png" 
                alt="phone icon" 
            />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img 
                src="src\section-02\assets\mail-icon.png" 
                alt="mail icon"
            />
            <p>{props.email}</p>
        </div>
    </article>
    </>
  )
}

export default Contact;
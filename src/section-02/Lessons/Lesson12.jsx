//transferred contact component here to see the component's progression each lesson
//might update the main file for contact component if possible
//challenge this time is to deconstructure the prop object
const Contact = ({img, name, phone, email}) => {
  return (
    <>
    <article className="contact-card">
        <img 
            src={img}
            alt="Photo of Mr. Whiskerson"
        />
        <h3>{name}</h3>
        <div className="info-group">
            <img 
                src="src\section-02\assets\phone-icon.png" 
                alt="phone icon" 
            />
            <p>{phone}</p>
        </div>
        <div className="info-group">
            <img 
                src="src\section-02\assets\mail-icon.png" 
                alt="mail icon"
            />
            <p>{email}</p>
        </div>
    </article>
    </>
  )
}

const Lesson12 = () => {
  return (
    <>
    <div className="contacts">
      <Contact 
        img="src\section-02\assets\mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="src\section-02\assets\pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com" 
      />
      <Contact 
        img="src\section-02\assets\bacot.png"
        name="Bacot Tolol" 
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="src\section-02\assets\tux.png"
        name="Tux Edo" 
        phone="(212) 555-2345"
        email="tux@me.com"
      />
    </div>
    </>
  )
}

export default Lesson12;
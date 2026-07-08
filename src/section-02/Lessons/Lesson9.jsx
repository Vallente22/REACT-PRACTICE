import Contact from "../lesson_components/Contact";


const Lesson9 = () => {
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

export default Lesson9;
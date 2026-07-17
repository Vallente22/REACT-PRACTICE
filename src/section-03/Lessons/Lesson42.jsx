import { useState } from "react"
import "../lesson_styles/lesson19.css"
import avatar from "../assets/user.png"
import Star from "../lesson_components/Star"


const Lesson42 = () => {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  /**
   * added a custom attribute in the custom component so that 
   * it can handle the onclick attribute of a button. basically passing handleClick(a custom
   * attribute of a custom component which is the Star and then in the Star component,
   * the handleClick will be passed by as a prop object to the onClick of button)
   */

  function toggleFavorite() {
    setContact(prev => ({...prev, isFavorite: !prev.isFavorite }))
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}></Star>
          <h2 className="name">
            {`${contact.firstName} ${contact.lastName}`}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}

export default Lesson42;
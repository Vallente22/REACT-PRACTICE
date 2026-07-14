import { useState } from "react"
import "../lesson_styles/lesson19.css"
import avatar from "../assets/user.png"
import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"

const Lesson19 = () => {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    console.log("Toggle Favorite")
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
          <button
            onClick={toggleFavorite}
            aria-pressed={false}
            className="favorite-button"
          >
          <img
            src={starEmpty}
            alt="empty star icon"
            className="favorite"
          />
          </button>
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

export default Lesson19;
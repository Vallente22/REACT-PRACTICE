import { useState } from "react"

export default function Main() {

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgUrl: "http://i.imgflip.com/1bij.jpg"
  })

  /**
   * Challenge: update the topText value in the meme state
   * object every time the topText input box is changed
   * 
   * Note: don't worry about bottomText at this point. DONE
   */
  
  const handleChange = (event) => {
    const {value, name} = event.currentTarget
    setMeme(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="form">
        <label>Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imgUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
   </main>
  )
}
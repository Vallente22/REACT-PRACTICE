import { useEffect, useState } from "react"

export default function Main() {

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgUrl: "http://i.imgflip.com/1bij.jpg"
  })

  const handleChange = (event) => {
    const {value, name} = event.currentTarget
    setMeme(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const [allMemes, setAllMemes] = useState([])
  /**
   * Challenge: Get a random image from the array of
   * allMemes when the user clicks the button. Once
   * you've gotten a random image from the array, make
   * sure to write the code that will display that
   * random meme image to the page.
   */

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  const getRandomMeme = () => {
    const randomMemeIndex = Math.floor(Math.random() * allMemes.length)
    const randomMeme = allMemes[randomMemeIndex] 

    setMeme(prev => {
      return {
        ...prev,
        imgUrl: randomMeme.url
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
        <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imgUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
   </main>
  )
}
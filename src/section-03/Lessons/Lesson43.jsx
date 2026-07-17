import { useState } from "react"
import Body from "../lesson_components/lesson43_components/Body"
import Header from "../lesson_components/lesson43_components/Header"

//moved the state from header to this file so that both header and body can access the prop

const Lesson43 = () => {
   const [userName, setUserName] = useState("Joe")

  return (
    <main>
      <Header username={userName} />
      <Body username={userName} />
    </main>
  )
}

export default Lesson43;
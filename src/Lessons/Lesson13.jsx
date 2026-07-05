import { createRoot } from 'react-dom/client'
import reactLogo from '../assets/react-logo.png'

/*
const TemporaryName = () => {
  return (
    <main>
      <img src={reactLogo} width="40px" alt="React Logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </main>
  )
}
*/

//challenge part 1
/*
const Page = () => {
  return (
    <main>
      <h1>Reasons why Im excited to learn React</h1>
      <ol>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
        <li>Reason 4</li>
      </ol>
    </main>
  )
}

const Lesson13 = () => {
  return (
    <Page />
  )
}

*/

// challenge part 2
const Page = () => {
  return (
    <body>
      <header>
        <img src={reactLogo} width="40px" alt="React Logo" />
      </header>

      <main>
        <h1>Reasons why Im excited to learn React</h1>
        <ol>
          <li>Reason 1</li>
          <li>Reason 2</li>
        </ol>
      </main>

      <footer>
        <small> © 2026 Vallente development. All rights reserved.</small>
      </footer>
    </body>
  )
}

const Lesson13 = () => {
  return (
    <Page />
  )
}


export default Lesson13;
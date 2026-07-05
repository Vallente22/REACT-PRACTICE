import { createRoot } from 'react-dom/client'
import reactLogo from '../assets/react-logo.png'

const Page = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
//mini challenge: create separate component for the header
const Header = () => {
  return (
      <header>
        <img src={reactLogo} width="40px" alt="React Logo" />
      </header>
  )
}

//challenge same with main and footer
const Main = () => {
  return (
    <main>
      <h1>Reasons why Im excited to learn React</h1>
      <ol>
        <li>Reason 1</li>
        <li>Reason 2</li>
      </ol>
    </main>
  )
}

const Footer = () => {
  return (
    <footer>
      <small> © 2026 Vallente development. All rights reserved.</small>
    </footer>
  )
}

const Lesson16 = () => {
  return (
      <Page />
  )
}

export default Lesson16;
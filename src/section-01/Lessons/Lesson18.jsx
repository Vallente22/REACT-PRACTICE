import { createRoot } from "react-dom/client"
import reactLogo from "../assets/react-logo.png"

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

const Page = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
      <header className="header">
        <img className="nav-logo" src={reactLogo} alt="React Logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
  )
}

const Main = () => {
  return (
    <main className="main-content">
      <h1>Reasons why I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React</li>
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

const Lesson18 = () => {
  return (
      <Page />
  )
}

export default Lesson18;
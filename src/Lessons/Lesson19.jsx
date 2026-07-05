import { createRoot } from "react-dom/client"
import Header from "../lesson_components/Header.jsx"
import MainContent from "../lesson_components/MainContent.jsx"
import Footer from "../lesson_components/Footer.jsx"

//challenge: separate header, main, and footer into their own components
// and import them into this file. Then use them in the Page component.

const Page = () => {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

const Lesson19 = () => {
  return (
      <Page />
  )
}

export default Lesson19;
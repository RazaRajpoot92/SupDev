import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./style/App.scss"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Notfound from "./components/Notfound"

function App() {
  return (
    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/service" element={<Services />} />
        <Route path="/*" element={<Notfound />} />

      </Routes>

      <Footer />

    </Router>
  )
}

export default App;

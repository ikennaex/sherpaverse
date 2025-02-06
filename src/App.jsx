import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import { Routes, Route} from "react-router-dom"
import Whoarewepage from './Pages/Homepage/Whoarewepage'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Whychooseuspage from './Pages/Homepage/Whychooseuspage'
import Blog from './Pages/Homepage/Blog'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Homepage />} />
        <Route path = '/about-us' element = {<Whoarewepage />} />
        <Route path = '/whychooseus' element = {<Whychooseuspage />} />
        <Route path = '/blog' element = {<Blog />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  )
}

export default App

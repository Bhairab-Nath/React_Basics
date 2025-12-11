import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import UseEffect from './UseEffect'
import Parent from './pages/usecallback/Parent'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/useeffect' element={<UseEffect/>} />
        <Route path='/usecallback' element={<Parent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

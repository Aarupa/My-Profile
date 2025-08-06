import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBot from './Components/Chat.jsx'
import { Navbar } from './Components/Navbar.jsx'
import { Footer } from './Components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-300 ">
      <Navbar />
      {/* <ChatBot /> */}
      <Footer />
    </div>
  )

}

export default App

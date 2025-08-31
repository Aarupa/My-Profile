import { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import './App.css';
import { Navbar } from './Components/Navbar.jsx';
import { Footer } from './Components/Footer.jsx';
import ChatBot from './Components/Chat.jsx';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
  <div className="min-h-screen w-full h-screen bg-gray-50 scroll-smooth relative">
      <Navbar />
      {/* Floating Bot Icon */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center text-3xl"
        onClick={() => setShowChat(true)}
        aria-label="Open chat bot"
        style={{ transition: 'transform 0.2s', transform: showChat ? 'scale(0.9)' : 'scale(1)' }}
      >
        <FaRobot />
      </button>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed bottom-20 right-6 z-50 animate-fade-in">
          <div className="relative">
            <button
              className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow text-lg"
              onClick={() => setShowChat(false)}
              aria-label="Close chat bot"
            >
              <FaTimes />
            </button>
            <ChatBot greeting="Hi! How can I help you today?" />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;

import { useState, useRef } from "react";
import { FaMicrophone } from "react-icons/fa";

const ChatBot = ({ greeting }) => {
    const [user_input, setUser_input] = useState("");
    const [result, setResult] = useState(null);
    const [messages, setMessages] = useState(greeting ? [{ from: "bot", text: greeting }] : []);
    const [loading, setLoading] = useState(false);
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef(null);

    // Speech-to-text mic handler
    const handleMicClick = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Speech recognition not supported in this browser.');
            return;
        }
        if (listening) {
            recognitionRef.current.stop();
            setListening(false);
            return;
        }
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setUser_input("");
            sendSpeechToBackend(transcript);
        };
        recognition.onend = () => {
            setListening(false);
        };
        recognition.onerror = () => {
            setListening(false);
        };
        recognitionRef.current = recognition;
        recognition.start();
        setListening(true);
    };

    // Send speech text to backend and play response
    const sendSpeechToBackend = async (speechText) => {
        setMessages((prev) => [...prev, { from: "user", text: speechText }]);
        setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/MyAPP/Chat/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_input: speechText }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessages((prev) => [...prev, { from: "bot", text: data.result }]);
                setResult(data.result);
                playBotSpeech(data.result);
            } else {
                setMessages((prev) => [...prev, { from: "bot", text: "Sorry, something went wrong." }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { from: "bot", text: "Server error: " + error.message }]);
        }
        setLoading(false);
    };

    // Play bot response using Web Speech API
    const playBotSpeech = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new window.SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user_input.trim()) return;
        setMessages((prev) => [...prev, { from: "user", text: user_input }]);
        setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/MyAPP/Chat/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_input: user_input }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessages((prev) => [...prev, { from: "bot", text: data.result }]);
                setResult(data.result);
                playBotSpeech(data.result);
            } else {
                setMessages((prev) => [...prev, { from: "bot", text: "Sorry, something went wrong." }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { from: "bot", text: "Server error: " + error.message }]);
        }
        setUser_input("");
        setLoading(false);
    };

    return (
        <div className="max-w-md w-full sm:w-96 bg-white p-4 rounded-2xl shadow-2xl border border-blue-300">
            <h2 className="text-2xl font-bold mb-3 text-center text-blue-700 flex items-center justify-center gap-2">
                My Assistant <span role="img" aria-label="bot">🤖</span>
            </h2>
            <div className="h-48 sm:h-56 overflow-y-auto mb-3 px-2 bg-blue-50 rounded-lg border border-blue-100">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                        <span className={`inline-block px-4 py-2 rounded-xl text-base ${msg.from === "user" ? "bg-blue-200 text-blue-900" : "bg-white text-gray-700 border border-blue-100"}`}>{msg.text}</span>
                    </div>
                ))}
                {loading && (
                    <div className="text-center text-gray-400 text-xs animate-pulse">Bot is typing...</div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full items-center">
                <input
                    type="text"
                    value={user_input}
                    onChange={(e) => setUser_input(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border-2 border-blue-500 rounded-xl focus:outline-none focus:border-blue-700 bg-white text-gray-900 text-base"
                    required
                    disabled={loading}
                    style={{ background: 'white', color: '#222', fontWeight: '500', letterSpacing: '0.5px' }}
                />
                <button
                    type="button"
                    className={`bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center text-xl transition-all duration-200 ${listening ? 'animate-pulse bg-green-500' : ''}`}
                    onClick={handleMicClick}
                    title={listening ? 'Listening...' : 'Speak'}
                    disabled={loading}
                >
                    <FaMicrophone />
                </button>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl text-base font-semibold"
                    disabled={loading}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBot;
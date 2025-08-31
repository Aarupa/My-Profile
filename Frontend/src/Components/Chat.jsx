import { useState } from "react";

const ChatBot = ({ greeting }) => {
    const [user_input, setUser_input] = useState("");
    const [result, setResult] = useState(null);
    const [messages, setMessages] = useState(greeting ? [{ from: "bot", text: greeting }] : []);
    const [loading, setLoading] = useState(false);

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
    <div className="max-w-md w-full sm:w-80 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-blue-200">
            <h2 className="text-xl font-bold mb-2 text-center text-blue-700">My Assistant 🤖</h2>
            <div className="h-40 sm:h-48 overflow-y-auto mb-2 px-1 sm:px-2">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                        <span className={`inline-block px-3 py-2 rounded-lg text-sm ${msg.from === "user" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-700"}`}>{msg.text}</span>
                    </div>
                ))}
                {loading && (
                    <div className="text-center text-gray-400 text-xs">Bot is typing...</div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
                <input
                    type="text"
                    value={user_input}
                    onChange={(e) => setUser_input(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 bg-white text-gray-900 text-base sm:text-sm"
                    required
                    disabled={loading}
                    style={{ background: 'white', color: '#222', fontWeight: '500', letterSpacing: '0.5px' }}
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-base sm:text-sm"
                    disabled={loading}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBot;
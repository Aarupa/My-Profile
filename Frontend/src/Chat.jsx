import { useState } from "react";

const ChatBot = () => {
    const [user_input, setUser_input] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/MyAPP/Chat/',
                {
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                    },
                    body : JSON.stringify({user_input : user_input}),
                }
            );
            const data = await response.json();
            if (response.ok) {
                setResult(data.result);
            }
            else {
                alert("Error: " + JSON.stringify(data));
            }
        }
        catch (error) {
            alert('Server error: '+error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">My Assistent</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={user_input}
                  onChange={(e) => setUser_input(e.target.value)}
                  placeholder="Ask me somthing."
                  className="w-full p-2 border rounded"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  send
                </button>
            </form>

      {result !== null && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          Result: {result}
        </div>
      )}

        </div>
    );

};
export default ChatBot
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AssistantInterface = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [slowMode, setSlowMode] = useState(false);

  const speak = (text: string) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = slowMode ? 0.7 : 1.0;
    utter.pitch = 0.85; // warm, calm voice
    window.speechSynthesis.speak(utter);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, `🧑‍🦳 You: ${input}`]);
    speak(input);
    setInput("");
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition(); // for Chrome
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript;
      const confirmed = window.confirm(`Did you mean: "${spoken}"?`);
      if (confirmed) {
        setMessages((prev) => [...prev, `🎙️ You (spoken): ${spoken}`]);
        speak(spoken);
      }
    };

    recognition.onerror = (err) => {
      alert("Voice input failed. Try again.");
      console.error(err);
    };

    recognition.start();
  };

  return (
    <section id="assistant-interface" className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-mira-orange/20">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold mira-gradient-text">
            MIRA Assistant Interface
          </h2>
          <p className="text-foreground/70 text-lg">
            This is where your assistant interface is now live.
          </p>

          {/* Chat Log */}
          <div className="border rounded-lg p-4 h-48 overflow-y-auto text-left text-sm bg-white/40 text-gray-800">
            {messages.length === 0 ? (
              <p className="text-gray-500 italic">No messages yet...</p>
            ) : (
              messages.map((msg, idx) => <p key={idx}>{msg}</p>)
            )}
          </div>

          {/* Input + Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-2 rounded-lg w-full sm:w-auto"
            />
            <Button onClick={handleSend} className="bg-mira-orange text-white">
              Send
            </Button>
            <Button variant="outline" onClick={handleVoiceInput}>
              🎤 Speak
            </Button>
          </div>

          {/* Slow Mode Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSlowMode((s) => !s)}
            className="text-sm text-gray-600 underline"
          >
            {slowMode ? "🕓 Slow Mode: ON" : "⚡ Slow Mode: OFF"}
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default AssistantInterface;

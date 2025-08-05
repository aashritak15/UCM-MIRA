import React from "react";

const AssistantInterface = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-16 py-20"
      style={{
        background: `radial-gradient(circle at 20% 30%, #ffe9d6 0%, transparent 60%), 
                     radial-gradient(circle at 80% 70%, #ffe2e7 0%, transparent 60%)`,
      }}
    >
      {/* Left Side */}
      <div className="w-[45%] flex flex-col items-start justify-center space-y-6 pr-10">
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 text-transparent bg-clip-text mb-2">
            Introducing MIRA
          </h1>
          <h2 className="text-2xl font-medium bg-gradient-to-r from-orange-300 to-rose-300 text-transparent bg-clip-text mb-4">
            Your very own personal assistant
          </h2>
        </div>

        <div className="mb-6">
          <img
            src="/elder-reading.png"
            alt="Elder reading"
            className="w-[480px] h-auto" // made bigger
          />
        </div>

        <p className="text-lg text-gray-700 mt-6">
          <strong>Type or speak</strong> your first message to get started.
        </p>
      </div>

      {/* Right Side - Chatbot */}
      <div className="w-[40%]">
        <iframe
          src="https://mira-chatbot-three.vercel.app/"
          width="100%"
          height="700"
          style={{
            border: "none",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
          title="MIRA Chatbot"
        ></iframe>
      </div>
    </section>
  );
};

export default AssistantInterface;

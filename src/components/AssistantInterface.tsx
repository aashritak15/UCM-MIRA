import React from "react";

const AssistantInterface = () => {
  return (
    <section id="assistant-interface" className="min-h-screen flex items-center justify-center p-4">
      <iframe
        src="https://mira-chatbot-three.vercel.app/"
        width="100%"
        height="800vh"
        style={{ border: "none" }}
        title="MIRA Chatbot"
      ></iframe>
    </section>
  );
};

export default AssistantInterface;

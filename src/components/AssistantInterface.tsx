import { Card } from "@/components/ui/card";

const AssistantInterface = () => {
  return (
    <section id="assistant-interface" className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-mira-orange/20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 mira-gradient-text">
            MIRA Assistant Interface
          </h2>
          <p className="text-foreground/70 text-lg">
            This is where your assistant interface will be implemented.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default AssistantInterface;
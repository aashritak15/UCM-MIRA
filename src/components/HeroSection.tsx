import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAssistant = () => {
    const assistantSection = document.getElementById("assistant-interface");
    if (assistantSection) {
      assistantSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white text-center text-gray-900 px-6 py-12">
  
      <div className="absolute inset-0 pointer-events-none z-0">

  <div
    className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-300 rounded-full filter blur-[120px]"
    style={{ opacity: 0.6 }}
  ></div>


  <div
    className="absolute top-[-180px] right-[-200px] w-[500px] h-[500px] bg-orange-200 rounded-full filter blur-[120px]"
    style={{ opacity: 0.6 }}
  ></div>

 
  <div
    className="absolute bottom-[-180px] left-[-200px] w-[500px] h-[500px] bg-orange-200 rounded-full filter blur-[120px]"
    style={{ opacity: 0.7 }}
  ></div>


  <div
    className="absolute bottom-[-200px] right-[-180px] w-[500px] h-[500px] bg-red-200 rounded-full filter blur-[120px]"
    style={{ opacity: 0.7 }}
  ></div>
</div>


      {/* Main Content */}
      <div className="relative z-10 max-w-4xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 drop-shadow-sm">
          Hello there! Welcome to
        </h1>

        <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tight mira-gradient-text leading-none">
          MIRA
        </h2>

        <p className="text-xl md:text-2xl font-semibold text-gray-700 drop-shadow-sm tracking-wide">
          Mindful Intelligent Responsive Assistant
        </p>

        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-4">Click to get started</p>
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAssistant}
            className="rounded-full w-16 h-16 hover:bg-mira-orange/10 transition-all duration-300 hover:scale-110"
          >
            <ChevronDown className="w-8 h-8 text-mira-orange animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

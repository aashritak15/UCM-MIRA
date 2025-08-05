import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAssistant = () => {
    const assistantSection = document.getElementById('assistant-interface');
    if (assistantSection) {
      assistantSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-50/40 via-transparent to-yellow-50/40" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mira-orange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-mira-yellow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mira-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Greeting */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/80 mb-8">
            Hello there! Welcome to
          </h1>
          
          {/* MIRA Title */}
          <div className="space-y-4">
            <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tight mira-gradient-text leading-none">
              MIRA
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/70 tracking-wide">
              Mindful Intelligent Responsive Assistant
            </p>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm text-foreground/50 mb-4">
            Click to get started
          </p>
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
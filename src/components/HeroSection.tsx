import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-underwater.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Underwater coral reef scene" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
          🌊 OCEAN MEDIA PROJECT
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 text-primary-foreground/90 font-light">
          НОВОЕ ИЗМЕРЕНИЕ ВИДЕО: RELAX И AMBIENT КОНТЕНТ ДЛЯ ВАШЕГО БИЗНЕСА
        </h2>
        <div className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto space-y-2">
          <p>📌 Профессиональная видеотека с глобальными правами</p>
          <p>📌 Уникальные видео подводного и окружающего мира</p>
          <p>📌 Контент для TV, Digital Signage, рекламы, SPA, отелей и других сфер</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-ocean text-primary-foreground shadow-depth hover:shadow-ocean transition-all duration-500 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Смотреть демо
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
          >
            Каталог видео
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="h-6 w-6 text-primary-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
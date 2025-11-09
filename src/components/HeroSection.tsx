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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float text-white">
          OCEAN MEDIA PROJECT
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 text-white font-light">
          НОВОЕ ИЗМЕРЕНИЕ ВИДЕО: RELAX И AMBIENT КОНТЕНТ ДЛЯ ВАШЕГО БИЗНЕСА
        </h2>
        <div className="text-lg md:text-xl mb-12 text-white max-w-3xl mx-auto space-y-2">
          <p className="text-white">📌 Профессиональная видеотека с глобальными правами</p>
          <p className="text-white">📌 Уникальные видео подводного и окружающего мира</p>
          <p className="text-white">📌 Контент для TV, Digital Signage, рекламы, SPA, отелей и других сфер</p>
        </div>
        
        <div className="flex justify-center items-center gap-4">
          <a 
            href="https://www.youtube.com/@OceanMediaProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white shadow-depth hover:shadow-ocean transition-all duration-500 transform hover:scale-105 px-8"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </Button>
          </a>
          
          <a 
            href="https://rutube.ru/channel/61735052/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-[#0078FF] hover:bg-[#0066DD] text-white shadow-depth hover:shadow-ocean transition-all duration-500 transform hover:scale-105 px-8"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Rutube
            </Button>
          </a>
          
          <a 
            href="https://vk.com/oceanmediaproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-[#0077FF] hover:bg-[#0066DD] text-white shadow-depth hover:shadow-ocean transition-all duration-500 transform hover:scale-105 px-8"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.744-.576.744z"/>
              </svg>
              VK
            </Button>
          </a>
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
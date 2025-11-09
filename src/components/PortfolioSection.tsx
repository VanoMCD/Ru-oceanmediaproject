
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";
const PortfolioSection = () => {
  const platforms = [{
    name: "VK",
    link: "https://vk.com/oceanmediaproject",
    description: "Наша группа ВКонтакте"
  }, {
    name: "YouTube-канал",
    link: "https://www.youtube.com/@OceanMediaProject",
    description: "Качественный контент для просмотра"
  }, {
    name: "Rutube-канал", 
    link: "https://rutube.ru/channel/61735052/",
    description: "Российская видеоплатформа"
  }, {
    name: "Vimeo",
    link: "https://vimeo.com/oceanmediaproject",
    description: "Профессиональная видеоплатформа"
  }, {
    name: "🎞️ Shutterstock",
    link: "https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757",
    description: "Премиум-контент для профессионалов"
  }, {
    name: "🎥 Pond5",
    link: "https://pond5.com/artist/videodive", 
    description: "Videodive контент"
  }, {
    name: "🎥 Pond5",
    link: "https://pond5.com/artist/videoton", 
    description: "Videoton контент"
  }, {
    name: "🎥 Pond5",
    link: "https://pond5.com/artist/vmsartstudio619", 
    description: "Vmsartstudio619 контент"
  }, {
    name: "📽 Adobe Stock",
    link: "https://stock.adobe.com/contributor/205029892/videodive",
    description: "Качественный контент для креативных проектов"
  }, {
    name: "📷 iStockphoto",
    link: "https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film",
    description: "Профессиональные видеоматериалы"
  }, {
    name: "📽 Adobe Stock",
    link: "https://stock.adobe.com/contributor/212979533/oceanmediaproject",
    description: "Ocean Media Project контент"
  }, {
    name: "🎬 Pixtastock",
    link: "https://creator-en.pixtastock.com/@videoton/footage",
    description: "Японская платформа для стокового контента"
  }];

  return <section id="platforms" className="pt-1 pb-5 bg-gradient-portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ГДЕ УЖЕ МОЖНО ПОСМОТРЕТЬ НАШ КОНТЕНТ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Подписывайтесь и наслаждайтесь качественным контентом!
            </p>
            
            {/* All Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-accent/20 rounded-lg p-4 text-center hover:border-accent/40 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-center gap-2 font-semibold text-primary group-hover:text-accent transition-colors">
                    {platform.name === "VK" && (
                      <svg className="h-5 w-5 text-[#0077FF]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.744-.576.744z"/>
                      </svg>
                    )}
                    {platform.name === "YouTube-канал" && (
                      <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                    {platform.name === "Rutube-канал" && (
                      <svg className="h-5 w-5 text-[#0078FF]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                      </svg>
                    )}
                    {platform.name === "Vimeo" && (
                      <svg className="h-5 w-5 text-[#1AB7EA]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                      </svg>
                    )}
                    {platform.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{platform.description}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PortfolioSection;
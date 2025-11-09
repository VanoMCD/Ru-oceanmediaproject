
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";
const PortfolioSection = () => {
  const platforms = [{
    name: "📺 YouTube-канал",
    link: "https://www.youtube.com/@OceanMediaProject",
    description: "Качественный контент для просмотра",
    color: "#FF0000"
  }, {
    name: "📺 Rutube-канал", 
    link: "https://rutube.ru/channel/61735052/",
    description: "Российская видеоплатформа",
    color: "#2A9DF4"
  }, {
    name: "📱 VK",
    link: "https://vk.com/oceanmediaproject",
    description: "Наша группа ВКонтакте",
    color: "#0077FF"
  }, {
    name: "🎬 Vimeo",
    link: "https://vimeo.com/oceanmediaproject",
    description: "Профессиональная видеоплатформа",
    color: "#1AB7EA"
  }, {
    name: "🎞️ Shutterstock",
    link: "https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757",
    description: "Премиум-контент для профессионалов",
    color: "#E62117"
  }, {
    name: "🎥 Pond5",
    link: "https://pond5.com/artist/videodive", 
    description: "Videodive контент",
    color: "#00A4E4"
  }, {
    name: "🎥 Pond5",
    link: "https://pond5.com/artist/videoton", 
    description: "Videoton контент",
    color: "#00A4E4"
  }, {
    name: "🎥 Pond5",
    link: "https://pond5.com/artist/vmsartstudio619", 
    description: "Vmsartstudio619 контент",
    color: "#00A4E4"
  }, {
    name: "📽 Adobe Stock",
    link: "https://stock.adobe.com/contributor/205029892/videodive",
    description: "Качественный контент для креативных проектов",
    color: "#FF0000"
  }, {
    name: "📷 iStockphoto",
    link: "https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film",
    description: "Профессиональные видеоматериалы",
    color: "#00AB55"
  }, {
    name: "📽 Adobe Stock",
    link: "https://stock.adobe.com/contributor/212979533/oceanmediaproject",
    description: "Ocean Media Project контент",
    color: "#FF0000"
  }, {
    name: "🎬 Pixtastock",
    link: "https://creator-en.pixtastock.com/@videoton/footage",
    description: "Японская платформа для стокового контента",
    color: "#FF6B9D"
  }];

  return <section id="platforms" className="pt-1 pb-5 bg-gradient-portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ГДЕ УЖЕ МОЖНО ПОСМОТРЕТЬ НАШ КОНТЕНТ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Подписывайтесь и наслаждайтесь качественным контентом!
            </p>
            
            {/* Platforms Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-lg p-4 text-center transition-all duration-300 group"
                  style={{ 
                    borderLeft: `4px solid ${platform.color}`,
                    borderTop: `1px solid ${platform.color}40`,
                    borderRight: `1px solid ${platform.color}40`,
                    borderBottom: `1px solid ${platform.color}40`
                  }}
                >
                  <div className="font-semibold text-primary transition-colors" style={{ color: platform.color }}>{platform.name}</div>
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

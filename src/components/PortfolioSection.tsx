import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";
const PortfolioSection = () => {
  const categories = [{
    id: "underwater",
    title: "Подводный мир",
    description: "Коралловые рифы, морская живность",
    videoCount: "150+ видео",
    preview: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&h=300&fit=crop"
  }, {
    id: "nature",
    title: "Природа",
    description: "Джунгли, горы, леса",
    videoCount: "200+ видео",
    preview: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
  }, {
    id: "elements",
    title: "Элементы природы",
    description: "Огонь, вода, земля, воздух",
    videoCount: "100+ видео",
    preview: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop"
  }, {
    id: "urban",
    title: "Городские пейзажи",
    description: "Современная архитектура, городская природа",
    videoCount: "80+ видео",
    preview: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop"
  }];
  const platforms = [{
    name: "📺 YouTube-канал",
    link: "https://www.youtube.com/@OceanMediaProject",
    description: "Качественный контент для просмотра"
  }, {
    name: "📺 Rutube-канал", 
    link: "https://rutube.ru/channel/61735052/",
    description: "Российская видеоплатформа"
  }, {
    name: "🎞️ Shutterstock",
    link: "#",
    description: "Премиум-контент для профессионалов"
  }, {
    name: "🎥 Pond5",
    link: "#", 
    description: "Videodive, Videoton, Vmsartstudio619"
  }, {
    name: "📽 Adobe Stock",
    link: "#",
    description: "Качественный контент для креативных проектов"
  }, {
    name: "🌍 Getty Images",
    link: "#",
    description: "Эксклюзивные видеоматериалы"
  }];
  return <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">🔍 ГДЕ УЖЕ МОЖНО ПОСМОТРЕТЬ НАШ КОНТЕНТ?</h2>
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
                  className="bg-card border border-accent/20 rounded-lg p-4 text-center hover:border-accent/40 transition-colors duration-300 group"
                >
                  <div className="font-semibold text-primary group-hover:text-accent transition-colors">{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.description}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {categories.map(category => <Card key={category.id} className="group overflow-hidden shadow-ocean hover:shadow-depth transition-all duration-500 border-accent/20">
                <div className="relative">
                  <img src={category.preview} alt={category.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-primary">
                      {category.videoCount}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-background/90 text-primary hover:bg-background shadow-depth">
                      <Play className="mr-2 h-5 w-5" />
                      Превью
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Eye className="mr-2 h-4 w-4" />
                    Смотреть каталог
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-ocean rounded-xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Готовы увидеть больше?</h3>
            <p className="text-xl mb-8 opacity-90">
              Сотни часов профессиональной съемки ждут вас в нашем полном каталоге
            </p>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Запросить полный каталог
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default PortfolioSection;
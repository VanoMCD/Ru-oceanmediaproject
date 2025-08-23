import { Waves } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-deep text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Waves className="h-8 w-8 text-accent animate-ocean-wave" />
                <span className="text-xl font-bold">OCEAN MEDIA GROUP</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональный видеоконтент высочайшего качества для вашего бизнеса. 
                Эксклюзивные кадры подводного мира и природы.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Навигация</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Главная</a>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">О нас</a>
                <a href="#portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors">Каталог</a>
                <a href="#clients" className="text-primary-foreground/80 hover:text-accent transition-colors">Для кого</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Свяжитесь с нами</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>📧 Email: o666699999@gmail.com</div>
                <div>📱 WhatsApp/Telegram: +381 66 66 999 99</div>
                <div>🌍 Сайт: www.oceanmediaproject.com</div>
                <div>💼 LinkedIn: <a href="https://linkedin.com/in/oceanmediaproject" className="hover:text-accent transition-colors">Ocean Media Project</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
              <div>
                © {currentYear} Ocean Media Group. Все права защищены.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span>Pond5</span>
                <span>Shutterstock</span>
                <span>Adobe Stock</span>
                <span>Getty Images</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
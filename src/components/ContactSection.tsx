import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Globe, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "o666699999@gmail.com",
      action: "mailto:o666699999@gmail.com"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp / Viber / Telegram",
      content: "+381 66 66 999 99",
      action: "https://wa.me/38166699999"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Веб-сайт",
      content: "www.oceanmediaproject.com",
      action: "https://www.oceanmediaproject.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами для получения каталога, консультации или заказа эксклюзивного контента
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-ocean border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-accent/30 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-accent/30 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-accent/30 focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-accent/30 focus:border-accent"
                      placeholder="Расскажите о ваших потребностях в видеоконтенте..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-ocean text-primary-foreground shadow-ocean hover:shadow-depth transition-all duration-300"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.action}
                      className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-accent/20 hover:border-accent/40 transition-colors duration-300 group"
                    >
                      <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{info.title}</div>
                        <div className="text-muted-foreground">{info.content}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action Cards */}
              <div className="space-y-4">
                <Card className="bg-gradient-ocean text-primary-foreground border-0">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">Готовы начать?</h4>
                    <p className="mb-4 opacity-90">
                      📩 Свяжитесь с нами — подберем и подготовим контент под Ваш бизнес!
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Получить каталог
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-accent-foreground border-0">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">Нужны тест-материалы?</h4>
                    <p className="mb-4 opacity-90">
                      Предоставим образцы для оценки качества
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                    >
                      Запросить образцы
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
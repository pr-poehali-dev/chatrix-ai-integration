import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">Chatrix</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors">Кейсы</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button>Консультация</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Ваш технологический партнёр в бизнесе
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Chatrix — ваш технологический 
              <span className="text-primary"> партнёр</span> в бизнесе
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Разрабатываем AI-чат-боты, подключаем CRM, автоматизируем процессы и строим IT-решения, 
              которые помогают вашему бизнесу зарабатывать больше.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Rocket" size={20} className="mr-2" />
              Получить бесплатную консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              <Icon name="Globe" size={32} className="inline-block mr-3 text-primary" />
              Кто мы
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chatrix — это команда разработчиков, аналитиков и интеграторов, которые помогают бизнесу 
              перестать терять клиентов, заявки и деньги. Мы любим автоматизацию, сложные интеграции 
              и умные чат-боты, которые действительно работают на бизнес, а не просто отвечают «Здравствуйте».
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              <Icon name="Wrench" size={32} className="inline-block mr-3 text-primary" />
              Что мы делаем
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chat-bots */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bot" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">🤖 AI-чат-боты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Понимают живую речь</li>
                  <li>• Записывают клиентов, обрабатывают заявки, консультируют</li>
                  <li>• Работают 24/7 без выходных</li>
                </ul>
              </CardContent>
            </Card>

            {/* CRM Systems */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">📊 CRM и системы учёта</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AmoCRM, Bitrix24, r_keeper и другие</li>
                  <li>• Интеграции под ключ</li>
                  <li>• Автоматические воронки, сквозная аналитика</li>
                </ul>
              </CardContent>
            </Card>

            {/* Integrations */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">⚡ Интеграции и сервисы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Google Calendar, Google Sheets, платежные системы</li>
                  <li>• Настройка API, обмен данными между системами</li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Solutions */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Monitor" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">🖥 Веб-решения</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Лендинги, сайты, внутренние панели</li>
                  <li>• Всё, что нужно бизнесу, чтобы быть онлайн</li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Solutions */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">🧠 AI-решения на заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Аналитика, персонализированные рекомендации</li>
                  <li>• Кастомные модели под ваши процессы</li>
                </ul>
              </CardContent>
            </Card>

            {/* Problems We Solve */}
            <Card className="hover:shadow-lg transition-shadow bg-red-50 border-red-200">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="AlertTriangle" size={24} className="text-red-600" />
                </div>
                <CardTitle className="text-xl text-red-800">😩 Проблемы, которые мы решаем</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Администраторы не успевают обрабатывать заявки</li>
                  <li>• Клиенты не доходят до визита</li>
                  <li>• Менеджеры теряют контакты и забывают про сделки</li>
                  <li>• Вы не видите, откуда приходят клиенты</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              💡 Почему с нами удобно
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Gauge" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">🏃 Скорость</h3>
              <p className="text-muted-foreground text-sm">Запускаем решения за недели, а не месяцы</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">🎯 Фокус на результате</h3>
              <p className="text-muted-foreground text-sm">Автоматизация ради роста прибыли</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Puzzle" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">🧩 Комплексный подход</h3>
              <p className="text-muted-foreground text-sm">Бот, CRM, интеграции — всё делаем сами</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">💬 Поддержка</h3>
              <p className="text-muted-foreground text-sm">Не бросаем после запуска</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              📚 Кейсы
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Барбершоп</CardTitle>
                <CardDescription>AI-бот + интеграция с Google Calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Рост записей</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">+42%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Экономия времени</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">3x меньше</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Сеть ресторанов</CardTitle>
                <CardDescription>Чат-бот для заказов + CRM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Время обработки</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">-60%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Повторные заказы</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">+30%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Сервисная компания</CardTitle>
                <CardDescription>Bitrix24 + сквозная аналитика</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      Руководитель теперь видит загрузку менеджеров и прогноз продаж
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              🚀 Готовы перестать терять клиентов?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Давайте обсудим вашу задачу — мы предложим решение уже на первой встрече
            </p>
            
            <Card className="text-left">
              <CardHeader>
                <CardTitle>📅 Записаться на консультацию</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о вашей задаче</label>
                  <Textarea 
                    placeholder="Какую проблему хотите решить? Какой у вас бизнес?" 
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">Chatrix</span>
              </div>
              <p className="text-slate-400">
                Собственный опыт разработки продуктов. Команда с бэкграундом в AI и автоматизации.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-400">
                <li>AI-чат-боты</li>
                <li>CRM интеграции</li>
                <li>Веб-разработка</li>
                <li>Автоматизация</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <p>📧 hello@chatrix.dev</p>
                <p>📱 +7 (999) 123-45-67</p>
                <p>💬 Telegram: @chatrix_support</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Chatrix. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
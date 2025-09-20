import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">C</span>
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">Chatrix</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">О нас</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Услуги</a>
              <a href="#cases" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Кейсы</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Контакты</a>
            </div>
            <Button size="sm" className="rounded-full px-6 font-medium bg-primary hover:bg-primary/90">Консультация</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 border-0 rounded-full">
              Ваш технологический партнёр в бизнесе
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-none tracking-tight">
              Chatrix — ваш<br />
              <span className="text-primary">технологический</span><br />
              партнёр в бизнесе
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Разрабатываем AI-чат-боты, подключаем CRM, автоматизируем процессы и строим IT-решения, 
              которые помогают вашему бизнесу зарабатывать больше
            </p>
            <Button size="lg" className="text-lg px-10 py-4 rounded-full bg-primary hover:bg-primary/90 font-medium">
              Получить бесплатную консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Кто мы
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Chatrix — это команда разработчиков, аналитиков и интеграторов, которые помогают бизнесу 
              перестать терять клиентов, заявки и деньги. Мы любим автоматизацию, сложные интеграции 
              и умные чат-боты, которые действительно работают на бизнес, а не просто отвечают «Здравствуйте»
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Что мы делаем
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chat-bots */}
            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Bot" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-2">AI-чат-боты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-lg">
                  <li>• Понимают живую речь</li>
                  <li>• Записывают клиентов, обрабатывают заявки</li>
                  <li>• Работают 24/7 без выходных</li>
                </ul>
              </CardContent>
            </Card>

            {/* CRM Systems */}
            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="BarChart" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-2">CRM и системы учёта</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-lg">
                  <li>• AmoCRM, Bitrix24, r_keeper и другие</li>
                  <li>• Интеграции под ключ</li>
                  <li>• Автоматические воронки, аналитика</li>
                </ul>
              </CardContent>
            </Card>

            {/* Integrations */}
            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Zap" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-2">Интеграции и сервисы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-lg">
                  <li>• Google Calendar, Google Sheets</li>
                  <li>• Настройка API, обмен данными</li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Solutions */}
            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Monitor" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-2">Веб-решения</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-lg">
                  <li>• Лендинги, сайты, панели</li>
                  <li>• Всё для онлайн-присутствия</li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Solutions */}
            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Brain" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-2">AI-решения на заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 text-lg">
                  <li>• Персонализированные рекомендации</li>
                  <li>• Кастомные модели под процессы</li>
                </ul>
              </CardContent>
            </Card>

            {/* Problems We Solve */}
            <Card className="border-0 shadow-sm bg-red-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="AlertTriangle" size={28} className="text-red-600" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-2 text-red-900">Проблемы, которые мы решаем</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-red-700">
                  <li>• Администраторы не успевают обрабатывать заявки</li>
                  <li>• Клиенты не доходят до визита</li>
                  <li>• Менеджеры теряют контакты</li>
                  <li>• Не видно, откуда приходят клиенты</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Почему с нами удобно
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Gauge" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Скорость</h3>
              <p className="text-gray-600 text-lg">Запускаем решения за недели, а не месяцы</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Target" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Фокус на результате</h3>
              <p className="text-gray-600 text-lg">Автоматизация ради роста прибыли</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Puzzle" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Комплексный подход</h3>
              <p className="text-gray-600 text-lg">Бот, CRM, интеграции — всё делаем сами</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Поддержка</h3>
              <p className="text-gray-600 text-lg">Не бросаем после запуска</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Кейсы
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Барбершоп</CardTitle>
                <CardDescription className="text-gray-600">AI-бот + интеграция с Google Calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Рост записей</span>
                    <Badge className="bg-green-100 text-green-800 border-0 font-semibold">+42%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Экономия времени</span>
                    <Badge className="bg-blue-100 text-blue-800 border-0 font-semibold">3x меньше</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Сеть ресторанов</CardTitle>
                <CardDescription className="text-gray-600">Чат-бот для заказов + CRM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Время обработки</span>
                    <Badge className="bg-green-100 text-green-800 border-0 font-semibold">-60%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Повторные заказы</span>
                    <Badge className="bg-blue-100 text-blue-800 border-0 font-semibold">+30%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Сервисная компания</CardTitle>
                <CardDescription className="text-gray-600">Bitrix24 + сквозная аналитика</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/10 p-4 rounded-xl">
                  <p className="text-primary font-medium">
                    Руководитель теперь видит загрузку менеджеров и прогноз продаж
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Готовы перестать терять клиентов?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
              Давайте обсудим вашу задачу — мы предложим решение уже на первой встрече
            </p>
          </div>
          
          <Card className="border-0 shadow-lg bg-white rounded-3xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-semibold text-gray-900">Записаться на консультацию</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Заполните форму, и мы свяжемся с вами в течение часа
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Имя</label>
                  <Input placeholder="Ваше имя" className="h-12 text-lg border-gray-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="h-12 text-lg border-gray-200 rounded-xl" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Email</label>
                <Input type="email" placeholder="email@example.com" className="h-12 text-lg border-gray-200 rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Расскажите о вашей задаче</label>
                <Textarea 
                  placeholder="Какую проблему хотите решить? Какой у вас бизнес?" 
                  rows={4}
                  className="text-lg border-gray-200 rounded-xl resize-none"
                />
              </div>
              <Button className="w-full h-14 text-lg font-medium bg-primary hover:bg-primary/90 rounded-xl">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-semibold">Chatrix</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Собственный опыт разработки продуктов. Команда с бэкграундом в AI и автоматизации.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Услуги</h3>
              <ul className="space-y-3 text-gray-400">
                <li>AI-чат-боты</li>
                <li>CRM интеграции</li>
                <li>Веб-разработка</li>
                <li>Автоматизация</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Контакты</h3>
              <div className="space-y-3 text-gray-400">
                <p>📧 hello@chatrix.dev</p>
                <p>📱 +7 (999) 123-45-67</p>
                <p>💬 Telegram: @chatrix_support</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Chatrix. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
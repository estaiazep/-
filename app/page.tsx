import { ArrowRight, TrendingUp, Shield, Zap, MessageCircle, Target, Star, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Проверено 1000+ клиентами</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
              Я Шахмир
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-4 font-medium">Увеличу твой депозит в несколько раз</p>

            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Проверенные стратегии, которые работают. Без воды и пустых обещаний — только реальный результат.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Начать зарабатывать
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-xl"
              >
                Посмотреть результаты
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
                <div className="text-slate-400">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">x5</div>
                <div className="text-slate-400">Средний рост депозита</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-slate-400">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Image Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-slate-300 text-lg">Результаты моих клиентов</p>
                    <p className="text-slate-500 text-sm mt-2">Нажми, чтобы увидеть доказательства</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Почему выбирают меня
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Я не просто обещаю — я доказываю результатами</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Проверенная стратегия</h3>
                <p className="text-slate-400 leading-relaxed">
                  Использую только работающие схемы с доказанной эффективностью. Никакой воды — только результат.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Постоянная поддержка</h3>
                <p className="text-slate-400 leading-relaxed">
                  Я с тобой на каждом шаге. От первого депозита до получения прибыли — полное сопровождение.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Быстрый результат</h3>
                <p className="text-slate-400 leading-relaxed">
                  Первые результаты уже через несколько часов. Это не обещание — это реальность моих клиентов.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Полная анонимность</h3>
                <p className="text-slate-400 leading-relaxed">
                  Твоя личность под надежной защитой. Конфиденциальность — мой приоритет номер один.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">До x5 прибыли</h3>
                <p className="text-slate-400 leading-relaxed">
                  Не обещаю чудес — показываю реальные цифры. Средний рост депозита моих клиентов в 5 раз.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Сообщество профи</h3>
                <p className="text-slate-400 leading-relaxed">
                  Присоединяйся к закрытому сообществу успешных трейдеров. Обмен опытом и инсайдерская информация.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Что говорят клиенты</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Алексей М.",
                result: "+340%",
                text: "За 2 недели мой депозит вырос в 3.4 раза. Шахмир действительно знает свое дело!",
              },
              {
                name: "Мария К.",
                result: "+520%",
                text: "Никогда не думала, что торговля может быть такой прибыльной. Спасибо за поддержку!",
              },
              {
                name: "Дмитрий П.",
                result: "+280%",
                text: "Четкие сигналы, быстрая поддержка. Рекомендую всем, кто хочет зарабатывать.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">{testimonial.name}</span>
                    <span className="text-green-400 font-semibold">{testimonial.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Готов увеличить свой депозит?</h2>
            <p className="text-xl text-slate-300 mb-8">Присоединяйся к тысячам успешных трейдеров уже сегодня</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-12 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Перейти в Telegram
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Без скрытых платежей</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Результат с первого дня</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500">© 2025 Шахмир. Все права защищены.</p>
          <p className="text-slate-600 text-sm mt-2">Инвестиции связаны с рисками. Торгуйте ответственно.</p>
        </div>
      </footer>
    </div>
  )
}

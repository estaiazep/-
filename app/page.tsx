"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Shield, Users, MessageCircle, Play, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import FloatingElements from "@/components/floating-elements"
import AnimatedCounter from "@/components/animated-counter"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import CurrencySwitcher, { type Currency } from "@/components/currency-switcher"
import ExpandableProfitCalculator from "@/components/expandable-profit-calculator"

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("uz")
  const [currency, setCurrency] = useState<Currency>("UZS")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const t = (key: TranslationKey) => translations[language][key]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Узбекские имена и реальные проблемы
  const testimonials = [
    {
      name: "Жахонгир Т. (Самарканд)",
      investment: "720,000 сум",
      result: "16,080,000 сум",
      period: "2 кун",
      problem: language === "ru" ? "Нужны были деньги на лечение отца" : "Otamni davolash uchun pul kerak edi",
      solution: language === "ru" ? "Теперь оплатил операцию и лекарства" : "Endi operatsiya va dorilarni to'ladim",
      avatar: "ЖТ",
      verified: true,
    },
    {
      name: "Дилшод У. (Ташкент)",
      investment: "1,200,000 сум",
      result: "22,200,000 сум",
      period: "1 кун",
      problem: language === "ru" ? "Копил на свадьбу сына 2 года" : "O'g'limning to'yi uchun 2 yil pul yig'dim",
      solution: language === "ru" ? "За день заработал больше чем за 2 года!" : "Bir kunda 2 yildan ko'proq ishladim!",
      avatar: "ДУ",
      verified: true,
    },
    {
      name: "Азиза К. (Фергана)",
      investment: "600,000 сум",
      result: "13,800,000 сум",
      period: "3 кун",
      problem: language === "ru" ? "Одна воспитываю 3 детей" : "3 bolani yolg'iz tarbiyalayman",
      solution: language === "ru" ? "Купила детям одежду и игрушки" : "Bolalarga kiyim va o'yinchoq sotib oldim",
      avatar: "АК",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      <FloatingElements />

      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Shahmir
            </div>
            <div className="flex items-center gap-2">
              <CurrencySwitcher currentCurrency={currency} onCurrencyChange={setCurrency} />
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
              <MobileMenu language={language} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            {/* Религиозный бадж */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
              <span className="text-lg">☪️</span>
              <span className="text-green-300 text-sm font-medium">
                {language === "ru" ? "100% Халяль заработок" : "100% Halol daromad"}
              </span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Шахмир Исламов
            </h1>

            <p className="text-lg text-slate-300 mb-3 font-medium">
              {language === "ru"
                ? "Мусульманин из Узбекистана • 7 лет в халяль трейдинге"
                : "O'zbekistonlik musulmon • 7 yil halol treydingda"}
            </p>

            <p className="text-slate-400 mb-6 leading-relaxed">
              {language === "ru"
                ? "Помогаю узбекским семьям зарабатывать халяль деньги через криптотрейдинг. Ты инвестируешь — я работаю — ты получаешь 70% прибыли."
                : "O'zbek oilalariga kripto treydingda halol pul topishga yordam beraman. Siz investitsiya qilasiz — men ishlayman — siz 70% foyda olasiz."}
            </p>

            {/* Видео-обращение */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold">
                    {language === "ru" ? "Личное обращение к узбекам" : "O'zbeklar uchun shaxsiy murojaat"}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {language === "ru" ? "На узбекском языке • 2 минуты" : "O'zbek tilida • 2 daqiqa"}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold py-3"
              >
                {language === "ru" ? "🎥 Смотреть видео-обращение" : "🎥 Video murojaatni ko'rish"}
              </Button>
            </div>

            {/* Социальное доказательство */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">
                  {language === "ru" ? "Уже инвестируют узбеки:" : "Allaqachon o'zbeklar investitsiya qilmoqda:"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-slate-300">
                <div>🏙️ Ташкент: 47 семей</div>
                <div>🕌 Самарканд: 23 семьи</div>
                <div>🌾 Фергана: 31 семья</div>
              </div>
            </div>

            {/* Главная кнопка */}
            <a
              href="https://t.me/+iawpP4pwqW42YmM6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 text-lg min-h-[56px] flex items-center justify-center mb-4"
            >
              💰 {language === "ru" ? "Начать зарабатывать халяль" : "Halol daromad topishni boshlash"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>

            {/* Альтернативная связь */}
            <div className="flex gap-2">
              <a
                href="tel:+998901234567"
                className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-800 px-4 py-3 rounded-xl flex items-center justify-center text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                {language === "ru" ? "Позвонить" : "Qo'ng'iroq"}
              </a>
              <a
                href="https://t.me/+iawpP4pwqW42YmM6"
                className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-800 px-4 py-3 rounded-xl flex items-center justify-center text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Статистика в сумах */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-lg font-bold text-cyan-400">
                  <AnimatedCounter end={247} />
                </div>
                <div className="text-slate-400 text-xs">
                  {language === "ru" ? "Узбекских семей" : "O'zbek oilalari"}
                </div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-lg font-bold text-green-400">
                  <AnimatedCounter end={15} prefix="x" />
                </div>
                <div className="text-slate-400 text-xs">{language === "ru" ? "Рост капитала" : "Kapital o'sishi"}</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-lg font-bold text-purple-400">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-slate-400 text-xs">{language === "ru" ? "Моя комиссия" : "Mening komissiyam"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpandableProfitCalculator language={language} currency={currency} />

      {/* Религиозное одобрение */}
      <section className="py-6 bg-gradient-to-r from-green-900/10 to-blue-900/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-slate-800/30 border border-green-500/20 rounded-xl p-4 max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">☪️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === "ru" ? "Одобрено исламскими учеными" : "Islom olimlari tomonidan tasdiqlangan"}
              </h3>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
              <p className="text-green-200 text-sm italic text-center">
                {language === "ru"
                  ? "«Торговля криптовалютами разрешена, если это реальная купля-продажа активов, а не азартные игры» — Муфтий Узбекистана"
                  : "«Kriptovalyuta savdosi, agar bu haqiqiy aktiv sotib olish-sotish bo'lsa, qimor o'yini emas, ruxsat etilgan» — O'zbekiston muftiysi"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <div className="text-white font-medium">
                  {language === "ru" ? "Реальная торговля" : "Haqiqiy savdo"}
                </div>
                <div className="text-slate-400">{language === "ru" ? "Не ставки" : "Stavka emas"}</div>
              </div>
              <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <div className="text-white font-medium">{language === "ru" ? "Без процентов" : "Foizsiz"}</div>
                <div className="text-slate-400">{language === "ru" ? "Только прибыль" : "Faqat foyda"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы с узбекскими именами */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-white mb-2">
              {language === "ru" ? "Что говорят узбекские семьи" : "O'zbek oilalari nima deyishadi"}
            </h2>
            <p className="text-slate-400 text-sm">
              {language === "ru" ? "Реальные люди, реальные результаты" : "Haqiqiy odamlar, haqiqiy natijalar"}
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-green-500/50 transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-medium text-sm">{testimonial.name}</span>
                        {testimonial.verified && (
                          <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-green-300 text-xs">
                              {language === "ru" ? "Проверено" : "Tasdiqlangan"}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-3 mb-3">
                        <div className="text-slate-300 text-sm mb-2">
                          <strong>{language === "ru" ? "Проблема:" : "Muammo:"}</strong> {testimonial.problem}
                        </div>
                        <div className="text-green-300 text-sm">
                          <strong>{language === "ru" ? "Результат:" : "Natija:"}</strong> {testimonial.solution}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-slate-400 text-xs">
                          {language === "ru" ? "Вложил:" : "Kiritdi:"}{" "}
                          <span className="text-white">{testimonial.investment}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold text-sm">
                            {language === "ru" ? "Получил:" : "Oldi:"} {testimonial.result}
                          </div>
                          <div className="text-slate-400 text-xs">{testimonial.period}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Призыв к действию после отзывов */}
          <div className="text-center mt-6">
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl p-4 max-w-md mx-auto">
              <h3 className="text-white font-semibold mb-2">
                {language === "ru" ? "Хочешь такой же результат?" : "Bunday natijani xohlaysizmi?"}
              </h3>
              <p className="text-slate-300 text-sm mb-3">
                {language === "ru"
                  ? "Начни с 720,000 сум — получи до 16,000,000 сум"
                  : "720,000 sum bilan boshlang — 16,000,000 sumgacha oling"}
              </p>
              <a
                href="https://t.me/+iawpP4pwqW42YmM6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg text-sm"
              >
                {language === "ru" ? "Написать Шахмиру" : "Shahmirga yozish"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Гарантии безопасности */}
      <section className="py-6 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white text-center mb-4">
              {language === "ru" ? "🛡️ Твоя безопасность" : "🛡️ Sizning xavfsizligingiz"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-3 text-center">
                <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-medium text-sm mb-1">
                  {language === "ru" ? "Binance — мировой лидер" : "Binance — jahon lideri"}
                </h4>
                <p className="text-slate-400 text-xs">
                  {language === "ru" ? "Лицензии в 100+ странах" : "100+ mamlakatda litsenziya"}
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-3 text-center">
                <CheckCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-medium text-sm mb-1">
                  {language === "ru" ? "Только торговля" : "Faqat savdo"}
                </h4>
                <p className="text-slate-400 text-xs">
                  {language === "ru" ? "Не могу вывести твои деньги" : "Pulingizni yechib ololmayman"}
                </p>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mt-4 text-center">
              <p className="text-green-200 text-sm">
                <strong>{language === "ru" ? "Гарантия:" : "Kafolat:"}</strong>{" "}
                {language === "ru"
                  ? "Если через неделю нет прибыли — возвращаю деньги + 10% компенсации"
                  : "Agar bir hafta ichida foyda bo'lmasa — pulni + 10% kompensatsiya qaytaraman"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-lg">☪️</span>
            <span className="text-green-300 text-sm">
              {language === "ru" ? "Халяль бизнес для мусульман" : "Musulmonlar uchun halol biznes"}
            </span>
          </div>
          <p className="text-slate-500 text-xs">{t("copyright")}</p>
          <p className="text-slate-600 text-xs mt-1">
            {language === "ru"
              ? "Инвестиции связаны с рисками. Торгуйте ответственно."
              : "Investitsiyalar xavf bilan bog'liq. Mas'uliyat bilan savdo qiling."}
          </p>
        </div>
      </footer>
    </div>
  )
}

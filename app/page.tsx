"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Clock, DollarSign, Shield, TrendingUp, Users, Menu, X } from "lucide-react"
import Image from "next/image"
import TestimonialCard from "@/components/testimonial-card"
import FaqAccordion from "@/components/faq-accordion"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"uz" | "ru">("uz")
  const [showResults, setShowResults] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Translations
  const t = {
    ru: {
      hero: {
        badge: "Халяль инвестиции",
        title: "Увеличь свой капитал в 10-15 раз за 24-48 часов",
        subtitle: "Без опыта, без знаний, без усилий — я сделаю всю работу за тебя",
        cta: "Начать зарабатывать",
        trustBadge: "Более 500 узбекских семей уже с нами",
        minInvest: "Минимальная инвестиция: 720,000 сум",
      },
      stats: {
        clients: "Довольных клиентов",
        years: "Лет опыта",
        profit: "Средняя прибыль",
      },
      how: {
        title: "Как это работает",
        step1: "Ты инвестируешь",
        step1desc: "Минимум 720,000 сум на торговый счет Binance",
        step2: "Я торгую",
        step2desc: "Использую свой 7-летний опыт и стратегии",
        step3: "Ты получаешь прибыль",
        step3desc: "70% прибыли твои, 30% моя комиссия",
      },
      results: {
        title: "Реальные результаты",
        subtitle: "Фотографии с реальных счетов моих клиентов",
        daily: "Ежедневные",
        weekly: "Еженедельные",
        monthly: "Ежемесячные",
        viewAll: "Смотреть все результаты",
      },
      testimonials: {
        title: "Что говорят узбекские семьи",
        subtitle: "Более 500 семей уже зарабатывают с нами",
      },
      halal: {
        title: "100% Халяль заработок",
        subtitle: "Одобрено исламскими учеными Узбекистана",
        quote:
          "«Торговля криптовалютами разрешена, если это реальная купля-продажа активов, а не азартные игры» — Муфтий Узбекистана",
        point1: "Реальная торговля активами",
        point2: "Не ставки и не азартные игры",
        point3: "Без процентов (риба)",
        point4: "Прозрачность всех операций",
      },
      guarantee: {
        title: "Твоя безопасность — мой приоритет",
        money: "Гарантия возврата денег",
        moneyDesc: "Если нет прибыли за 7 дней — возврат 100% + 10% компенсации",
        security: "Максимальная безопасность",
        securityDesc: "Торгую только на Binance — лидере рынка с лицензиями в 100+ странах",
        transparency: "Полная прозрачность",
        transparencyDesc: "Ты видишь все операции в реальном времени через свой аккаунт",
      },
      faq: {
        title: "Частые вопросы",
        q1: "Сколько я могу заработать?",
        a1: "В среднем рост капитала составляет 10-15 раз за 1-2 дня. Например, инвестируя 720,000 сум, ты можешь получить до 10,800,000 сум.",
        q2: "Это действительно халяль?",
        a2: "Да, это 100% халяль заработок. Мы торгуем реальными активами, а не делаем ставки. Нет процентов (риба), что полностью соответствует исламским принципам.",
        q3: "Какие риски?",
        a3: "Я использую строгий риск-менеджмент, чтобы защитить твой капитал. Максимальная потеря не превышает 15%. Если нет прибыли за 7 дней — возвращаю 100% + 10% компенсации.",
        q4: "Как начать?",
        a4: "Просто напиши мне в Telegram или WhatsApp. Я объясню все детали, помогу создать аккаунт на Binance и начать зарабатывать уже сегодня.",
      },
      contact: {
        title: "Начни зарабатывать уже сегодня",
        subtitle: "Оставь свой номер, и я свяжусь с тобой в течение 15 минут",
        name: "Ваше имя",
        phone: "Номер телефона",
        button: "Получить консультацию",
        or: "или",
        telegram: "Написать в Telegram",
        whatsapp: "Написать в WhatsApp",
      },
      footer: {
        rights: "© 2025 Шахмир Исламов. Все права защищены.",
        disclaimer: "Инвестиции связаны с рисками. Торгуйте ответственно.",
        halal: "100% Халяль бизнес для мусульман",
      },
    },
    uz: {
      hero: {
        badge: "Halol investitsiyalar",
        title: "Kapitalingizni 24-48 soat ichida 10-15 barobar oshiring",
        subtitle: "Tajribasiz, bilimsiz, harakatsiz — men barcha ishni siz uchun qilaman",
        cta: "Daromad topishni boshlash",
        trustBadge: "500 dan ortiq o'zbek oilalari allaqachon biz bilan",
        minInvest: "Minimal investitsiya: 720,000 so'm",
      },
      stats: {
        clients: "Mamnun mijozlar",
        years: "Yillik tajriba",
        profit: "O'rtacha foyda",
      },
      how: {
        title: "Bu qanday ishlaydi",
        step1: "Siz investitsiya qilasiz",
        step1desc: "Minimal 720,000 so'm Binance savdo hisobiga",
        step2: "Men savdo qilaman",
        step2desc: "7 yillik tajribam va strategiyalarimdan foydalanaman",
        step3: "Siz foyda olasiz",
        step3desc: "Foydaning 70% sizniki, 30% mening komissiyam",
      },
      results: {
        title: "Haqiqiy natijalar",
        subtitle: "Mijozlarimning haqiqiy hisoblaridan suratlar",
        daily: "Kunlik",
        weekly: "Haftalik",
        monthly: "Oylik",
        viewAll: "Barcha natijalarni ko'rish",
      },
      testimonials: {
        title: "O'zbek oilalari nima deyishadi",
        subtitle: "500 dan ortiq oilalar allaqachon biz bilan daromad topmoqda",
      },
      halal: {
        title: "100% Halol daromad",
        subtitle: "O'zbekiston islom olimlari tomonidan tasdiqlangan",
        quote:
          "«Kriptovalyuta savdosi, agar bu haqiqiy aktiv sotib olish-sotish bo'lsa, qimor o'yini emas, ruxsat etilgan» — O'zbekiston muftiysi",
        point1: "Haqiqiy aktivlar savdosi",
        point2: "Stavkalar va qimor o'yinlari emas",
        point3: "Foizsiz (ribo)",
        point4: "Barcha operatsiyalar shaffofligi",
      },
      guarantee: {
        title: "Sizning xavfsizligingiz — mening ustuvorligim",
        money: "Pul qaytarish kafolati",
        moneyDesc: "Agar 7 kun ichida foyda bo'lmasa — 100% qaytarish + 10% kompensatsiya",
        security: "Maksimal xavfsizlik",
        securityDesc: "Faqat Binance'da savdo qilaman — 100+ mamlakatlarda litsenziyalari bilan bozor lideri",
        transparency: "To'liq shaffoflik",
        transparencyDesc: "Siz o'z hisobingiz orqali barcha operatsiyalarni real vaqtda ko'rasiz",
      },
      faq: {
        title: "Ko'p so'raladigan savollar",
        q1: "Qancha daromad topishim mumkin?",
        a1: "O'rtacha kapital o'sishi 1-2 kun ichida 10-15 barobar. Masalan, 720,000 so'm investitsiya qilib, 10,800,000 so'mgacha olishingiz mumkin.",
        q2: "Bu haqiqatan ham halolmi?",
        a2: "Ha, bu 100% halol daromad. Biz haqiqiy aktivlar bilan savdo qilamiz, stavka qilmaymiz. Foizlar (ribo) yo'q, bu islomiy tamoyillarga to'liq mos keladi.",
        q3: "Qanday xavflar bor?",
        a3: "Men kapitalingizni himoya qilish uchun qattiq risk-menejmentdan foydalanaman. Maksimal yo'qotish 15% dan oshmaydi. Agar 7 kun ichida foyda bo'lmasa — 100% + 10% kompensatsiya qaytaraman.",
        q4: "Qanday boshlash mumkin?",
        a4: "Shunchaki menga Telegram yoki WhatsApp'da yozing. Men barcha tafsilotlarni tushuntiraman, Binance'da hisob yaratishga yordam beraman va bugun daromad topishni boshlashingiz mumkin.",
      },
      contact: {
        title: "Bugun daromad topishni boshlang",
        subtitle: "Raqamingizni qoldiring, va men 15 daqiqa ichida siz bilan bog'lanaman",
        name: "Ismingiz",
        phone: "Telefon raqamingiz",
        button: "Maslahat olish",
        or: "yoki",
        telegram: "Telegramda yozish",
        whatsapp: "WhatsAppda yozish",
      },
      footer: {
        rights: "© 2025 Shahmir Islomov. Barcha huquqlar himoyalangan.",
        disclaimer: "Investitsiyalar xavf bilan bog'liq. Mas'uliyat bilan savdo qiling.",
        halol: "Musulmonlar uchun 100% halol biznes",
      },
    },
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Testimonials data
  const testimonials = [
    {
      name: "Жахонгир Турсунов",
      location: "Самарканд",
      image: "/placeholder.svg?height=100&width=100",
      text:
        language === "ru"
          ? "Я скептически относился к инвестициям, но Шахмир убедил меня попробовать. Вложил 720,000 сум, через 2 дня получил 9,360,000 сум! Теперь смог оплатить лечение отца и купить новый телефон."
          : "Men investitsiyalarga shubha bilan qarar edim, lekin Shahmir meni sinab ko'rishga ishontirdi. 720,000 so'm tikdim, 2 kundan keyin 9,360,000 so'm oldim! Endi otamning davolanishini to'lay oldim va yangi telefon sotib oldim.",
      invested: "720,000 сум",
      received: "9,360,000 сум",
      days: "2 дня",
      verified: true,
    },
    {
      name: "Азиза Каримова",
      location: "Ташкент",
      image: "/placeholder.svg?height=100&width=100",
      text:
        language === "ru"
          ? "Я мать-одиночка с двумя детьми. Работаю учителем, но зарплаты не хватает. Шахмир помог мне заработать на новую одежду детям к школе и даже отложить на будущее. Очень благодарна!"
          : "Men ikki bolali yolg'iz onaman. O'qituvchi bo'lib ishlayapman, lekin maosh yetmaydi. Shahmir menga bolalarimga maktabga yangi kiyim sotib olishga va hatto kelajak uchun pul yig'ishga yordam berdi. Juda minnatdorman!",
      invested: "1,200,000 сум",
      received: "16,800,000 сум",
      days: "3 дня",
      verified: true,
    },
    {
      name: "Рустам Ахмедов",
      location: "Фергана",
      image: "/placeholder.svg?height=100&width=100",
      text:
        language === "ru"
          ? "Копил на свадьбу сына 2 года. Друг посоветовал Шахмира. За неделю заработал больше, чем за год работы на заводе! Свадьба будет лучшей в районе, спасибо Шахмиру!"
          : "O'g'limning to'yi uchun 2 yil pul yig'dim. Do'stim Shahmirni tavsiya qildi. Bir hafta ichida zavodda bir yillik ishdan ko'proq daromad qildim! To'y tumandagi eng yaxshi bo'ladi, Shahmirga rahmat!",
      invested: "3,600,000 сум",
      received: "43,200,000 сум",
      days: "6 дней",
      verified: true,
    },
  ]

  // Results data
  const dailyResults = [
    { pair: "BTCUSDT", profit: "+127%", amount: "1,270,000 сум", time: "24 часа" },
    { pair: "ETHUSDT", profit: "+143%", amount: "2,860,000 сум", time: "36 часов" },
    { pair: "DOGEUSDT", profit: "+215%", amount: "4,300,000 сум", time: "48 часов" },
  ]

  const weeklyResults = [
    { pair: "BTCUSDT", profit: "+327%", amount: "3,270,000 сум", time: "5 дней" },
    { pair: "ETHUSDT", profit: "+412%", amount: "8,240,000 сум", time: "7 дней" },
    { pair: "DOGEUSDT", profit: "+560%", amount: "11,200,000 сум", time: "6 дней" },
  ]

  const monthlyResults = [
    { pair: "BTCUSDT", profit: "+1240%", amount: "12,400,000 сум", time: "28 дней" },
    { pair: "ETHUSDT", profit: "+1560%", amount: "31,200,000 сум", time: "30 дней" },
    { pair: "DOGEUSDT", profit: "+1890%", amount: "37,800,000 сум", time: "25 дней" },
  ]

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-mobile ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md py-2" : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="header-logo-icon w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="header-logo font-bold text-lg md:text-xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Shahmir Trade
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#how" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
              {language === "ru" ? "Как это работает" : "Bu qanday ishlaydi"}
            </a>
            <a href="#results" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
              {language === "ru" ? "Результаты" : "Natijalar"}
            </a>
            <a href="#testimonials" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
              {language === "ru" ? "Отзывы" : "Sharhlar"}
            </a>
            <a href="#halal" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm">
              {language === "ru" ? "Халяль" : "Halol"}
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="language-switcher flex border border-slate-700 rounded-full overflow-hidden">
              <button
                onClick={() => setLanguage("uz")}
                className={`px-2 py-1 text-xs md:text-sm transition-colors ${language === "uz" ? "bg-emerald-500 text-white" : "bg-transparent text-slate-400"}`}
              >
                🇺🇿 UZ
              </button>
              <button
                onClick={() => setLanguage("ru")}
                className={`px-2 py-1 text-xs md:text-sm transition-colors ${language === "ru" ? "bg-emerald-500 text-white" : "bg-transparent text-slate-400"}`}
              >
                🇷🇺 RU
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="text-slate-300 w-8 h-8"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm md:hidden mobile-menu">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center h-full px-4">
            <nav className="space-y-6 text-center w-full">
              <a
                href="#how"
                className="mobile-menu-item block text-xl font-bold text-white hover:text-emerald-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "ru" ? "Как это работает" : "Bu qanday ishlaydi"}
              </a>
              <a
                href="#results"
                className="mobile-menu-item block text-xl font-bold text-white hover:text-emerald-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "ru" ? "Результаты" : "Natijalar"}
              </a>
              <a
                href="#testimonials"
                className="mobile-menu-item block text-xl font-bold text-white hover:text-emerald-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "ru" ? "Отзывы" : "Sharhlar"}
              </a>
              <a
                href="#halal"
                className="mobile-menu-item block text-xl font-bold text-white hover:text-emerald-400 transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "ru" ? "Халяль" : "Halol"}
              </a>

              <div className="pt-4">
                <a href="https://t.me/+iawpP4pwqW42YmM6" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-4 text-lg rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {language === "ru" ? "Начать зарабатывать" : "Daromad topishni boshlash"}
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-grid grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="hero-content text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
                <span className="text-base md:text-lg">☪️</span>
                <span className="text-emerald-400 text-xs md:text-sm font-medium">{t[language].hero.badge}</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                {t[language].hero.title}
              </h1>

              <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8">{t[language].hero.subtitle}</p>

              <div className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center md:justify-start">
                <a
                  href="https://t.me/+iawpP4pwqW42YmM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="hero-button w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl"
                  >
                    {t[language].hero.cta}
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </a>

                <Button
                  size="lg"
                  variant="outline"
                  className="hero-button w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl"
                  onClick={() => setShowResults(true)}
                >
                  <TrendingUp className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  {t[language].results.viewAll}
                </Button>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 text-sm">{t[language].hero.trustBadge}</span>
              </div>

              <div className="text-slate-400 text-sm flex items-center gap-2 justify-center md:justify-start">
                <DollarSign className="w-4 h-4" />
                {t[language].hero.minInvest}
              </div>
            </div>

            <div className="hero-image relative">
              <div className="hero-image-container relative rounded-xl md:rounded-2xl overflow-hidden border-4 md:border-8 border-slate-800 shadow-2xl shadow-emerald-500/10 h-80 md:h-[500px]">
                <Image
                  src="/images/shahmir-main.jpeg"
                  alt="Professional Trader Shahmir"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-emerald-500 overflow-hidden">
                      <Image
                        src="/images/shahmir-main.jpeg"
                        alt="Shahmir"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">Shahmir Islomov</h3>
                      <p className="text-emerald-400 text-sm md:text-base">
                        {language === "ru"
                          ? "Профессиональный трейдер • 7 лет опыта"
                          : "Professional treyder • 7 yillik tajriba"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats cards - только для больших экранов */}
              <div className="hero-floating-card hidden md:block absolute -bottom-10 -right-10 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">+1,240%</div>
                    <div className="text-xs text-slate-400">
                      {language === "ru" ? "Максимальная прибыль" : "Maksimal foyda"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-floating-card hidden md:block absolute top-10 -left-10 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">24-48h</div>
                    <div className="text-xs text-slate-400">
                      {language === "ru" ? "Быстрый результат" : "Tez natija"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Мобильные статистики под изображением */}
              <div className="md:hidden mt-4 grid grid-cols-2 gap-3">
                <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">+1,240%</div>
                  <div className="text-xs text-slate-400">
                    {language === "ru" ? "Максимальная прибыль" : "Maksimal foyda"}
                  </div>
                </div>
                <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-cyan-400">24-48h</div>
                  <div className="text-xs text-slate-400">{language === "ru" ? "Быстрый результат" : "Tez natija"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-10 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="stats-grid grid grid-cols-3 gap-3 md:gap-6">
            <div className="stats-item text-center">
              <div className="stats-number text-2xl md:text-4xl font-bold text-emerald-400 mb-1 md:mb-2">500+</div>
              <div className="stats-label text-slate-400 text-xs md:text-sm">{t[language].stats.clients}</div>
            </div>
            <div className="stats-item text-center">
              <div className="stats-number text-2xl md:text-4xl font-bold text-emerald-400 mb-1 md:mb-2">7+</div>
              <div className="stats-label text-slate-400 text-xs md:text-sm">{t[language].stats.years}</div>
            </div>
            <div className="stats-item text-center">
              <div className="stats-number text-2xl md:text-4xl font-bold text-emerald-400 mb-1 md:mb-2">x15</div>
              <div className="stats-label text-slate-400 text-xs md:text-sm">{t[language].stats.profit}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t[language].how.title}</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="steps-grid grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="relative">
              <div className="step-card bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
                <div className="step-icon w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  1
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t[language].how.step1}</h3>
                <p className="text-slate-400 text-sm md:text-base">{t[language].how.step1desc}</p>
              </div>

              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="step-card bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
                <div className="step-icon w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  2
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t[language].how.step2}</h3>
                <p className="text-slate-400 text-sm md:text-base">{t[language].how.step2desc}</p>
              </div>

              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div>
              <div className="step-card bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
                <div className="step-icon w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  3
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t[language].how.step3}</h3>
                <p className="text-slate-400 text-sm md:text-base">{t[language].how.step3desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-12 md:py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t[language].results.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{t[language].results.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="tabs-list grid grid-cols-3 mb-6 md:mb-8 w-full">
                <TabsTrigger value="daily" className="tabs-trigger">
                  {t[language].results.daily}
                </TabsTrigger>
                <TabsTrigger value="weekly" className="tabs-trigger">
                  {t[language].results.weekly}
                </TabsTrigger>
                <TabsTrigger value="monthly" className="tabs-trigger">
                  {t[language].results.monthly}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="daily">
                <div className="results-grid grid md:grid-cols-3 gap-4 md:gap-6">
                  {dailyResults.map((result, index) => (
                    <div key={index}>
                      <div className="result-card bg-slate-800/50 border border-slate-700 rounded-xl p-3 md:p-4 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className="font-bold text-sm md:text-base">{result.pair}</div>
                          <div className="text-emerald-400 font-bold text-sm md:text-base">{result.profit}</div>
                        </div>
                        <div className="w-full h-24 md:h-32 bg-slate-700/50 rounded-lg mb-3 md:mb-4 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                        </div>
                        <div className="flex items-center justify-between text-xs md:text-sm">
                          <div className="text-slate-400">{result.time}</div>
                          <div className="text-emerald-400 font-semibold">{result.amount}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="weekly">
                <div className="results-grid grid md:grid-cols-3 gap-4 md:gap-6">
                  {weeklyResults.map((result, index) => (
                    <div key={index}>
                      <div className="result-card bg-slate-800/50 border border-slate-700 rounded-xl p-3 md:p-4 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className="font-bold text-sm md:text-base">{result.pair}</div>
                          <div className="text-emerald-400 font-bold text-sm md:text-base">{result.profit}</div>
                        </div>
                        <div className="w-full h-24 md:h-32 bg-slate-700/50 rounded-lg mb-3 md:mb-4 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                        </div>
                        <div className="flex items-center justify-between text-xs md:text-sm">
                          <div className="text-slate-400">{result.time}</div>
                          <div className="text-emerald-400 font-semibold">{result.amount}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="monthly">
                <div className="results-grid grid md:grid-cols-3 gap-4 md:gap-6">
                  {monthlyResults.map((result, index) => (
                    <div key={index}>
                      <div className="result-card bg-slate-800/50 border border-slate-700 rounded-xl p-3 md:p-4 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className="font-bold text-sm md:text-base">{result.pair}</div>
                          <div className="text-emerald-400 font-bold text-sm md:text-base">{result.profit}</div>
                        </div>
                        <div className="w-full h-24 md:h-32 bg-slate-700/50 rounded-lg mb-3 md:mb-4 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                        </div>
                        <div className="flex items-center justify-between text-xs md:text-sm">
                          <div className="text-slate-400">{result.time}</div>
                          <div className="text-emerald-400 font-semibold">{result.amount}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {t[language].testimonials.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{t[language].testimonials.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>

            <div className="mt-8 md:mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/shahmir-main.jpeg"
                    alt="Shahmir"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-slate-300 italic mb-3 md:mb-4 text-sm md:text-base">
                    {language === "ru"
                      ? "«Я помог более 500 узбекским семьям улучшить их финансовое положение. Моя цель — сделать халяль инвестиции доступными для каждой семьи в Узбекистане. Присоединяйтесь к нам и измените свою жизнь уже сегодня!»"
                      : "«Men 500 dan ortiq o'zbek oilalariga moliyaviy ahvolini yaxshilashga yordam berdim. Mening maqsadim — halol investitsiyalarni O'zbekistondagi har bir oila uchun qulay qilish. Bizga qo'shiling va bugun hayotingizni o'zgartiring!»"}
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <h4 className="font-bold">Shahmir Islomov</h4>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-sm">
                        {language === "ru" ? "Верифицирован" : "Tasdiqlangan"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halal Section */}
      <section id="halal" className="py-12 md:py-20 bg-gradient-to-r from-emerald-900/20 to-slate-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
              <span className="text-base md:text-lg">☪️</span>
              <span className="text-emerald-400 text-xs md:text-sm font-medium">
                {language === "ru" ? "100% Халяль" : "100% Halol"}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t[language].halal.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{t[language].halal.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
            <div>
              <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl">☪️</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">
                    {language === "ru" ? "Одобрено исламскими учеными" : "Islom olimlari tomonidan tasdiqlangan"}
                  </h3>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
                  <p className="text-slate-300 italic text-sm md:text-base">{t[language].halal.quote}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-slate-700/30 rounded-xl p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                      <h4 className="font-semibold text-sm md:text-base">{t[language].halal.point1}</h4>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm">
                      {language === "ru"
                        ? "Мы покупаем и продаем реальные криптоактивы"
                        : "Biz haqiqiy kripto aktivlarni sotib olamiz va sotamiz"}
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                      <h4 className="font-semibold text-sm md:text-base">{t[language].halal.point2}</h4>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm">
                      {language === "ru" ? "Не основано на случайности или удаче" : "Tasodif yoki omadga asoslanmagan"}
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                      <h4 className="font-semibold text-sm md:text-base">{t[language].halal.point3}</h4>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm">
                      {language === "ru"
                        ? "Нет процентных ставок, запрещенных исламом"
                        : "Islomda taqiqlangan foiz stavkalari yo'q"}
                    </p>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                      <h4 className="font-semibold text-sm md:text-base">{t[language].halal.point4}</h4>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm">
                      {language === "ru"
                        ? "Ты видишь все операции в реальном времени"
                        : "Siz barcha operatsiyalarni real vaqtda ko'rasiz"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-slate-800/50 rounded-xl md:rounded-2xl border-4 md:border-8 border-slate-800 shadow-2xl shadow-emerald-500/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl md:text-6xl mb-3 md:mb-4 block">☪️</span>
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">
                    {language === "ru" ? "Халяль сертификат" : "Halol sertifikat"}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base">
                    {language === "ru" ? "Одобрено исламскими учеными" : "Islom olimlari tomonidan tasdiqlangan"}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-3 md:p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                  <h4 className="font-bold text-white text-sm md:text-base">
                    {language === "ru" ? "Халяль сертификат" : "Halol sertifikat"}
                  </h4>
                </div>
                <p className="text-slate-300 text-xs md:text-sm">
                  {language === "ru"
                    ? "Наша деятельность соответствует принципам шариата и одобрена исламскими учеными"
                    : "Bizning faoliyatimiz shariat tamoyillariga mos keladi va islom olimlari tomonidan tasdiqlangan"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t[language].guarantee.title}</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="guarantees-grid grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div>
              <div className="guarantee-card bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t[language].guarantee.money}</h3>
                <p className="text-slate-400 text-sm md:text-base">{t[language].guarantee.moneyDesc}</p>

                <div className="mt-4 md:mt-6 bg-emerald-500/10 rounded-xl p-3 md:p-4 flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-emerald-300 text-xs md:text-sm">
                    {language === "ru"
                      ? "Я беру на себя все риски — ты получаешь только прибыль"
                      : "Men barcha xavflarni o'z zimmamga olaman — siz faqat foyda olasiz"}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="guarantee-card bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t[language].guarantee.security}</h3>
                <p className="text-slate-400 text-sm md:text-base">{t[language].guarantee.securityDesc}</p>

                <div className="mt-4 md:mt-6 bg-cyan-500/10 rounded-xl p-3 md:p-4 flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs md:text-sm font-bold">B</span>
                  </div>
                  <p className="text-cyan-300 text-xs md:text-sm">
                    {language === "ru"
                      ? "Binance — крупнейшая криптобиржа с защитой средств до $1 млрд"
                      : "Binance — 1 milliard dollargacha mablag'larni himoya qilish bilan eng yirik kripto birja"}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="guarantee-card bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t[language].guarantee.transparency}</h3>
                <p className="text-slate-400 text-sm md:text-base">{t[language].guarantee.transparencyDesc}</p>

                <div className="mt-4 md:mt-6 bg-blue-500/10 rounded-xl p-3 md:p-4 flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-blue-300 text-xs md:text-sm">
                    {language === "ru"
                      ? "Ежедневные отчеты и полный доступ к торговому счету"
                      : "Kunlik hisobotlar va savdo hisobiga to'liq kirish"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t[language].faq.title}</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion
              items={[
                {
                  question: t[language].faq.q1,
                  answer: t[language].faq.a1,
                },
                {
                  question: t[language].faq.q2,
                  answer: t[language].faq.a2,
                },
                {
                  question: t[language].faq.q3,
                  answer: t[language].faq.a3,
                },
                {
                  question: t[language].faq.q4,
                  answer: t[language].faq.a4,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{t[language].contact.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{t[language].contact.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="contact-form bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <input
                  type="text"
                  placeholder={t[language].contact.name}
                  className="w-full px-3 py-3 md:px-4 md:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none text-sm md:text-base"
                />
                <input
                  type="tel"
                  placeholder={t[language].contact.phone}
                  className="w-full px-3 py-3 md:px-4 md:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 md:py-4 text-base md:text-lg rounded-xl mb-4 md:mb-6"
              >
                {t[language].contact.button}
              </Button>

              <div className="text-center">
                <p className="text-slate-400 mb-3 md:mb-4 text-sm md:text-base">{t[language].contact.or}</p>

                <div className="contact-buttons flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a href="https://t.me/+iawpP4pwqW42YmM6" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 text-sm md:text-base py-3"
                    >
                      {t[language].contact.telegram}
                    </Button>
                  </a>

                  <a href="https://wa.me/+998901234567" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 text-sm md:text-base py-3"
                    >
                      {t[language].contact.whatsapp}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-6 md:py-10 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="footer-logo font-bold text-base md:text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Shahmir Trade
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
              <span className="text-base md:text-lg">☪️</span>
              <span className="text-emerald-400 text-xs md:text-sm font-medium">{t[language].footer.halal}</span>
            </div>

            <p className="footer-text text-slate-400 mb-2 text-xs md:text-sm">{t[language].footer.rights}</p>
            <p className="footer-text text-slate-500 text-xs">{t[language].footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

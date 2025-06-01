"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Clock, DollarSign, Shield, TrendingUp, Users, Menu, X, Zap, Gift } from "lucide-react"
import Image from "next/image"
import TestimonialCard from "@/components/testimonial-card"
import FaqAccordion from "@/components/faq-accordion"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"uz" | "ru">("uz")
  const [showResults, setShowResults] = useState(false) // This state seems unused, consider removing or implementing
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Translations (assuming t object is complete and correct)
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
      fomoCta: {
        title: "Не упусти свой шанс!",
        subtitle: "Места ограничены. Присоединяйся к успешным инвесторам прямо сейчас!",
        button: "🚀 Вступить в Telegram канал",
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
      fomoCta: {
        title: "Imkoniyatni qo'ldan boy bermang!",
        subtitle: "Joylar cheklangan. Hoziroq muvaffaqiyatli investorlar qatoriga qo'shiling!",
        button: "🚀 Telegram kanaliga qo'shilish",
      },
    },
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
        className={`fixed-header fixed top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="font-bold text-base md:text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Shahmir Trade
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            {[
              { href: "#how", labelRu: "Как это работает", labelUz: "Bu qanday ishlaydi" },
              { href: "#results", labelRu: "Результаты", labelUz: "Natijalar" },
              { href: "#testimonials", labelRu: "Отзывы", labelUz: "Sharhlar" },
              { href: "#halal", labelRu: "Халяль", labelUz: "Halol" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-sm focus:outline-none focus-visible:text-emerald-400 focus-visible:underline"
              >
                {language === "ru" ? item.labelRu : item.labelUz}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex border border-slate-700 rounded-full overflow-hidden text-xs">
              <button
                onClick={() => setLanguage("uz")}
                className={`px-2.5 py-1.5 transition-colors ${language === "uz" ? "bg-emerald-500 text-white" : "bg-transparent text-slate-400 hover:bg-slate-700/50"}`}
                aria-pressed={language === "uz"}
              >
                🇺🇿 UZ
              </button>
              <button
                onClick={() => setLanguage("ru")}
                className={`px-2.5 py-1.5 transition-colors ${language === "ru" ? "bg-emerald-500 text-white" : "bg-transparent text-slate-400 hover:bg-slate-700/50"}`}
                aria-pressed={language === "ru"}
              >
                🇷🇺 RU
              </button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="text-slate-300 w-9 h-9"
                aria-label="Открыть меню"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-lg md:hidden flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 w-10 h-10"
              aria-label="Закрыть меню"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-5 px-4">
            {[
              { href: "#how", labelRu: "Как это работает", labelUz: "Bu qanday ishlaydi" },
              { href: "#results", labelRu: "Результаты", labelUz: "Natijalar" },
              { href: "#testimonials", labelRu: "Отзывы", labelUz: "Sharhlar" },
              { href: "#halal", labelRu: "Халяль", labelUz: "Halol" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-xl font-semibold text-white hover:text-emerald-400 transition-colors py-2 focus:outline-none focus-visible:text-emerald-400 focus-visible:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === "ru" ? item.labelRu : item.labelUz}
              </a>
            ))}
            <div className="pt-5 w-full max-w-xs">
              <a href="https://t.me/+iawpP4pwqW42YmM6" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 text-base rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t[language].hero.cta}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 mb-4 md:mb-6">
                <span className="text-lg">☪️</span>
                <span className="text-emerald-400 text-xs md:text-sm font-medium">{t[language].hero.badge}</span>
              </div>
              <h1 className="font-bold mb-4 md:mb-6">{t[language].hero.title}</h1>
              <p className="text-slate-300 mb-6 md:mb-8">{t[language].hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center md:justify-start">
                <a
                  href="https://t.me/+iawpP4pwqW42YmM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl"
                  >
                    {t[language].hero.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 rounded-xl"
                  onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <TrendingUp className="mr-2 w-5 h-5" />
                  {t[language].results.viewAll}
                </Button>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start text-slate-400 text-sm mb-1">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>{t[language].hero.trustBadge}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start text-slate-400 text-sm">
                <DollarSign className="w-4 h-4" />
                <span>{t[language].hero.minInvest}</span>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border-4 md:border-8 border-slate-800/70 shadow-2xl shadow-emerald-900/30 aspect-[3/4] max-h-[400px] md:max-h-[500px] mx-auto max-w-sm md:max-w-none">
                <Image
                  src="/images/shahmir-main.jpeg"
                  alt="Professional Trader Shahmir"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-emerald-500 overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/shahmir-main.jpeg"
                        alt="Shahmir"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white">Shahmir Islomov</h3>
                      <p className="text-emerald-400 text-xs md:text-sm">
                        {language === "ru" ? "Проф. трейдер • 7+ лет опыта" : "Prof. treyder • 7+ yillik tajriba"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating cards for desktop only */}
              <div
                className="hidden md:block absolute -bottom-8 -right-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-emerald-400">+1240%</div>
                    <div className="text-xs text-slate-400">{language === "ru" ? "Макс. прибыль" : "Maks. foyda"}</div>
                  </div>
                </div>
              </div>
              <div
                className="hidden md:block absolute top-8 -left-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-xl animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-cyan-400">24-48ч</div>
                    <div className="text-xs text-slate-400">{language === "ru" ? "Результат" : "Natija"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-slate-900/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 md:gap-6">
            {[
              { value: "500+", labelKey: "clients" },
              { value: "7+", labelKey: "years" },
              { value: "x15", labelKey: "profit" },
            ].map((stat) => (
              <div key={stat.labelKey} className="text-center p-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-xs sm:text-sm md:text-base">
                  {t[language].stats[stat.labelKey as keyof typeof t.ru.stats]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-bold mb-3 md:mb-4">{t[language].how.title}</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: DollarSign, stepKey: "step1", descKey: "step1desc", color: "from-emerald-500 to-cyan-500" },
              { icon: TrendingUp, stepKey: "step2", descKey: "step2desc", color: "from-cyan-500 to-blue-500" },
              { icon: Gift, stepKey: "step3", descKey: "step3desc", color: "from-blue-500 to-purple-500" },
            ].map((step, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="bg-slate-800/50 border border-slate-700/80 rounded-xl p-5 md:p-6 h-full hover:border-emerald-500/60 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 md:mb-5 flex-shrink-0`}
                  >
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="absolute -top-2.5 -left-2.5 w-7 h-7 md:w-8 md:h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    {t[language].how[step.stepKey as keyof typeof t.ru.how]}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base">
                    {t[language].how[step.descKey as keyof typeof t.ru.how]}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div
                      className={`w-7 h-7 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center opacity-70`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                )}
                {index < 2 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-12 md:py-20 bg-slate-900/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-bold mb-3 md:mb-4">{t[language].results.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{t[language].results.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 md:mb-8 p-1 bg-slate-800/60 rounded-lg">
                <TabsTrigger
                  value="daily"
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300 py-2 text-sm md:text-base rounded-md"
                >
                  {t[language].results.daily}
                </TabsTrigger>
                <TabsTrigger
                  value="weekly"
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300 py-2 text-sm md:text-base rounded-md"
                >
                  {t[language].results.weekly}
                </TabsTrigger>
                <TabsTrigger
                  value="monthly"
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-300 py-2 text-sm md:text-base rounded-md"
                >
                  {t[language].results.monthly}
                </TabsTrigger>
              </TabsList>
              {[
                { value: "daily", data: dailyResults },
                { value: "weekly", data: weeklyResults },
                { value: "monthly", data: monthlyResults },
              ].map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {tab.data.map((result, index) => (
                      <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="bg-slate-800/50 border border-slate-700/80 rounded-xl p-4 hover:border-emerald-500/60 transition-colors duration-300 h-full flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <div className="font-semibold text-sm md:text-base">{result.pair}</div>
                            <div className="text-emerald-400 font-bold text-sm md:text-base">{result.profit}</div>
                          </div>
                          <div className="w-full aspect-[4/3] bg-slate-700/60 rounded-lg mb-3 flex items-center justify-center">
                            {/* Placeholder for chart or image */}
                            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-emerald-500 opacity-70" />
                          </div>
                          <div className="flex items-center justify-between text-xs md:text-sm mt-auto">
                            <div className="text-slate-400">{result.time}</div>
                            <div className="text-emerald-400 font-semibold">{result.amount}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-bold mb-3 md:mb-4">{t[language].testimonials.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{t[language].testimonials.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            <div
              className="mt-10 md:mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl md:rounded-2xl p-5 md:p-8 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-5 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-400">
                  <Image
                    src="/images/shahmir-main.jpeg"
                    alt="Shahmir"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 italic mb-3 md:mb-4 text-sm md:text-base">
                    {language === "ru"
                      ? "«Я помог более 500 узбекским семьям улучшить их финансовое положение. Моя цель — сделать халяль инвестиции доступными для каждой семьи в Узбекистане. Присоединяйтесь к нам и измените свою жизнь уже сегодня!»"
                      : "«Men 500 dan ortiq o'zbek oilalariga moliyaviy ahvolini yaxshilashga yordam berdim. Mening maqsadim — halol investitsiyalarni O'zbekistondagi har bir oila uchun qulay qilish. Bizga qo'shiling va bugun hayotingizni o'zgartiring!»"}
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <h4 className="font-semibold text-base md:text-lg">Shahmir Islomov</h4>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-xs md:text-sm">
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
      <section
        id="halal"
        className="py-12 md:py-20 bg-gradient-to-br from-emerald-900/20 via-slate-900/30 to-emerald-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
              <span className="text-lg md:text-xl">☪️</span>
              <span className="text-emerald-400 text-xs md:text-sm font-medium">
                {language === "ru" ? "100% Халяль" : "100% Halol"}
              </span>
            </div>
            <h2 className="font-bold mb-3 md:mb-4">{t[language].halal.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{t[language].halal.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div className="animate-slide-up">
              <div className="bg-slate-800/50 border border-emerald-500/30 rounded-xl md:rounded-2xl p-5 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl md:text-3xl">☪️</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {language === "ru" ? "Одобрено исламскими учеными" : "Islom olimlari tomonidan tasdiqlangan"}
                  </h3>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 md:p-4 mb-5 md:mb-6">
                  <p className="text-slate-300 italic text-xs md:text-sm">"{t[language].halal.quote}"</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      pointKey: "point1",
                      descRu: "Мы покупаем и продаем реальные криптоактивы",
                      descUz: "Biz haqiqiy kripto aktivlarni sotib olamiz va sotamiz",
                    },
                    {
                      pointKey: "point2",
                      descRu: "Не основано на случайности или удаче",
                      descUz: "Tasodif yoki omadga asoslanmagan",
                    },
                    {
                      pointKey: "point3",
                      descRu: "Нет процентных ставок, запрещенных исламом",
                      descUz: "Islomda taqiqlangan foiz stavkalari yo'q",
                    },
                    {
                      pointKey: "point4",
                      descRu: "Ты видишь все операции в реальном времени",
                      descUz: "Siz barcha operatsiyalarni real vaqtda ko'rasiz",
                    },
                  ].map((item) => (
                    <div key={item.pointKey} className="bg-slate-700/40 rounded-lg p-3">
                      <div className="flex items-start gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <h4 className="font-medium text-sm md:text-base">
                          {t[language].halal[item.pointKey as keyof typeof t.ru.halal]}
                        </h4>
                      </div>
                      <p className="text-slate-400 text-xs md:text-sm ml-6 md:ml-7">
                        {language === "ru" ? item.descRu : item.descUz}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-full aspect-square max-h-[300px] md:max-h-[400px] bg-slate-800/60 rounded-xl md:rounded-2xl border-4 md:border-8 border-slate-800/80 shadow-2xl shadow-emerald-900/40 flex flex-col items-center justify-center p-4 mx-auto">
                <span className="text-5xl md:text-7xl mb-3 md:mb-4 block">☪️</span>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-1 md:mb-2 text-center">
                  {language === "ru" ? "Халяль Сертификация" : "Halol Sertifikatsiya"}
                </h3>
                <p className="text-slate-300 text-center text-sm md:text-base">
                  {language === "ru" ? "Соответствует нормам Шариата" : "Shariat normalariga mos keladi"}
                </p>
              </div>
              <div className="hidden md:block absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/40 rounded-xl p-4 shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                  <h4 className="font-semibold text-white text-sm md:text-base">
                    {language === "ru" ? "Гарантия Халяль" : "Halol Kafolati"}
                  </h4>
                </div>
                <p className="text-slate-300 text-xs md:text-sm">
                  {language === "ru"
                    ? "Наша деятельность проверена и одобрена."
                    : "Faoliyatimiz tekshirilgan va tasdiqlangan."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-bold mb-3 md:mb-4">{t[language].guarantee.title}</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { titleKey: "money", descKey: "moneyDesc", icon: Shield, color: "emerald" },
              { titleKey: "security", descKey: "securityDesc", icon: Shield, color: "cyan" },
              { titleKey: "transparency", descKey: "transparencyDesc", icon: Shield, color: "blue" },
            ].map((guarantee, index) => {
              const Icon = guarantee.icon
              const title = t[language].guarantee[guarantee.titleKey as keyof typeof t.ru.guarantee]
              const description = t[language].guarantee[guarantee.descKey as keyof typeof t.ru.guarantee]
              const borderColor = `border-${guarantee.color}-500/30`
              const bgColor = `bg-gradient-to-br from-${guarantee.color}-500/10 to-${guarantee.color}-500/5`
              const iconColor = `text-${guarantee.color}-400`
              const accentBg = `bg-${guarantee.color}-500/10`
              const accentText = `text-${guarantee.color}-300`

              return (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div
                    className={`${bgColor} ${borderColor} border rounded-xl md:rounded-2xl p-5 md:p-6 h-full hover:border-${guarantee.color}-500/50 transition-all duration-300 flex flex-col`}
                  >
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 bg-${guarantee.color}-500/20 rounded-full flex items-center justify-center mb-4 md:mb-5 flex-shrink-0`}
                    >
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${iconColor}`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{title}</h3>
                    <p className="text-slate-400 text-sm md:text-base flex-grow">{description}</p>
                    <div className={`mt-5 md:mt-6 ${accentBg} rounded-lg p-3 md:p-4 flex items-start gap-2.5`}>
                      <CheckCircle className={`w-4 h-4 md:w-5 md:h-5 ${accentText} flex-shrink-0 mt-0.5`} />
                      <p className={`${accentText} text-xs md:text-sm`}>
                        {guarantee.titleKey === "money" &&
                          (language === "ru"
                            ? "Я беру на себя все риски — ты получаешь только прибыль"
                            : "Men barcha xavflarni o'z zimmamga olaman — siz faqat foyda olasiz")}
                        {guarantee.titleKey === "security" &&
                          (language === "ru"
                            ? "Binance — крупнейшая криптобиржа с защитой средств до $1 млрд"
                            : "Binance — 1 milliard dollargacha mablag'larni himoya qilish bilan eng yirik kripto birja")}
                        {guarantee.titleKey === "transparency" &&
                          (language === "ru"
                            ? "Ежедневные отчеты и полный доступ к торговому счету"
                            : "Kunlik hisobotlar va savdo hisobiga to'liq kirish")}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 bg-slate-900/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-bold mb-3 md:mb-4">{t[language].faq.title}</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>
          <div className="max-w-2xl mx-auto animate-slide-up">
            <FaqAccordion
              items={[
                { question: t[language].faq.q1, answer: t[language].faq.a1 },
                { question: t[language].faq.q2, answer: t[language].faq.a2 },
                { question: t[language].faq.q3, answer: t[language].faq.a3 },
                { question: t[language].faq.q4, answer: t[language].faq.a4 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-bold mb-3 md:mb-4">{t[language].contact.title}</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">{t[language].contact.subtitle}</p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-3 md:mt-4"></div>
          </div>
          <div className="max-w-md mx-auto animate-slide-up">
            <div className="bg-slate-800/50 border border-slate-700/80 rounded-xl md:rounded-2xl p-5 md:p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 md:space-y-5 mb-5 md:mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t[language].contact.name}
                  className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/80 rounded-lg text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-500/50 focus:ring-1 focus:outline-none text-sm md:text-base"
                  aria-label={t[language].contact.name}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t[language].contact.phone}
                  className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/80 rounded-lg text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-500/50 focus:ring-1 focus:outline-none text-sm md:text-base"
                  aria-label={t[language].contact.phone}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold text-base md:text-lg rounded-lg"
                >
                  {t[language].contact.button}
                </Button>
              </form>
              <div className="text-center">
                <p className="text-slate-400 mb-3 md:mb-4 text-sm md:text-base">{t[language].contact.or}</p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a href="https://t.me/+iawpP4pwqW42YmM6" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 text-sm md:text-base rounded-lg"
                    >
                      {t[language].contact.telegram}
                    </Button>
                  </a>
                  <a href="https://wa.me/+998901234567" target="_blank" rel="noopener noreferrer" className="flex-1">
                    {" "}
                    {/* Replace with actual WhatsApp number */}
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 text-sm md:text-base rounded-lg"
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

      {/* FOMO CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-tr from-emerald-600/20 via-slate-900 to-cyan-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-slate-800/70 backdrop-blur-md border border-emerald-500/30 rounded-xl md:rounded-2xl p-6 md:p-10 shadow-2xl shadow-emerald-900/50 animate-slide-up">
            <div className="flex justify-center mb-4 md:mb-6">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              {t[language].fomoCta.title}
            </h2>
            <p className="text-slate-300 mb-6 md:mb-8 text-sm md:text-base">{t[language].fomoCta.subtitle}</p>
            <a href="https://t.me/+iawpP4pwqW42YmM6" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 font-bold px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-xl shadow-lg shadow-yellow-500/30 transform hover:scale-105 transition-transform duration-300"
              >
                {t[language].fomoCta.button}
              </Button>
            </a>
            <p className="text-xs text-slate-500 mt-4">
              {language === "ru"
                ? "Присоединяйся к более чем 500+ довольным клиентам!"
                : "500 dan ortiq mamnun mijozlar qatoriga qo'shiling!"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

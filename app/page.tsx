"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Clock, DollarSign, Shield, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import TestimonialCard from "@/components/testimonial-card"
import FaqAccordion from "@/components/faq-accordion"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"uz" | "ru">("uz")
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState("daily")
  
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
        quote: "«Торговля криптовалютами разрешена, если это реальная купля-продажа активов, а не азартные игры» — Муфтий Узбекистана",
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
      }
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
        quote: "«Kriptovalyuta savdosi, agar bu haqiqiy aktiv sotib olish-sotish bo'lsa, qimor o'yini emas, ruxsat etilgan» — O'zbekiston muftiysi",
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
        halal: "Musulmonlar uchun 100% halol biznes",
      }
    }
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  // Testimonials data
  const testimonials = [
    {
      name: "Жахонгир Турсунов",
      location: "Самарканд",
      image: "/images/testimonial-1.jpg",
      text: language === "ru" 
        ? "Я скептически относился к инвестициям, но Шахмир убедил меня попробовать. Вложил 720,000 сум, через 2 дня получил 9,360,000 сум! Теперь смог оплатить лечение отца и купить новый телефон."
        : "Men investitsiyalarga shubha bilan qarar edim, lekin Shahmir meni sinab ko'rishga ishontirdi. 720,000 so'm tikdim, 2 kundan keyin 9,360,000 so'm oldim! Endi otamning davolanishini to'lay oldim va yangi telefon sotib oldim.",
      invested: "720,000 сум",
      received: "9,360,000 сум",
      days: "2 дня",
      verified: true
    },
    {
      name: "Азиза Каримова",
      location: "Ташкент",
      image: "/images/testimonial-2.jpg",
      text: language === "ru"
        ? "Я мать-одиночка с двумя детьми. Работаю учителем, но зарплаты не хватает. Шахмир помог мне заработать на новую одежду детям к школе и даже отложить на будущее. Очень благодарна!"
        : "Men ikki bolali yolg'iz onaman. O'qituvchi bo'lib ishlayapman, lekin maosh yetmaydi. Shahmir menga bolalarimga maktabga yangi kiyim sotib olishga va hatto kelajak uchun pul yig'ishga yordam berdi. Juda minnatdorman!",
      invested: "1,200,000 сум",
      received: "16,800,000 сум",
      days: "3 дня",
      verified: true
    },
    {
      name: "Рустам Ахмедов",
      location: "Фергана",
      image: "/images/testimonial-3.jpg",
      text: language === "ru"
        ? "Копил на свадьбу сына 2 года. Друг посоветовал Шахмира. За неделю заработал больше, чем за год работы на заводе! Свадьба будет лучшей в районе, спасибо Шахмиру!"
        : "O'g'limning to'yi uchun 2 yil pul yig'dim. Do'stim Shahmirni tavsiya qildi. Bir hafta ichida zavodda bir yillik ishdan ko'proq daromad qildim! To'y tumandagi eng yaxshi bo'ladi, Shahmirga rahmat!",
      invested: "3,600,000 сум",
      received: "43,200,000 сум",
      days: "6 дней",
      verified: true
    },
  ]

  // Daily results data
  const dailyResults = [
    { pair: "BTCUSDT", profit: "+127%", amount: "1,270,000 сум", time: "24 часа" },
    { pair: "ETHUSDT", profit: "+143%", amount: "2,860,000 сум", time: "36 часов" },
    { pair: "DOGEUSDT", profit: "+215%", amount: "4,300,000 сум", time: "48 часов" },
  ]

  // Weekly results data
  const weeklyResults = [
    { pair: "BTCUSDT", profit: "+327%", amount: "3,270,000 сум", time: "5 дней" },
    { pair: "ETHUSDT", profit: "+412%", amount: "8,240,000 сум", time: "7 дней" },
    { pair: "DOGEUSDT", profit: "+560%", amount: "11,200,000 сум", time: "6 дней" },
  ]

  // Monthly results data
  const monthlyResults = [
    { pair: "BTCUSDT", profit: "+1240%", amount: "12,400,000 сум", time: "28 дней" },
    { pair: "ETHUSDT", profit: "+1560%", amount: "31,200,000 сум", time: "30 дней" },
    { pair: "DOGEUSDT", profit: "+1890%", amount: "37,800,000 сум", time: "25 дней" },
  ]

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Shahmir Trade
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#how" className="text-slate-300 hover:text-emerald-400 transition-colors">
              {language === "ru" ? "Как это работает" : "Bu qanday ishlaydi"}
            </a>
            <a href="#results" className="text-slate-300 hover:text-emerald-400 transition-colors">
              {language === "ru" ? "Результаты" : "Natijalar"}
            </a>
            <a href="#testimonials" className="text-slate-300 hover:text-emerald-400 transition-colors">
              {language === "ru" ? "Отзывы" : "Sharhlar"}
            </a>
            <a href="#halal" className="text-slate-300 hover:text-emerald-400 transition-colors">
              {language === "ru" ? "Халяль" : "Halol"}
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex border border-slate-700 rounded-full overflow-hidden">
              <button 
                onClick={() => setLanguage("uz")}
                className={`px-3 py-1 text-sm ${language === "uz" ? "bg-emerald-500 text-white" : "bg-transparent text-slate-400"}`}
              >
                🇺🇿 UZ
              </button>
              <button 
                onClick={() => setLanguage("ru")}
                className={`px-3 py-1 text-sm ${language === "ru" ? "bg-emerald-500 text-white" : "bg-transparent text-slate-400"}`}
              >
                🇷🇺 RU
              </button>
            </div>
            <MobileNav language={language} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-lg">☪️</span>
                <span className="text-emerald-400 text-sm font-medium">{t[language].hero.badge}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t[language].hero.title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                {t[language].hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg rounded-xl"
                >
                  {t[language].hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl"
                  onClick={() => setShowResults(true)}
                >
                  <TrendingUp className="mr-2 w-5 h-5" />
                  {t[language].results.viewAll}
                </Button>
              </div>
              
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 text-sm">{t[language].hero.trustBadge}</span>
              </div>
              
              <div className="mt-2 text-slate-400 text-sm flex items-center gap-2 justify-center md:justify-start">
                <DollarSign className="w-4 h-4" />
                {t[language].hero.minInvest}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-8 border-slate-800 shadow-2xl shadow-emerald-500/10">
                <Image 
                  src="/images/hero-trader.jpg" 
                  alt="Professional Trader" 
                  width={600} 
                  height={800} 
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-4 border-emerald-500 overflow-hidden">
                      <Image 
                        src="/images/shahmir-avatar.jpg" 
                        alt="Shahmir" 
                        width={100} 
                        height={100} 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Shahmir Islomov</h3>
                      <p className="text-emerald-400">
                        {language === "ru" ? "Профессиональный трейдер • 7 лет опыта" : "Professional treyder • 7 yillik tajriba"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-10 -right-10 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">+1,240%</div>
                    <div className="text-xs text-slate-400">{language === "ru" ? "Максимальная прибыль" : "Maksimal foyda"}</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 -left-10 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">24-48h</div>
                    <div className="text-xs text-slate-400">{language === "ru" ? "Быстрый результат" : "Tez natija"}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                <CountUp end={500} duration={2.5} suffix="+" />
              </div>
              <div className="text-slate-400">{t[language].stats.clients}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                <CountUp end={7} duration={2.5} suffix="+" />
              </div>
              <div className="text-slate-400">{t[language].stats.years}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                <CountUp end={15} duration={2.5} prefix="x" />
              </div>
              <div className="text-slate-400">{t[language].stats.profit}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t[language].how.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">{t[language].how.step1}</h3>
                <p className="text-slate-400">{t[language].how.step1desc}</p>
                
                <div className="mt-6 bg-slate-700/30 rounded-xl p-4">
                  <Image 
                    src="/images/binance-deposit.jpg" 
                    alt="Binance Deposit" 
                    width={400} 
                    height={200} 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">{t[language].how.step2}</h3>
                <p className="text-slate-400">{t[language].how.step2desc}</p>
                
                <div className="mt-6 bg-slate-700/30 rounded-xl p-4">
                  <Image 
                    src="/images/trading-chart.jpg" 
                    alt="Trading Chart" 
                    width={400} 
                    height={200} 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">{t[language].how.step3}</h3>
                <p className="text-slate-400">{t[language].how.step3desc}</p>
                
                <div className="mt-6 bg-slate-700/30 rounded-xl p-4">
                  <Image 
                    src="/images/profit-withdrawal.jpg" 
                    alt="Profit Withdrawal" 
                    width={400} 
                    height={200} 
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t[language].results.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t[language].results.subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="daily" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="daily">{t[language].results.daily}</TabsTrigger>
                <TabsTrigger value="weekly">{t[language].results.weekly}</TabsTrigger>
                <TabsTrigger value="monthly">{t[language].results.monthly}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="daily">
                <div className="grid md:grid-cols-3 gap-6">
                  {dailyResults.map((result, index) => (
                    <motion.div 
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="font-bold">{result.pair}</div>
                          <div className="text-emerald-400 font-bold">{result.profit}</div>
                        </div>
                        <Image 
                          src={`/images/result-${index + 1}.jpg`}
                          alt={`Trading Result ${result.pair}`}
                          width={400}
                          height={200}
                          className="rounded-lg w-full h-auto mb-4"
                        />
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-slate-400">{result.time}</div>
                          <div className="text-emerald-400 font-semibold">{result.amount}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="weekly">
                <div className="grid md:grid-cols-3 gap-6">
                  {weeklyResults.map((result, index) => (
                    <motion.div 
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="font-bold">{result.pair}</div>
                          <div className="text-emerald-400 font-bold">{result.profit}</div>
                        </div>
                        <Image 
                          src={`/images/result-${index + 4}.jpg`}
                          alt={`Trading Result ${result.pair}`}
                          width={400}
                          height={200}
                          className="rounded-lg w-full h-auto mb-4"
                        />
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-slate-400">{result.time}</div>
                          <div className="text-emerald-400 font-semibold">{result.amount}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-6">
                  {monthlyResults.map((result, index) => (
                    <motion.div 
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="font-bold">{result.pair}</div>
                          <div className="text-emerald-400 font-bold">{result.profit}</div>
                        </div>
                        <Image 
                          src={`/images/result-${index + 7}.jpg`}
                          alt={`Trading Result ${result.pair}`}
                          width={400}
                          height={200}
                          className="rounded-lg w-full h-auto mb-4"
                        />
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-slate-400">{result.time}</div>
                          <div className="text-emerald-400 font-semibold">{result.amount}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg rounded-xl"
                onClick={() => setShowResults(true)}
              >
                <TrendingUp className="mr-2 w-5 h-5" />
                {t[language].results.viewAll}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t[language].testimonials.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t[language].testimonials.subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src="/images/shahmir-avatar.jpg" 
                    alt="Shahmir" 
                    width={100} 
                    height={100} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 italic mb-4">
                    {language === "ru" 
                      ? "«Я помог более 500 узбекским семьям улучшить их финансовое положение. Моя цель — сделать халяль инвестиции доступными для каждой семьи в Узбекистане. Присоединяйтесь к нам и измените свою жизнь уже сегодня!»"
                      : "«Men 500 dan ortiq o'zbek oilalariga moliyaviy ahvolini yaxshilashga yordam berdim. Mening maqsadim — halol investitsiyalarni O'zbekistondagi har bir oila uchun qulay qilish. Bizga qo'shiling va bugun hayotingizni o'zgartiring!»"}
                  </p>
                  <div className="flex items-center gap-2">
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
      <section id="halal" className="py-20 bg-gradient-to-r from-emerald-900/20 to-slate-900/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-lg">☪️</span>
              <span className="text-emerald-400 text-sm font-medium">
                {language === "ru" ? "100% Халяль" : "100% Halol"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t[language].halal.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t[language].halal.subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">☪️</span>
                  </div>
                  <h3 className="text-xl font-bold">
                    {language === "ru" ? "Одобрено исламскими учеными" : "Islom olimlari tomonidan tasdiqlangan"}
                  </h3>
                </div>
                
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6">
                  <p className="text-slate-300 italic">
                    {t[language].halal.quote}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-semibold">{t[language].halal.point1}</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {language === "ru" 
                        ? "Мы покупаем и продаем реальные криптоактивы"
                        : "Biz haqiqiy kripto aktivlarni sotib olamiz va sotamiz"}
                    </p>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-semibold">{t[language].halal.point2}</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {language === "ru" 
                        ? "Не основано на случайности или удаче"
                        : "Tasodif yoki omadga asoslanmagan"}
                    </p>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-semibold">{t[language].halal.point3}</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {language === "ru" 
                        ? "Нет процентных ставок, запрещенных исламом"
                        : "Islomda taqiqlangan foiz stavkalari yo'q"}
                    </p>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-semibold">{t[language].halal.point4}</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {language === "ru" 
                        ? "Ты видишь все операции в реальном времени"
                        : "Siz barcha operatsiyalarni real vaqtda ko'rasiz"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="relative">
                <Image 
                  src="/images/halal-certificate.jpg" 
                  alt="Halal Certificate" 
                  width={600} 
                  height={800} 
                  className="rounded-2xl border-8 border-slate-800 shadow-2xl shadow-emerald-500/10 w-full h-auto"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-6 h-6 text-emerald-400" />
                    <h4 className="font-bold text-white">
                      {language === "ru" ? "Халяль сертификат" : "Halol sertifikat"}
                    </h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    {language === "ru" 
                      ? "Наша деятельность соответствует принципам шариата и одобрена исламскими учеными"
                      : "Bizning faoliyatimiz shariat tamoyillariga mos keladi va islom olimlari tomonidan tasdiqlangan"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t[language].guarantee.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t[language].guarantee.money}</h3>
                <p className="text-slate-400">{t[language].guarantee.moneyDesc}</p>
                
                <div className="mt-6 bg-emerald-500/10 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-emerald-300 text-sm">
                    {language === "ru" 
                      ? "Я беру на себя все риски — ты получаешь только прибыль"
                      : "Men barcha xavflarni o'z zimmamga olaman — siz faqat foyda olasiz"}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t[language].guarantee.security}</h3>
                <p className="text-slate-400">{t[language].guarantee.securityDesc}</p>
                
                <div className="mt-6 bg-cyan-500/10 rounded-xl p-4 flex items-center gap-3">
                  <Image 
                    src="/images/binance-logo.jpg" 
                    alt="Binance Logo" 
                    width={40} 
                    height={40} 
                    className="rounded-full w-10 h-10 object-cover flex-shrink-0"
                  />
                  <p className="text-cyan-300 text-sm">
                    {language === "ru" 
                      ? "Binance — крупнейшая криптобиржа с защитой средств до $1 млрд"
                      : "Binance — 1 milliard dollargacha mablag'larni himoya qilish bilan eng yirik kripto birja"}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t[language].guarantee.transparency}</h3>
                <p className="text-slate-400">{t[language].guarantee.transparencyDesc}</p>
                
                <div className="mt-6 bg-blue-500/10 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-blue-300 text-sm">
                    {language === "ru" 
                      ? "Ежедневные отчеты и полный доступ к торговому счету"
                      : "Kunlik hisobotlar va savdo hisobiga to'liq kirish"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t[language].faq.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion 
              items={[
                { 
                  question: t[language].faq.q1, 
                  answer: t[language].faq.a1 
                },
                { 
                  question: t[language].faq.q

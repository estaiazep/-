"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Star, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import FloatingElements from "@/components/floating-elements"
import AnimatedCounter from "@/components/animated-counter"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import Image from "next/image"
import CurrencySwitcher, { type Currency } from "@/components/currency-switcher"
import { formatCurrency, convertCurrency } from "@/lib/currency"
import ExpandableProfitCalculator from "@/components/expandable-profit-calculator"
import ExpandableHalalInfo from "@/components/expandable-halal-info"

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("ru")
  const [currency, setCurrency] = useState<Currency>("USD")
  const [isScrolled, setIsScrolled] = useState(false)

  const t = (key: TranslationKey) => translations[language][key]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Алексей М.",
      investment: formatCurrency(convertCurrency(85, "USD", currency), currency),
      result: formatCurrency(convertCurrency(1340, "USD", currency), currency),
      text:
        language === "ru"
          ? "Вложил 85$, через 2 дня получил 1340$. Спасибо!"
          : "85$ tikdim, 2 kundan keyin 1340$ oldim. Rahmat!",
      avatar: "AM",
    },
    {
      name: "Жасур Т.",
      investment: formatCurrency(convertCurrency(150, "USD", currency), currency),
      result: formatCurrency(convertCurrency(1850, "USD", currency), currency),
      text:
        language === "ru"
          ? "Вложил 150$, получил 1850$. Теперь свадьба будет!"
          : "150$ tikdim, 1850$ oldim. Endi to'y bo'ladi!",
      avatar: "ЖТ",
    },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: language === "ru" ? "Без опыта" : "Tajribasiz",
      description: language === "ru" ? "Я работаю — ты получаешь" : "Men ishlayman — siz olasiz",
    },
    {
      icon: Shield,
      title: language === "ru" ? "Binance" : "Binance",
      description: language === "ru" ? "Самая надёжная биржа" : "Eng ishonchli birja",
    },
    {
      icon: Zap,
      title: language === "ru" ? "1-2 дня" : "1-2 kun",
      description: language === "ru" ? "Быстрый результат" : "Tez natija",
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

      {/* Hero + About + CTA - всё в одной секции */}
      <section className="relative overflow-hidden pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-4">
              <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              <span className="text-cyan-300 text-xs font-medium">{t("trustBadge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t("heroTitle")}
            </h1>

            <p className="text-lg text-slate-300 mb-3 font-medium">{t("heroSubtitle")}</p>

            <p className="text-slate-400 mb-4 leading-relaxed">{t("heroDescription")}</p>

            {/* Binance Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full px-3 py-1 mb-6">
              <div className="w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center p-1 overflow-hidden">
                <Image
                  src="/images/binance-logo.jpeg"
                  alt="Binance Logo"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-cover scale-125"
                />
              </div>
              <span className="text-yellow-300 text-xs font-medium">
                {language === "ru" ? "Торгую на Binance" : "Binance'da savdo qilaman"}
              </span>
            </div>

            {/* Главная кнопка */}
            <a
              href="https://t.me/+iawpP4pwqW42YmM6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 text-lg min-h-[56px] flex items-center justify-center mb-6"
            >
              {t("trustCapital")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-lg font-bold text-cyan-400">
                  <AnimatedCounter end={7} suffix="+" />
                </div>
                <div className="text-slate-400 text-xs">{t("yearsTrading")}</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-lg font-bold text-cyan-400">
                  <AnimatedCounter end={15} prefix="x" />
                </div>
                <div className="text-slate-400 text-xs">{t("avgGrowth")}</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-lg font-bold text-cyan-400">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-slate-400 text-xs">{t("commission")}</div>
              </div>
            </div>

            {/* Ключевые преимущества */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <feature.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-white text-xs mb-1">{feature.title}</h4>
                  <p className="text-slate-400 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Гарантии */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mb-6">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>
                  {language === "ru" ? "Минимум" : "Minimal"}{" "}
                  {formatCurrency(convertCurrency(60, "USD", currency), currency)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>{t("commissionOnly")}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>{t("dailyReports")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpandableProfitCalculator language={language} currency={currency} />
      <ExpandableHalalInfo language={language} />

      {/* Компактные отзывы */}
      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-white">{t("testimonialsTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700">
                <CardContent className="p-3">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-2 italic text-xs">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {testimonial.avatar}
                      </div>
                      <span className="text-slate-300 text-xs">{testimonial.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs">{testimonial.investment}</div>
                      <div className="text-green-400 font-semibold text-xs">→ {testimonial.result}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-3">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-500 text-xs">{t("copyright")}</p>
          <p className="text-slate-600 text-xs mt-1">{t("riskWarning")}</p>
        </div>
      </footer>
    </div>
  )
}

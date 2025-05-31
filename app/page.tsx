"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Star, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import HowItWorks from "@/components/how-it-works"
import CompactAbout from "@/components/compact-about"
import CompactFeatures from "@/components/compact-features"
import ProfitCalculator from "@/components/profit-calculator"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import FloatingElements from "@/components/floating-elements"
import AnimatedCounter from "@/components/animated-counter"
import ExpandableSection from "@/components/expandable-section"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import Image from "next/image"

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("ru")
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
      name: "Алексей М. / Aleksey M.",
      investment: "$85",
      result: "$1,340",
      period: language === "ru" ? "2 дня" : "2 kun",
      text: t("testimonial1"),
      avatar: "AM",
    },
    {
      name: "Мария К. / Mariya K.",
      investment: "$150",
      result: "$1,850",
      period: language === "ru" ? "3 дня" : "3 kun",
      text: t("testimonial2"),
      avatar: "MK",
    },
    {
      name: "Дмитрий П. / Dmitriy P.",
      investment: "$120",
      result: "$1,680",
      period: language === "ru" ? "1 день" : "1 kun",
      text: t("testimonial3"),
      avatar: "DP",
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
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Shahmir
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
              <MobileMenu language={language} />
            </div>
          </div>
        </div>
      </header>

      {/* Компактный Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center max-w-3xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-4 sm:mb-6">
              <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              <span className="text-cyan-300 text-xs font-medium">{t("trustBadge")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-2 font-medium">{t("heroSubtitle")}</p>

            <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto">{t("heroDescription")}</p>

            {/* Binance Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center p-1 overflow-hidden">
                <Image
                  src="/images/binance-logo.jpeg"
                  alt="Binance Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-cover scale-125"
                />
              </div>
              <span className="text-yellow-300 text-sm font-medium">
                {language === "ru" ? "Торгую на Binance" : "Binance'da savdo qilaman"}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 sm:mb-8">
              <a
                href="https://t.me/+iawpP4pwqW42YmM6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                {t("trustCapital")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://t.me/+iawpP4pwqW42YmM6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-xl inline-flex items-center justify-center"
              >
                {t("viewResults")}
              </a>
            </div>

            {/* Компактная статистика */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-xl font-bold text-cyan-400">
                  <AnimatedCounter end={7} suffix="+" />
                </div>
                <div className="text-slate-400 text-xs">{t("yearsTrading")}</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-xl font-bold text-cyan-400">
                  <AnimatedCounter end={15} prefix="x" />
                </div>
                <div className="text-slate-400 text-xs">{t("avgGrowth")}</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-xl font-bold text-cyan-400">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-slate-400 text-xs">{t("commission")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfitCalculator language={language} />
      <CompactAbout language={language} />
      <HowItWorks language={language} />
      <CompactFeatures language={language} />

      {/* Компактные отзывы */}
      <section id="testimonials" className="py-12 sm:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">{t("testimonialsTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic text-sm">"{testimonial.text}"</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-slate-300 font-medium text-xs">{testimonial.name}</div>
                        <div className="text-slate-500 text-xs">{testimonial.period}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                      <span className="text-slate-400 text-xs">
                        {t("invested")}: {testimonial.investment}
                      </span>
                      <span className="text-green-400 font-semibold text-xs">
                        {t("received")}: {testimonial.result}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Дополнительные отзывы в выпадающем блоке */}
          <div className="max-w-4xl mx-auto">
            <ExpandableSection
              title={language === "ru" ? "Больше отзывов клиентов" : "Ko'proq mijoz sharhlari"}
              preview={
                language === "ru"
                  ? "Еще 10+ довольных клиентов с результатами"
                  : "Yana 10+ mamnun mijozlar natijalari bilan"
              }
              variant="gradient"
            >
              <div className="text-center py-8">
                <p className="text-slate-400 mb-4">
                  {language === "ru"
                    ? "Здесь будут дополнительные отзывы, скриншоты переписок и видео-отзывы клиентов"
                    : "Bu yerda qo'shimcha sharhlar, yozishmalar skrinshotlari va mijozlarning video sharhlari bo'ladi"}
                </p>
                <a
                  href="https://t.me/+iawpP4pwqW42YmM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500/10"
                >
                  {language === "ru" ? "Смотреть все отзывы" : "Barcha sharhlarni ko'rish"}
                </a>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </section>

      {/* Компактный CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">{t("ctaTitle")}</h2>
            <p className="text-base text-slate-300 mb-6">{t("ctaSubtitle")}</p>

            <a
              href="https://t.me/+iawpP4pwqW42YmM6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 mb-6"
            >
              {t("discussInvestment")}
              <ArrowRight className="ml-2 w-4 h-4 inline-block" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>{t("minimum")}</span>
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

      {/* Footer */}
      <footer className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-500 text-xs">{t("copyright")}</p>
          <p className="text-slate-600 text-xs mt-1">{t("riskWarning")}</p>
        </div>
      </footer>
    </div>
  )
}

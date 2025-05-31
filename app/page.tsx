"use client"

import { useState, useEffect } from "react"
import { ArrowRight, TrendingUp, Shield, Zap, MessageCircle, Target, Star, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HowItWorks from "@/components/how-it-works"
import AboutSection from "@/components/about-section"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import FloatingElements from "@/components/floating-elements"
import AnimatedCounter from "@/components/animated-counter"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

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
      investment: "$70",
      result: "$1145",
      period: language === "ru" ? "2 дня" : "2 kun",
      text: t("testimonial1"),
      avatar: "AM",
    },
    {
      name: "Мария К. / Mariya K.",
      investment: "$95",
      result: "$1380",
      period: language === "ru" ? "1 день" : "1 kun",
      text: t("testimonial2"),
      avatar: "MK",
    },
    {
      name: "Дмитрий П. / Dmitriy P.",
      investment: "$140",
      result: "$2200",
      period: language === "ru" ? "2 дня" : "2 kun",
      text: t("testimonial3"),
      avatar: "DP",
    },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: t("feature1Title"),
      description: t("feature1Description"),
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Target,
      title: t("feature2Title"),
      description: t("feature2Description"),
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: t("feature3Title"),
      description: t("feature3Description"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      title: t("feature4Title"),
      description: t("feature4Description"),
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Zap,
      title: t("feature5Title"),
      description: t("feature5Description"),
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Users,
      title: t("feature6Title"),
      description: t("feature6Description"),
      color: "from-orange-500 to-yellow-500",
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
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Shahmir
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
              <MobileMenu language={language} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 animate-slide-up">
              <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span className="text-cyan-300 text-xs sm:text-sm font-medium">{t("trustBadge")}</span>
            </div>

            <h1
              className="hero-title text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight animate-slide-up animate-gradient"
              style={{ animationDelay: "0.2s" }}
            >
              {t("heroTitle")}
            </h1>

            <p
              className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-slate-300 mb-3 sm:mb-4 font-medium animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {t("heroSubtitle")}
            </p>

            <p
              className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              {t("heroDescription")}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 animate-glow"
              >
                {t("trustCapital")}
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
              >
                {t("viewResults")}
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={7} suffix="+" />
                </div>
                <div className="text-slate-400 text-sm sm:text-base">{t("yearsTrading")}</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={8} prefix="x" />
                </div>
                <div className="text-slate-400 text-sm sm:text-base">{t("avgGrowth")}</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-slate-400 text-sm sm:text-base">{t("commission")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection language={language} />
      <HowItWorks language={language} />

      {/* Enhanced Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
              {t("whyTrustTitle")}
            </h2>
            <p
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t("whyTrustSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group hover:scale-105 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}
                    >
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white animate-slide-up">
              {t("testimonialsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="text-slate-300 font-medium text-sm">{testimonial.name}</div>
                          <div className="text-slate-500 text-xs">{testimonial.period}</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-slate-700">
                        <span className="text-slate-400 text-xs sm:text-sm">
                          {t("invested")}: {testimonial.investment}
                        </span>
                        <span className="text-green-400 font-semibold text-xs sm:text-sm">
                          {t("received")}: {testimonial.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-gradient"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white animate-slide-up">
              {t("ctaTitle")}
            </h2>
            <p
              className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t("ctaSubtitle")}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 animate-glow"
              >
                {t("discussInvestment")}
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{t("minimum")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{t("commissionOnly")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>{t("dailyReports")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-500 text-sm">{t("copyright")}</p>
          <p className="text-slate-600 text-xs mt-2">{t("riskWarning")}</p>
        </div>
      </footer>
    </div>
  )
}

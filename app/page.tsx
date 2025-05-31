"use client"

import { useState } from "react"
import { ArrowRight, TrendingUp, Shield, Zap, MessageCircle, Target, Star, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HowItWorks from "@/components/how-it-works"
import LanguageSwitcher from "@/components/language-switcher"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("ru")

  const t = (key: TranslationKey) => translations[language][key]

  const testimonials = [
    {
      name: "Алексей М. / Aleksey M.",
      investment: "$5,000",
      result: "$17,000",
      period: language === "ru" ? "4 месяца" : "4 oy",
      text: t("testimonial1"),
    },
    {
      name: "Мария К. / Mariya K.",
      investment: "$3,000",
      result: "$18,000",
      period: language === "ru" ? "6 месяцев" : "6 oy",
      text: t("testimonial2"),
    },
    {
      name: "Дмитрий П. / Dmitriy P.",
      investment: "$10,000",
      result: "$28,000",
      period: language === "ru" ? "3 месяца" : "3 oy",
      text: t("testimonial3"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
      </div>

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
              <span className="text-cyan-300 text-sm font-medium">{t("trustBadge")}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-4 font-medium">{t("heroSubtitle")}</p>

            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">{t("heroDescription")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                {t("trustCapital")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-xl"
              >
                {t("viewResults")}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">7+</div>
                <div className="text-slate-400">{t("yearsTrading")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">x8</div>
                <div className="text-slate-400">{t("avgGrowth")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-slate-400">{t("commission")}</div>
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
                    <p className="text-slate-300 text-lg">{t("clientResults")}</p>
                    <p className="text-slate-500 text-sm mt-2">{t("seeProof")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks language={language} />

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t("whyTrustTitle")}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t("whyTrustSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">{t("feature1Title")}</h3>
                <p className="text-slate-400 leading-relaxed">{t("feature1Description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">{t("feature2Title")}</h3>
                <p className="text-slate-400 leading-relaxed">{t("feature2Description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">{t("feature3Title")}</h3>
                <p className="text-slate-400 leading-relaxed">{t("feature3Description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">{t("feature4Title")}</h3>
                <p className="text-slate-400 leading-relaxed">{t("feature4Description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">{t("feature5Title")}</h3>
                <p className="text-slate-400 leading-relaxed">{t("feature5Description")}</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">{t("feature6Title")}</h3>
                <p className="text-slate-400 leading-relaxed">{t("feature6Description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">{t("testimonialsTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">{testimonial.name}</span>
                      <span className="text-slate-500 text-sm">{testimonial.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">
                        {t("invested")}: {testimonial.investment}
                      </span>
                      <span className="text-green-400 font-semibold">
                        {t("received")}: {testimonial.result}
                      </span>
                    </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">{t("ctaTitle")}</h2>
            <p className="text-xl text-slate-300 mb-8">{t("ctaSubtitle")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-12 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                {t("discussInvestment")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{t("minimum")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{t("commissionOnly")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{t("dailyReports")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500">{t("copyright")}</p>
          <p className="text-slate-600 text-sm mt-2">{t("riskWarning")}</p>
        </div>
      </footer>
    </div>
  )
}

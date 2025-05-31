"use client"

import { TrendingUp, Shield, Zap, MessageCircle, Target, Users, Clock, UserCheck, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ExpandableSection from "./expandable-section"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface CompactFeaturesProps {
  language: Language
}

export default function CompactFeatures({ language }: CompactFeaturesProps) {
  const t = (key: TranslationKey) => translations[language][key]

  // Ключевые преимущества (самые важные)
  const keyFeatures = [
    {
      icon: Clock,
      title: language === "ru" ? "1-2 дня" : "1-2 kun",
      description: language === "ru" ? "Быстрый результат без ожидания" : "Kutmasdan tez natija",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: UserCheck,
      title: language === "ru" ? "Без опыта" : "Tajribasiz",
      description: language === "ru" ? "Никаких знаний не требуется" : "Hech qanday bilim talab qilinmaydi",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: language === "ru" ? "70% тебе" : "70% sizga",
      description: language === "ru" ? "Большая часть прибыли твоя" : "Foydaning katta qismi sizniki",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const mainFeatures = [
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
      icon: Zap,
      title: t("feature5Title"),
      description: t("feature5Description"),
      color: "from-red-500 to-orange-500",
    },
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: t("feature3Title"),
      description: t("feature3Description"),
      color: "text-green-400",
    },
    {
      icon: MessageCircle,
      title: t("feature4Title"),
      description: t("feature4Description"),
      color: "text-blue-400",
    },
    {
      icon: Users,
      title: t("feature6Title"),
      description: t("feature6Description"),
      color: "text-purple-400",
    },
  ]

  return (
    <section id="features" className="py-12 sm:py-16 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t("whyTrustTitle")}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">{t("whyTrustSubtitle")}</p>
        </div>

        {/* Ключевые преимущества */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
          {keyFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <CardContent className="p-4 sm:p-6 text-center relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Основные преимущества */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
          {mainFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительные преимущества в выпадающем блоке */}
        <div className="max-w-4xl mx-auto">
          <ExpandableSection
            title={
              language === "ru" ? "Дополнительные гарантии и преимущества" : "Qo'shimcha kafolatlar va afzalliklar"
            }
            preview={
              language === "ru"
                ? "Безопасность, прозрачность и низкий порог входа"
                : "Xavfsizlik, shaffoflik va past kirish chegarasi"
            }
            variant="gradient"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-slate-700/30 rounded-xl">
                  <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3`} />
                  <h4 className="font-semibold text-white mb-2 text-sm">{feature.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>
        </div>
      </div>
    </section>
  )
}

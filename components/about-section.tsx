"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Award, Shield, Target, Play, Pause } from "lucide-react"
import AnimatedCounter from "./animated-counter"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface AboutSectionProps {
  language: Language
}

export default function AboutSection({ language }: AboutSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const t = (key: TranslationKey) => translations[language][key]

  const achievements = [
    {
      icon: TrendingUp,
      value: 7,
      suffix: "+",
      label: language === "ru" ? "Лет опыта" : "Yil tajriba",
      color: "text-cyan-400",
    },
    {
      icon: Award,
      value: 850,
      suffix: "%",
      label: language === "ru" ? "Максимальная прибыль" : "Maksimal foyda",
      color: "text-green-400",
    },
    {
      icon: Shield,
      value: 98,
      suffix: "%",
      label: language === "ru" ? "Успешных сделок" : "Muvaffaqiyatli bitimlar",
      color: "text-blue-400",
    },
    {
      icon: Target,
      value: 150,
      suffix: "+",
      label: language === "ru" ? "Довольных клиентов" : "Mamnun mijozlar",
      color: "text-purple-400",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
            {language === "ru" ? "Знакомьтесь — Шахмир" : "Tanishing — Shahmir"}
          </h2>
          <p
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {language === "ru"
              ? "Профессиональный трейдер, который превращает ваши инвестиции в стабильную прибыль"
              : "Professional treyder, sizning investitsiyalaringizni barqaror foydaga aylantiradi"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Photo and video section */}
          <div className="order-2 lg:order-1 animate-slide-left">
            <div className="relative">
              {/* Main photo */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-2 hover:border-cyan-500/50 transition-all duration-500 animate-glow">
                  <Image
                    src="/images/shahmir-photo.jpg"
                    alt="Shahmir - Professional Trader"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Video placeholder */}
              <div className="mt-6">
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {language === "ru" ? "Видео-презентация" : "Video taqdimot"}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {language === "ru"
                            ? "Узнайте больше о моем подходе"
                            : "Mening yondashuvim haqida ko'proq bilib oling"}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white group-hover:scale-110 transition-all duration-300"
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      >
                        {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="order-1 lg:order-2 animate-slide-right">
            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {language === "ru" ? "Мой путь в трейдинге" : "Treydingdagi yo'lim"}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {language === "ru"
                    ? "Начал торговать в 2017 году с небольшого капитала. За 7 лет превратил трейдинг в профессию, изучив все тонкости рынка. Сейчас помогаю другим людям зарабатывать, используя мой опыт и проверенные стратегии."
                    : "2017 yilda kichik kapital bilan savdo qilishni boshladim. 7 yil davomida treydingni kasbga aylantirdim, bozorning barcha nozik tomonlarini o'rgandim. Hozir boshqa odamlarga mening tajribam va isbotlangan strategiyalarimdan foydalanib daromad topishga yordam beraman."}
                </p>

                {/* Achievements grid */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <achievement.icon
                        className={`w-8 h-8 ${achievement.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className={`text-2xl font-bold ${achievement.color} mb-1`}>
                        <AnimatedCounter end={achievement.value} suffix={achievement.suffix} duration={2000} />
                      </div>
                      <div className="text-xs text-slate-400">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      {language === "ru" ? "Безопасность" : "Xavfsizlik"}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {language === "ru" ? "Лицензированные брокеры" : "Litsenziyalangan brokerlar"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{language === "ru" ? "Результат" : "Natija"}</h4>
                    <p className="text-sm text-slate-400">
                      {language === "ru" ? "Проверенная прибыльность" : "Isbotlangan foydalilik"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

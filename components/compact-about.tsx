"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Award, Shield, Target, Play, Pause } from "lucide-react"
import AnimatedCounter from "./animated-counter"
import ExpandableSection from "./expandable-section"
import PhotoGallery from "./photo-gallery"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import Image from "next/image"

interface CompactAboutProps {
  language: Language
}

export default function CompactAbout({ language }: CompactAboutProps) {
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
      value: 1500,
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
      value: 250,
      suffix: "+",
      label: language === "ru" ? "Довольных клиентов" : "Mamnun mijozlar",
      color: "text-purple-400",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-900/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {language === "ru" ? "Знакомьтесь — Шахмир" : "Tanishing — Shahmir"}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            {language === "ru"
              ? "Профессиональный трейдер, который работает за вас"
              : "Professional treyder, siz uchun ishlaydigan"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          {/* Галерея фотографий */}
          <div className="order-2 lg:order-1">
            <PhotoGallery language={language} />
          </div>

          {/* Компактная информация */}
          <div className="order-1 lg:order-2 space-y-4">
            {/* Основная информация */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                {language === "ru" ? "Я работаю — ты получаешь прибыль" : "Men ishlayman — siz foyda olasiz"}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {language === "ru"
                  ? "7 лет опыта в трейдинге. Беру всю работу на себя — ты просто инвестируешь и получаешь прибыль."
                  : "7 yil treydingda tajriba. Barcha ishni o'z zimmamga olaman — siz shunchaki investitsiya qilib foyda olasiz."}
              </p>

              {/* Binance Security Badge */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center p-1.5 overflow-hidden">
                  <Image
                    src="/images/binance-logo.jpeg"
                    alt="Binance Logo"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-cover scale-110"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {language === "ru" ? "Работаю с Binance" : "Binance bilan ishlayman"}
                  </h4>
                  <p className="text-slate-400 text-xs">
                    {language === "ru" ? "Самая надежная криптобиржа" : "Eng ishonchli kripto birja"}
                  </p>
                </div>
              </div>

              {/* Компактные достижения */}
              <div className="grid grid-cols-2 gap-3">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <achievement.icon className={`w-5 h-5 ${achievement.color} mx-auto mb-1`} />
                    <div className={`text-lg font-bold ${achievement.color}`}>
                      <AnimatedCounter end={achievement.value} suffix={achievement.suffix} duration={1500} />
                    </div>
                    <div className="text-xs text-slate-400">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Дополнительная информация в выпадающем блоке */}
            <ExpandableSection
              title={language === "ru" ? "Подробнее о моем опыте" : "Mening tajribam haqida batafsil"}
              preview={
                language === "ru"
                  ? "История успеха, сертификаты, гарантии безопасности"
                  : "Muvaffaqiyat tarixi, sertifikatlar, xavfsizlik kafolatlari"
              }
            >
              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {language === "ru"
                    ? "Начал торговать в 2017 году с небольшого капитала. За 7 лет превратил трейдинг в профессию, изучив все тонкости рынка. Сейчас помогаю другим людям зарабатывать, используя мой опыт и проверенные стратегии быстрого роста капитала."
                    : "2017 yilda kichik kapital bilan savdo qilishni boshladim. 7 yil davomida treydingni kasbga aylantirdim, bozorning barcha nozik tomonlarini o'rgandim. Hozir boshqa odamlarga mening tajribam va isbotlangan tez kapital o'sish strategiyalarimdan foydalanib daromad topishga yordam beraman."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-1 text-sm">
                      {language === "ru" ? "Безопасность" : "Xavfsizlik"}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {language === "ru" ? "Лицензированные брокеры" : "Litsenziyalangan brokerlar"}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-1 text-sm">
                      {language === "ru" ? "Результат" : "Natija"}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {language === "ru" ? "Проверенная прибыльность" : "Isbotlangan foydalilik"}
                    </p>
                  </div>
                </div>
              </div>
            </ExpandableSection>

            {/* Видео в выпадающем блоке */}
            <ExpandableSection
              title={language === "ru" ? "Видео-презентация" : "Video taqdimot"}
              preview={
                language === "ru"
                  ? "Узнайте больше о моем подходе к трейдингу"
                  : "Treydingga yondashuvim haqida ko'proq bilib oling"
              }
            >
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {isVideoPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {language === "ru" ? "Личное обращение" : "Shaxsiy murojaat"}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {language === "ru"
                    ? "Посмотрите, как я объясняю свой подход к инвестициям"
                    : "Investitsiyalarga yondashuvimni qanday tushuntirishimni ko'ring"}
                </p>
                <Button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  {isVideoPlaying ? "Пауза" : "Смотреть видео"}
                </Button>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </div>
    </section>
  )
}

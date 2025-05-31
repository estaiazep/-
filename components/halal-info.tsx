"use client"

import { Shield, BookOpen, TrendingUp, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface HalalInfoProps {
  language: Language
}

export default function HalalInfo({ language }: HalalInfoProps) {
  const t = (key: TranslationKey) => translations[language][key]

  const halalPoints = [
    {
      icon: BookOpen,
      title: language === "ru" ? "Основано на знаниях" : "Bilimga asoslangan",
      description:
        language === "ru"
          ? "Используем анализ рынка, технический анализ и 7-летний опыт. Никакой удачи или случайности."
          : "Bozor tahlili, texnik tahlil va 7 yillik tajribadan foydalanamiz. Hech qanday omad yoki tasodif yo'q.",
      color: "text-blue-400",
    },
    {
      icon: TrendingUp,
      title: language === "ru" ? "Реальная торговля" : "Haqiqiy savdo",
      description:
        language === "ru"
          ? "Покупаем и продаем реальные криптовалюты на бирже Binance. Это не ставки, а инвестиции."
          : "Binance birjasida haqiqiy kriptovalyutalarni sotib olamiz va sotamiz. Bu stavka emas, investitsiya.",
      color: "text-green-400",
    },
    {
      icon: Shield,
      title: language === "ru" ? "Прозрачность" : "Shaffoflik",
      description:
        language === "ru"
          ? "Видите каждую сделку в реальном времени. Никаких скрытых операций или обмана."
          : "Har bir bitimni real vaqtda ko'rasiz. Hech qanday yashirin operatsiya yoki aldov yo'q.",
      color: "text-purple-400",
    },
  ]

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-green-900/10 to-blue-900/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 mb-3">
            <span className="text-lg">☪️</span>
            <span className="text-green-300 text-xs font-medium">
              {language === "ru" ? "Халяль заработок" : "Halol daromad"}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            {language === "ru" ? "Это не казино и не ставки" : "Bu kazino va stavka emas"}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {language === "ru"
              ? "Криптотрейдинг основан на знаниях, опыте и анализе. Это честный заработок, разрешенный исламом."
              : "Kripto treydingda bilim, tajriba va tahlilga asoslanadi. Bu islom tomonidan ruxsat berilgan halol daromad."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
          {halalPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 border-slate-700 hover:border-green-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className={`w-5 h-5 ${point.color}`} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Отличия от азартных игр */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 max-w-3xl mx-auto">
          <h3 className="text-base font-semibold text-white mb-3 text-center">
            {language === "ru" ? "Чем отличается от азартных игр:" : "Qimor o'yinlaridan farqi:"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-2">
              <h4 className="text-red-400 font-medium text-center text-sm">
                {language === "ru" ? "❌ Казино/Ставки" : "❌ Kazino/Stavkalar"}
              </h4>
              <div className="space-y-1 text-xs text-slate-400">
                <div>• {language === "ru" ? "Основано на удаче" : "Omadga asoslangan"}</div>
                <div>• {language === "ru" ? "Случайные результаты" : "Tasodifiy natijalar"}</div>
                <div>• {language === "ru" ? "Нет контроля" : "Nazorat yo'q"}</div>
                <div>• {language === "ru" ? "Быстрая потеря денег" : "Tez pul yo'qotish"}</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-green-400 font-medium text-center text-sm">
                {language === "ru" ? "✅ Криптотрейдинг" : "✅ Kripto treydingda"}
              </h4>
              <div className="space-y-1 text-xs text-slate-400">
                <div>• {language === "ru" ? "Основано на знаниях" : "Bilimga asoslangan"}</div>
                <div>• {language === "ru" ? "Анализ и стратегия" : "Tahlil va strategiya"}</div>
                <div>• {language === "ru" ? "Полный контроль" : "To'liq nazorat"}</div>
                <div>• {language === "ru" ? "Управление рисками" : "Xavflarni boshqarish"}</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-medium text-sm">
                {language === "ru" ? "Разрешено исламом" : "Islom tomonidan ruxsat berilgan"}
              </span>
            </div>
            <p className="text-slate-300 text-xs">
              {language === "ru"
                ? "Торговля криптовалютами признана халяль многими исламскими учеными"
                : "Kriptovalyuta savdosi ko'plab islom olimlari tomonidan halol deb tan olingan"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

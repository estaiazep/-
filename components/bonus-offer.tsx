"use client"

import { Gift, Star, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BonusOfferProps {
  language: "ru" | "uz"
}

export default function BonusOffer({ language }: BonusOfferProps) {
  const bonuses = [
    {
      icon: Gift,
      title: language === "ru" ? "Бонус +5% к прибыли" : "Bonus +5% foydaga",
      description:
        language === "ru"
          ? "Первые 10 клиентов получают дополнительные 5% к своей прибыли"
          : "Birinchi 10 mijoz o'z foydalariga qo'shimcha 5% oladi",
    },
    {
      icon: Star,
      title: language === "ru" ? "Персональный чат" : "Shaxsiy chat",
      description:
        language === "ru"
          ? "Прямая связь со мной 24/7 + ежедневные отчеты с анализом"
          : "Men bilan 24/7 to'g'ridan-to'g'ri aloqa + tahlil bilan kunlik hisobotlar",
    },
    {
      icon: Zap,
      title: language === "ru" ? "Приоритетное обслуживание" : "Ustuvor xizmat",
      description:
        language === "ru"
          ? "Ваши сделки выполняются в первую очередь при высокой волатильности"
          : "Yuqori o'zgaruvchanlikda sizning bitimlaringiz birinchi navbatda bajariladi",
    },
  ]

  return (
    <section className="py-8 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold transform rotate-12 translate-x-2 -translate-y-1">
              {language === "ru" ? "ТОЛЬКО СЕГОДНЯ" : "FAQAT BUGUN"}
            </div>

            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  🎁 {language === "ru" ? "Эксклюзивные бонусы" : "Eksklyuziv bonuslar"}
                </h2>
                <p className="text-slate-300 text-sm">
                  {language === "ru"
                    ? "Для первых 10 клиентов — особые условия и дополнительные привилегии"
                    : "Birinchi 10 mijoz uchun — maxsus shartlar va qo'shimcha imtiyozlar"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <bonus.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-sm">{bonus.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{bonus.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-4 mb-4">
                  <p className="text-red-200 font-semibold text-sm mb-2">
                    ⚡ {language === "ru" ? "ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ" : "CHEKLANGAN TAKLIF"}
                  </p>
                  <p className="text-slate-300 text-xs">
                    {language === "ru"
                      ? "Осталось мест с бонусами: 3/10 • Акция заканчивается через 23:45:30"
                      : "Bonusli joylar qoldi: 3/10 • Aksiya tugaydi: 23:45:30"}
                  </p>
                </div>

                <a href="https://t.me/+iawpP4pwqW42YmM6" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 text-lg animate-pulse">
                    🎁 {language === "ru" ? "Получить бонусы" : "Bonuslarni olish"}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

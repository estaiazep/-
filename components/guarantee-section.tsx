"use client"

import { Shield, CheckCircle, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface GuaranteeSectionProps {
  language: "ru" | "uz"
}

export default function GuaranteeSection({ language }: GuaranteeSectionProps) {
  const guarantees = [
    {
      icon: Shield,
      title: language === "ru" ? "100% Гарантия возврата" : "100% Qaytarish kafolati",
      description:
        language === "ru"
          ? "Если через 7 дней нет прибыли — возвращаю всю сумму + 10% компенсации"
          : "Agar 7 kun ichida foyda bo'lmasa — barcha summani + 10% kompensatsiya qaytaraman",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Clock,
      title: language === "ru" ? "Быстрый результат" : "Tez natija",
      description:
        language === "ru"
          ? "Первая прибыль уже через 24-48 часов. Никаких долгих ожиданий"
          : "Birinchi foyda 24-48 soat ichida. Hech qanday uzoq kutish yo'q",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      icon: TrendingUp,
      title: language === "ru" ? "Минимальный риск" : "Minimal xavf",
      description:
        language === "ru"
          ? "Использую стоп-лоссы и риск-менеджмент. Максимальная потеря не более 15%"
          : "Stop-loss va risk-menejmenti ishlataman. Maksimal yo'qotish 15% dan ko'p emas",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
  ]

  return (
    <section className="py-8 bg-gradient-to-r from-green-900/10 to-blue-900/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">
            {language === "ru" ? "🛡️ Ваши гарантии безопасности" : "🛡️ Sizning xavfsizlik kafolatlaringiz"}
          </h2>
          <p className="text-slate-400 text-sm">
            {language === "ru"
              ? "Я беру на себя все риски — вы получаете только прибыль"
              : "Men barcha xavflarni o'z zimmamga olaman — siz faqat foyda olasiz"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className={`${guarantee.bgColor} ${guarantee.borderColor} border-2 hover:scale-105 transition-all duration-300`}
            >
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <guarantee.icon className={`w-6 h-6 ${guarantee.color}`} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{guarantee.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">
              {language === "ru"
                ? "Работаю только с проверенными клиентами"
                : "Faqat tekshirilgan mijozlar bilan ishlayman"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

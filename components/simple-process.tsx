"use client"

import { MessageCircle, CreditCard, TrendingUp, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface SimpleProcessProps {
  language: "ru" | "uz"
}

export default function SimpleProcess({ language }: SimpleProcessProps) {
  const steps = [
    {
      icon: MessageCircle,
      title: language === "ru" ? "Написать в Telegram" : "Telegramga yozish",
      description: language === "ru" ? "Просто напишите мне" : "Shunchaki menga yozing",
      time: "30 сек",
    },
    {
      icon: CreditCard,
      title: language === "ru" ? "Перевести деньги" : "Pul o'tkazish",
      description: language === "ru" ? "На торговый счет" : "Savdo hisobiga",
      time: "2 мин",
    },
    {
      icon: TrendingUp,
      title: language === "ru" ? "Я торгую за вас" : "Men siz uchun savdo qilaman",
      description: language === "ru" ? "Вы отдыхаете" : "Siz dam olasiz",
      time: "1-2 дня",
    },
    {
      icon: DollarSign,
      title: language === "ru" ? "Получить прибыль" : "Foyda olish",
      description: language === "ru" ? "70% ваша" : "70% sizniki",
      time: "Готово!",
    },
  ]

  return (
    <section className="py-8 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">
            ⚡ {language === "ru" ? "Начать за 3 минуты" : "3 daqiqada boshlash"}
          </h2>
          <p className="text-slate-400 text-sm">
            {language === "ru"
              ? "Никаких сложностей — всё предельно просто"
              : "Hech qanday murakkablik — hammasi juda oddiy"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 relative"
            >
              <CardContent className="p-4 text-center">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>

                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-slate-400 text-xs mb-2">{step.description}</p>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2 py-1">
                  <span className="text-cyan-300 text-xs font-medium">{step.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-slate-300 text-sm mb-4">
            {language === "ru"
              ? "🚀 Буквально через 3 минуты ваши деньги уже будут работать и приносить прибыль!"
              : "🚀 Atigi 3 daqiqadan keyin pulingiz allaqachon ishlab, foyda keltirayotgan bo'ladi!"}
          </p>

          <a
            href="https://t.me/+iawpP4pwqW42YmM6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl text-lg animate-bounce"
          >
            💰 {language === "ru" ? "Начать прямо сейчас" : "Hoziroq boshlash"}
          </a>
        </div>
      </div>
    </section>
  )
}

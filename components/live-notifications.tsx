"use client"

import { useState, useEffect } from "react"
import { TrendingUp, DollarSign } from "lucide-react"
import { formatCurrency, type Currency } from "@/lib/currency"

interface LiveNotificationsProps {
  language: "ru" | "uz"
  currency: Currency
}

export default function LiveNotifications({ language, currency }: LiveNotificationsProps) {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const notifications = [
    {
      name: language === "ru" ? "Александр К." : "Aleksandr K.",
      action: language === "ru" ? "инвестировал" : "investitsiya qildi",
      amount: formatCurrency(150, currency),
      time: language === "ru" ? "2 минуты назад" : "2 daqiqa oldin",
    },
    {
      name: language === "ru" ? "Дилшод У." : "Dilshod U.",
      action: language === "ru" ? "получил прибыль" : "foyda oldi",
      amount: formatCurrency(2340, currency),
      time: language === "ru" ? "5 минут назад" : "5 daqiqa oldin",
    },
    {
      name: language === "ru" ? "Мария С." : "Mariya S.",
      action: language === "ru" ? "инвестировала" : "investitsiya qildi",
      amount: formatCurrency(200, currency),
      time: language === "ru" ? "7 минут назад" : "7 daqiqa oldin",
    },
    {
      name: language === "ru" ? "Жахонгир Т." : "Jahongir T.",
      action: language === "ru" ? "получил прибыль" : "foyda oldi",
      amount: formatCurrency(1890, currency),
      time: language === "ru" ? "12 минут назад" : "12 daqiqa oldin",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [notifications.length])

  const notification = notifications[currentNotification]
  const isProfit = notification.action.includes(language === "ru" ? "получил" : "foyda")

  return (
    <div className="fixed top-20 left-4 z-40 md:left-4 md:w-80">
      <div
        className={`bg-slate-900/95 border border-slate-700 rounded-lg p-3 backdrop-blur-md transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isProfit ? "bg-green-500/20" : "bg-cyan-500/20"
            }`}
          >
            {isProfit ? (
              <TrendingUp className="w-5 h-5 text-green-400" />
            ) : (
              <DollarSign className="w-5 h-5 text-cyan-400" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">{notification.name}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-slate-300 text-xs">
              {notification.action} <span className="font-semibold text-cyan-400">{notification.amount}</span>
            </p>
            <p className="text-slate-500 text-xs">{notification.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

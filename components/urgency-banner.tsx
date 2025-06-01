"use client"

import { useState, useEffect } from "react"
import { Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface UrgencyBannerProps {
  language: "ru" | "uz"
}

export default function UrgencyBanner({ language }: UrgencyBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })
  const [spotsLeft, setSpotsLeft] = useState(7)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:left-auto md:right-4 md:w-80">
      <Card className="bg-gradient-to-r from-red-900/90 to-orange-900/90 border-red-500/50 backdrop-blur-md animate-pulse">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-300 font-semibold text-sm">
              {language === "ru" ? "🔥 ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ" : "🔥 CHEKLANGAN TAKLIF"}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-white text-xs">
                  {language === "ru" ? "До конца акции:" : "Aksiya tugashiga:"}
                </span>
              </div>
              <div className="flex gap-1 text-orange-300 font-bold text-sm">
                <span>{timeLeft.hours.toString().padStart(2, "0")}</span>:
                <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>:
                <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-xs">{language === "ru" ? "Осталось мест:" : "Qolgan joylar:"}</span>
              </div>
              <span className="text-cyan-300 font-bold text-sm">{spotsLeft}/15</span>
            </div>

            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-2 text-center">
              <p className="text-red-200 text-xs font-medium">
                {language === "ru" ? "Сегодня комиссия 25% вместо 30%!" : "Bugun komissiya 30% o'rniga 25%!"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

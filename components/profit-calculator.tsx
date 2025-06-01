"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, DollarSign, Zap } from "lucide-react"
import AnimatedCounter from "./animated-counter"

interface ProfitCalculatorProps {
  language: "ru" | "uz"
}

export default function ProfitCalculator({ language }: ProfitCalculatorProps) {
  const [investment, setInvestment] = useState(720000)
  const [multiplier, setMultiplier] = useState(12)
  const [isCalculating, setIsCalculating] = useState(false)

  const totalProfit = investment * multiplier
  const clientProfit = totalProfit * 0.7
  const myCommission = totalProfit * 0.3
  const netProfit = clientProfit - investment

  const t = {
    ru: {
      title: "Калькулятор прибыли",
      subtitle: "Посчитай свой потенциальный доход",
      investment: "Ваша инвестиция (сум)",
      multiplier: "Множитель прибыли",
      results: "Результаты расчета",
      totalReturn: "Общий доход",
      yourProfit: "Ваша прибыль (70%)",
      myCommission: "Моя комиссия (30%)",
      netGain: "Чистая прибыль",
      calculate: "Пересчитать",
      note: "* Результаты основаны на средних показателях за последние 6 месяцев",
      examples: "Популярные суммы:",
    },
    uz: {
      title: "Foyda kalkulyatori",
      subtitle: "Potentsial daromadingizni hisoblang",
      investment: "Sizning investitsiyangiz (so'm)",
      multiplier: "Foyda ko'paytiruvchisi",
      results: "Hisoblash natijalari",
      totalReturn: "Umumiy daromad",
      yourProfit: "Sizning foydangiz (70%)",
      myCommission: "Mening komissiyam (30%)",
      netGain: "Sof foyda",
      calculate: "Qayta hisoblash",
      note: "* Natijalar so'nggi 6 oylik o'rtacha ko'rsatkichlarga asoslangan",
      examples: "Mashhur summalar:",
    },
  }

  const popularAmounts = [720000, 1440000, 2880000, 5760000]
  const multiplierOptions = [8, 10, 12, 15, 18]

  const handleCalculate = () => {
    setIsCalculating(true)
    setTimeout(() => setIsCalculating(false), 1000)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("uz-UZ").format(num)
  }

  return (
    <div className="bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 border border-slate-700/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
      <div className="text-center mb-6 md:mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
            <Calculator className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {t[language].title}
          </h3>
        </div>
        <p className="text-slate-400 text-sm md:text-base">{t[language].subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">{t[language].investment}</label>
            <div className="relative">
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/80 rounded-lg text-white text-lg font-semibold focus:border-emerald-500 focus:ring-emerald-500/50 focus:ring-1 focus:outline-none"
                min="720000"
                step="100000"
              />
              <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
            <div className="mt-3">
              <p className="text-xs text-slate-500 mb-2">{t[language].examples}</p>
              <div className="flex flex-wrap gap-2">
                {popularAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setInvestment(amount)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      investment === amount
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-700/60 text-slate-300 hover:bg-slate-600/60"
                    }`}
                  >
                    {formatNumber(amount)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">{t[language].multiplier}</label>
            <div className="grid grid-cols-5 gap-2">
              {multiplierOptions.map((mult) => (
                <button
                  key={mult}
                  onClick={() => setMultiplier(mult)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    multiplier === mult
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                      : "bg-slate-700/60 text-slate-300 hover:bg-slate-600/60"
                  }`}
                >
                  x{mult}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg"
          >
            {isCalculating ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {language === "ru" ? "Считаем..." : "Hisoblanmoqda..."}
              </div>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                {t[language].calculate}
              </>
            )}
          </Button>
        </div>

        {/* Results Section */}
        <div className="bg-slate-900/60 border border-slate-600/60 rounded-xl p-5 md:p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            {t[language].results}
          </h4>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">{t[language].totalReturn}</div>
              <div className="text-2xl font-bold text-emerald-400">
                <AnimatedCounter end={totalProfit} suffix=" сум" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">{t[language].yourProfit}</div>
              <div className="text-xl font-bold text-cyan-400">
                <AnimatedCounter end={clientProfit} suffix=" сум" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-500/10 to-slate-600/10 border border-slate-500/20 rounded-lg p-3">
              <div className="text-sm text-slate-400 mb-1">{t[language].myCommission}</div>
              <div className="text-lg font-semibold text-slate-300">
                <AnimatedCounter end={myCommission} suffix=" сум" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
              <div className="text-sm text-slate-400 mb-1">{t[language].netGain}</div>
              <div className="text-2xl font-bold text-yellow-400">
                +<AnimatedCounter end={netProfit} suffix=" сум" />
              </div>
              <div className="text-xs text-slate-500 mt-1">
                +{Math.round((netProfit / investment) * 100)}% {language === "ru" ? "к вложению" : "investitsiyaga"}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-4 italic">{t[language].note}</p>
        </div>
      </div>
    </div>
  )
}

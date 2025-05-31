"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calculator, DollarSign, TrendingUp, Zap } from "lucide-react"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface ProfitCalculatorProps {
  language: Language
}

export default function ProfitCalculator({ language }: ProfitCalculatorProps) {
  const [investment, setInvestment] = useState<number>(100)
  const [isCalculated, setIsCalculated] = useState(false)
  const t = (key: TranslationKey) => translations[language][key]

  // Расчет прибыли (10-15x рост, берем среднее 12.5x)
  const multiplier = 12.5
  const totalProfit = investment * multiplier
  const clientProfit = totalProfit * 0.7 // 70% клиенту
  const myCommission = totalProfit * 0.3 // 30% мне

  const handleCalculate = () => {
    if (investment >= 60) {
      setIsCalculated(true)
    }
  }

  const handleInputChange = (value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setInvestment(numValue)
    setIsCalculated(false)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900/50 to-slate-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
            {t("calculatorTitle")}
          </h2>
          <p
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("calculatorSubtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-500 animate-slide-up">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Calculator Input */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{t("calculatorTitle")}</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">{t("investmentAmount")}</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="number"
                        min="60"
                        value={investment}
                        onChange={(e) => handleInputChange(e.target.value)}
                        className="pl-10 bg-slate-700/50 border-slate-600 text-white text-lg h-12 focus:border-cyan-500"
                        placeholder="100"
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">{t("minInvestment")}</p>
                  </div>

                  <Button
                    onClick={handleCalculate}
                    disabled={investment < 60}
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    {t("calculateButton")}
                  </Button>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  {isCalculated && investment >= 60 ? (
                    <div className="space-y-4 animate-slide-up">
                      {/* Total Profit */}
                      <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <TrendingUp className="w-6 h-6 text-green-400" />
                          <h4 className="text-lg font-semibold text-white">{t("totalProfit")}</h4>
                        </div>
                        <div className="text-3xl font-bold text-green-400">${totalProfit.toLocaleString()}</div>
                        <div className="text-sm text-slate-400 mt-1">{multiplier}x рост за 1-2 дня</div>
                      </div>

                      {/* Client Profit */}
                      <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <DollarSign className="w-6 h-6 text-cyan-400" />
                          <h4 className="text-lg font-semibold text-white">{t("yourProfit")}</h4>
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">${clientProfit.toLocaleString()}</div>
                        <div className="text-sm text-slate-400 mt-1">Твоя чистая прибыль</div>
                      </div>

                      {/* My Commission */}
                      <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="w-6 h-6 text-purple-400" />
                          <h4 className="text-lg font-semibold text-white">{t("myCommission")}</h4>
                        </div>
                        <div className="text-xl font-bold text-purple-400">${myCommission.toLocaleString()}</div>
                        <div className="text-sm text-slate-400 mt-1">Только с результата</div>
                      </div>

                      {/* Call to Action */}
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Готов получить ${clientProfit.toLocaleString()}?
                        </h4>
                        <p className="text-slate-400 text-sm mb-4">Ты ничего не делаешь — я работаю за тебя</p>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
                          Начать инвестировать
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calculator className="w-10 h-10 text-slate-500" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-400 mb-2">Введи сумму инвестиций</h4>
                      <p className="text-slate-500 text-sm">Минимальная сумма: $60</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits below calculator */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Без опыта</h4>
              <p className="text-slate-400 text-sm">Я делаю всю работу</p>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">1-2 дня</h4>
              <p className="text-slate-400 text-sm">Быстрый результат</p>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">70% тебе</h4>
              <p className="text-slate-400 text-sm">Справедливая доля</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

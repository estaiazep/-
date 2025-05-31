"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calculator, DollarSign, TrendingUp, Zap, Clock, UserCheck } from "lucide-react"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import { type Currency, formatCurrency, getMinimumInvestment, convertCurrency } from "@/lib/currency"

interface ProfitCalculatorProps {
  language: Language
  currency: Currency
}

export default function ProfitCalculator({ language, currency }: ProfitCalculatorProps) {
  const minInvestment = getMinimumInvestment(currency)
  const [investment, setInvestment] = useState<number>(currency === "USD" ? 100 : convertCurrency(100, "USD", currency))
  const [isCalculated, setIsCalculated] = useState(false)
  const t = (key: TranslationKey) => translations[language][key]

  // Расчет прибыли (10-15x рост, берем среднее 12.5x)
  const multiplier = 12.5
  const totalProfit = investment * multiplier
  const clientProfit = totalProfit * 0.7 // 70% клиенту
  const myCommission = totalProfit * 0.3 // 30% мне

  const handleCalculate = () => {
    if (investment >= minInvestment) {
      setIsCalculated(true)
    }
  }

  const handleInputChange = (value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setInvestment(numValue)
    setIsCalculated(false)
  }

  // Ключевые преимущества (самые важные)
  const keyFeatures = [
    {
      icon: Clock,
      title: language === "ru" ? "1-2 дня" : "1-2 kun",
      description: language === "ru" ? "Быстрый результат без ожидания" : "Kutmasdan tez natija",
      color: "text-green-400",
    },
    {
      icon: UserCheck,
      title: language === "ru" ? "Без опыта" : "Tajribasiz",
      description: language === "ru" ? "Никаких знаний не требуется" : "Hech qanday bilim talab qilinmaydi",
      color: "text-blue-400",
    },
    {
      icon: DollarSign,
      title: language === "ru" ? "70% тебе" : "70% sizga",
      description: language === "ru" ? "Большая часть прибыли твоя" : "Foydaning katta qismi sizniki",
      color: "text-purple-400",
    },
  ]

  return (
    <section className="py-10 sm:py-12 bg-gradient-to-br from-slate-900/50 to-slate-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
            {t("calculatorTitle")}
          </h2>
          <p
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("calculatorSubtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-500 animate-slide-up">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center lg:space-y-0">
                {/* Calculator Input */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{t("calculatorTitle")}</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t("investmentAmount")}</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        type="number"
                        min="60"
                        value={investment}
                        onChange={(e) => handleInputChange(e.target.value)}
                        className="pl-9 bg-slate-700/50 border-slate-600 text-white text-lg h-14 focus:border-cyan-500"
                        placeholder={currency === "USD" ? "100" : "1200000"}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {language === "ru" ? "Минимум" : "Minimal"} {formatCurrency(minInvestment, currency)}
                    </p>
                  </div>

                  <Button
                    onClick={handleCalculate}
                    disabled={investment < minInvestment}
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg min-h-[56px]"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    {t("calculateButton")}
                  </Button>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  {isCalculated && investment >= minInvestment ? (
                    <div className="space-y-3 animate-slide-up">
                      {/* Total Profit */}
                      <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-green-400" />
                          <h4 className="text-base font-semibold text-white">{t("totalProfit")}</h4>
                        </div>
                        <div className="text-2xl font-bold text-green-400">{formatCurrency(totalProfit, currency)}</div>
                        <div className="text-xs text-slate-400 mt-1">{multiplier}x рост за 1-2 дня</div>
                      </div>

                      {/* Client Profit */}
                      <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-cyan-400" />
                          <h4 className="text-base font-semibold text-white">{t("yourProfit")}</h4>
                        </div>
                        <div className="text-xl font-bold text-cyan-400">{formatCurrency(clientProfit, currency)}</div>
                        <div className="text-xs text-slate-400 mt-1">Твоя чистая прибыль</div>
                      </div>

                      {/* My Commission */}
                      <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-purple-400" />
                          <h4 className="text-base font-semibold text-white">{t("myCommission")}</h4>
                        </div>
                        <div className="text-lg font-bold text-purple-400">
                          {formatCurrency(myCommission, currency)}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">Только с результата</div>
                      </div>

                      {/* Call to Action */}
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                        <h4 className="text-base font-semibold text-white mb-2">
                          {language === "ru" ? "Готов получить" : "Tayyor"} {formatCurrency(clientProfit, currency)}?
                        </h4>
                        <p className="text-slate-400 text-xs mb-3">Ты ничего не делаешь — я работаю за тебя</p>
                        <a
                          href="https://t.me/+iawpP4pwqW42YmM6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg text-base min-h-[48px] flex items-center justify-center"
                        >
                          Начать инвестировать
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calculator className="w-8 h-8 text-slate-500" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-400 mb-1">Введи сумму инвестиций</h4>
                      <p className="text-slate-500 text-sm">
                        {language === "ru" ? "Минимальная сумма:" : "Minimal summa:"}{" "}
                        {formatCurrency(minInvestment, currency)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ключевые преимущества под калькулятором */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-3 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h4 className="font-semibold text-white mb-1 text-sm">{feature.title}</h4>
                <p className="text-slate-400 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

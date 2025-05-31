"use client"

import { ArrowRight, DollarSign, TrendingUp, PiggyBank } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import Image from "next/image"
import { formatCurrency, getMinimumInvestment, type Currency } from "@/lib/currency"

interface HowItWorksProps {
  language: Language
  currency: Currency
}

export default function HowItWorks({ language, currency }: HowItWorksProps) {
  const t = (key: TranslationKey) => translations[language][key]

  const steps = [
    {
      icon: DollarSign,
      title: t("step1Title"),
      description: t("step1Description"),
      color: "from-cyan-500 to-blue-500",
      delay: "0s",
    },
    {
      icon: TrendingUp,
      title: t("step2Title"),
      description: t("step2Description"),
      color: "from-blue-500 to-purple-500",
      delay: "0.2s",
    },
    {
      icon: PiggyBank,
      title: t("step3Title"),
      description: t("step3Description"),
      color: "from-purple-500 to-pink-500",
      delay: "0.4s",
    },
  ]

  const minInvestment = getMinimumInvestment(currency)

  return (
    <section id="how-it-works" className="py-8 sm:py-10 bg-slate-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
            {t("howItWorksTitle")}
          </h2>
          <p
            className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("howItWorksSubtitle")}
          </p>
        </div>

        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: step.delay }}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group hover:scale-105 h-full relative overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-6 sm:p-5 text-center relative z-10">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 animate-pulse-glow`}
                  >
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2">{index + 1}</div>
                  <h3 className="text-base sm:text-base font-semibold text-white mb-3 min-h-[2.5rem] flex items-center justify-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-sm">{step.description}</p>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse rotate-90">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment model section */}
        <div className="mt-8 sm:mt-10 text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto hover:border-cyan-500/50 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{t("fairPaymentModel")}</h3>
              <p className="text-slate-300 mb-6 text-xs sm:text-sm max-w-2xl mx-auto">{t("fairPaymentDescription")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group/item">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 group-hover/item:scale-110 transition-transform duration-300">
                    70%
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm">{t("yourProfit")}</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group/item">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 group-hover/item:scale-110 transition-transform duration-300">
                    30%
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm">{t("myCommission")}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Binance Security Info */}
          <div className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center p-1.5 overflow-hidden">
                <Image
                  src="/images/binance-logo.jpeg"
                  alt="Binance Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-cover scale-110"
                />
              </div>
              <h4 className="text-base font-semibold text-white">
                {language === "ru" ? "Торгую на Binance" : "Binance'da savdo qilaman"}
              </h4>
            </div>
            <p className="text-slate-300 text-xs">
              {language === "ru"
                ? `Использую только проверенную криптобиржу Binance — лидера рынка с лицензиями и страхованием депозитов до $1 млрд (минимальная инвестиция ${formatCurrency(minInvestment, currency, language)})`
                : `Faqat tekshirilgan Binance kripto birjasidan foydalanaman — litsenziyalar va 1 milliard dollargacha depozit sug'urtasi bilan bozor lideri (minimal sarmoya ${formatCurrency(minInvestment, currency, language)})`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

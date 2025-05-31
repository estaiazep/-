import { ArrowRight, DollarSign, TrendingUp, PiggyBank } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface HowItWorksProps {
  language: Language
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const t = (key: TranslationKey) => translations[language][key]

  const steps = [
    {
      icon: DollarSign,
      title: "trustCapitalTitle" as TranslationKey,
      description: "trustCapitalDescription" as TranslationKey,
    },
    {
      icon: TrendingUp,
      title: "tradeAndIncreaseTitle" as TranslationKey,
      description: "tradeAndIncreaseDescription" as TranslationKey,
    },
    {
      icon: PiggyBank,
      title: "getProfitTitle" as TranslationKey,
      description: "getProfitDescription" as TranslationKey,
    },
  ]

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t("howItWorksSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{t(step.title)}</h3>
                  <p className="text-slate-400 leading-relaxed">{t(step.description)}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-cyan-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">{t("fairPaymentModel")}</h3>
            <p className="text-slate-300 mb-6">{t("fairPaymentDescription")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
                <div className="text-slate-400">{t("yourProfit")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-slate-400">{t("myCommission")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

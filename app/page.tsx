"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Star, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import HowItWorks from "@/components/how-it-works"
import CompactAbout from "@/components/compact-about"
import CompactFeatures from "@/components/compact-features"
import ProfitCalculator from "@/components/profit-calculator"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import FloatingElements from "@/components/floating-elements"
import AnimatedCounter from "@/components/animated-counter"
import ExpandableSection from "@/components/expandable-section"
import ResultsGallery from "@/components/results-gallery"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import Image from "next/image"
import CurrencySwitcher, { type Currency } from "@/components/currency-switcher"
import HalalInfo from "@/components/halal-info"
import { formatCurrency, convertCurrency } from "@/lib/currency"

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("ru")
  const [currency, setCurrency] = useState<Currency>("USD")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isResultsOpen, setIsResultsOpen] = useState(false)

  const t = (key: TranslationKey) => translations[language][key]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Алексей М. / Aleksey M.",
      investment: formatCurrency(convertCurrency(85, "USD", currency), currency),
      result: formatCurrency(convertCurrency(1340, "USD", currency), currency),
      period: language === "ru" ? "2 дня" : "2 kun",
      text:
        language === "ru"
          ? "Потерял работу в пандемию, было тяжело с деньгами. Рискнул вложить последние 85$, через 2 дня получил 1340$. Это спасло мою семью от долгов. Спасибо, Шахмир!"
          : "Pandemiya paytida ishimni yo'qotdim, pul bilan qiyin edi. Oxirgi 85$ ni tikishga tavakkal qildim, 2 kundan keyin 1340$ oldim. Bu oilamni qarzlardan qutqardi. Rahmat, Shahmir!",
      avatar: "AM",
    },
    {
      name: "Жасур Т. / Jasur T.",
      investment: formatCurrency(convertCurrency(150, "USD", currency), currency),
      result: formatCurrency(convertCurrency(1850, "USD", currency), currency),
      period: language === "ru" ? "3 дня" : "3 kun",
      text:
        language === "ru"
          ? "Копил на свадьбу целый год, но не хватало. Друг посоветовал Шахмира. Вложил 150$, через 3 дня получил 1850$. Теперь моя невеста счастлива, а свадьба будет лучшей в кишлаке!"
          : "Butun yil to'y uchun pul yig'dim, lekin yetmadi. Do'stim Shahmir'ni tavsiya qildi. 150$ tikdim, 3 kundan keyin 1850$ oldim. Endi kelin baxtli, to'yimiz qishloqdagi eng yaxshi to'y bo'ladi!",
      avatar: "ЖТ",
    },
    {
      name: "Дмитрий П. / Dmitriy P.",
      investment: formatCurrency(convertCurrency(120, "USD", currency), currency),
      result: formatCurrency(convertCurrency(1680, "USD", currency), currency),
      period: language === "ru" ? "1 день" : "1 kun",
      text:
        language === "ru"
          ? "Не верил в такие заработки, думал - очередной развод. Решил проверить с малой суммы. Вложил 120$, наутро уже 1680$! Теперь регулярно инвестирую и планирую бросить основную работу."
          : "Bunday daromadlarga ishonmasdim, navbatdagi firibgarlik deb o'yladim. Kichik summa bilan tekshirishga qaror qildim. 120$ tikdim, ertalab 1680$! Endi muntazam investitsiya qilaman va asosiy ishimni tashlashni rejalashtirmoqdaman.",
      avatar: "DP",
    },
  ]

  const additionalTestimonials = [
    {
      name: "Азиза К. / Aziza K.",
      investment: formatCurrency(convertCurrency(200, "USD", currency), currency),
      result: formatCurrency(convertCurrency(2800, "USD", currency), currency),
      period: language === "ru" ? "2 дня" : "2 kun",
      text:
        language === "ru"
          ? "Я мать-одиночка с двумя детьми, еле сводила концы с концами. Подруга рассказала о Шахмире. Заняла 200$, очень боялась, не спала ночами. Через 2 дня получила 2800$! Теперь смогла оплатить детский сад и курсы английского для детей."
          : "Men ikki bolali yolg'iz onaman, zo'rg'a kun ko'rardim. Dugоnam Shahmir haqida aytib berdi. 200$ qarz oldim, juda qo'rqdim, kechalari uxlamasdim. 2 kundan keyin 2800$ oldim! Endi bolalar bog'chasi va bolalar uchun ingliz tili kurslarini to'lay oldim.",
      avatar: "АК",
    },
    {
      name: "Сергей В. / Sergey V.",
      investment: formatCurrency(convertCurrency(300, "USD", currency), currency),
      result: formatCurrency(convertCurrency(3900, "USD", currency), currency),
      period: language === "ru" ? "1 день" : "1 kun",
      text:
        language === "ru"
          ? "Хотел купить машину, но не хватало 30% суммы. Банки отказали в кредите из-за плохой истории. Решил попробовать с Шахмиром, вложил 300$. Через день 3900$ на счету! Купил свою первую машину без кредитов и долгов!"
          : "Mashina sotib olmoqchi edim, lekin summaning 30% yetmasdi. Banklar yomon tarix tufayli kreditni rad etishdi. Shahmir bilan sinab ko'rishga qaror qildim, 300$ tikdim. Bir kundan keyin hisobimda 3900$! Birinchi mashinamni kreditsiz va qarzsiz sotib oldim!",
      avatar: "СВ",
    },
    {
      name: "Фарход У. / Farhod U.",
      investment: formatCurrency(convertCurrency(180, "USD", currency), currency),
      result: formatCurrency(convertCurrency(2340, "USD", currency), currency),
      period: language === "ru" ? "3 дня" : "3 kun",
      text:
        language === "ru"
          ? "Мечтал открыть свою кофейню, но не было стартового капитала. Услышал о Шахмире от брата. Вложил 180$ семейных сбережений, жена была против. Через 3 дня получил 2340$! Сейчас моя кофейня уже работает и приносит доход."
          : "O'z kofe do'konimni ochishni orzu qilardim, lekin boshlang'ich kapital yo'q edi. Shahmir haqida akamdan eshitdim. Oilaviy jamg'armadan 180$ tikdim, xotinim qarshi edi. 3 kundan keyin 2340$ oldim! Hozir kofe do'konim ishlayapti va daromad keltiryapti.",
      avatar: "ФУ",
    },
    {
      name: "Анна Л. / Anna L.",
      investment: formatCurrency(convertCurrency(250, "USD", currency), currency),
      result: formatCurrency(convertCurrency(3250, "USD", currency), currency),
      period: language === "ru" ? "2 дня" : "2 kun",
      text:
        language === "ru"
          ? "У дочери обнаружили проблемы со здоровьем, нужна была операция. Страховка покрывала только часть. В отчаянии вложила последние 250$ через Шахмира. Через 2 дня получила 3250$! Операция прошла успешно, дочь здорова. Это чудо!"
          : "Qizimda sog'liq muammolari aniqlandi, operatsiya kerak edi. Sug'urta faqat bir qismini qoplardi. Umidsizlikda Shahmir orqali oxirgi 250$ ni tikdim. 2 kundan keyin 3250$ oldim! Operatsiya muvaffaqiyatli o'tdi, qizim sog'lom. Bu mo'jiza!",
      avatar: "АЛ",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      <FloatingElements />

      {/* Results Gallery Modal */}
      <ResultsGallery language={language} isOpen={isResultsOpen} onClose={() => setIsResultsOpen(false)} />

      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Shahmir
            </div>
            <div className="flex items-center gap-2">
              <CurrencySwitcher currentCurrency={currency} onCurrencyChange={setCurrency} />
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
              <MobileMenu language={language} />
            </div>
          </div>
        </div>
      </header>

      {/* Компактный Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-3 sm:mb-4">
              <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              <span className="text-cyan-300 text-xs font-medium">{t("trustBadge")}</span>
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-lg sm:text-lg text-slate-300 mb-3 font-medium">{t("heroSubtitle")}</p>

            <p className="text-base sm:text-base text-slate-400 mb-5 sm:mb-5 max-w-2xl mx-auto leading-relaxed">
              {t("heroDescription")}
            </p>

            {/* Binance Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full px-3 py-1 mb-4">
              <div className="w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center p-1 overflow-hidden">
                <Image
                  src="/images/binance-logo.jpeg"
                  alt="Binance Logo"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-cover scale-125"
                />
              </div>
              <span className="text-yellow-300 text-xs font-medium">
                {language === "ru" ? "Торгую на Binance" : "Binance'da savdo qilaman"}
              </span>
            </div>

            <div className="flex flex-col gap-3 justify-center items-center mb-5 sm:mb-5">
              <a
                href="https://t.me/+iawpP4pwqW42YmM6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-lg min-h-[56px]"
              >
                {t("trustCapital")}
                <ArrowRight className="ml-2 w-3 h-3" />
              </a>
              <button
                onClick={() => setIsResultsOpen(true)}
                className="w-full sm:w-auto border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-xl inline-flex items-center justify-center text-lg min-h-[56px]"
              >
                {t("viewResults")}
              </button>
            </div>

            {/* Компактная статистика */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-xl font-bold text-cyan-400">
                  <AnimatedCounter end={7} suffix="+" />
                </div>
                <div className="text-slate-400 text-xs">{t("yearsTrading")}</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-xl font-bold text-cyan-400">
                  <AnimatedCounter end={15} prefix="x" />
                </div>
                <div className="text-slate-400 text-xs">{t("avgGrowth")}</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-xl font-bold text-cyan-400">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-slate-400 text-xs">{t("commission")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfitCalculator language={language} currency={currency} />
      <CompactAbout language={language} />
      <HowItWorks language={language} currency={currency} />
      <CompactFeatures language={language} />
      <HalalInfo language={language} />

      {/* Компактные отзывы */}
      <section id="testimonials" className="py-8 sm:py-10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">{t("testimonialsTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-4">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-3 italic text-xs">"{testimonial.text}"</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-slate-300 font-medium text-xs">{testimonial.name}</div>
                        <div className="text-slate-500 text-xs">{testimonial.period}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-slate-700">
                      <span className="text-slate-400 text-xs">
                        {t("invested")}: {testimonial.investment}
                      </span>
                      <span className="text-green-400 font-semibold text-xs">
                        {t("received")}: {testimonial.result}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Дополнительные отзывы в выпадающем блоке */}
          <div className="max-w-4xl mx-auto">
            <ExpandableSection
              title={language === "ru" ? "Еще 4 довольных клиента" : "Yana 4 mamnun mijoz"}
              preview={
                language === "ru" ? "Больше реальных результатов и отзывов" : "Ko'proq haqiqiy natijalar va sharhlar"
              }
              variant="gradient"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {additionalTestimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-3 italic text-xs">"{testimonial.text}"</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="text-slate-300 font-medium text-xs">{testimonial.name}</div>
                            <div className="text-slate-500 text-xs">{testimonial.period}</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-1 border-t border-slate-700">
                          <span className="text-slate-400 text-xs">
                            {t("invested")}: {testimonial.investment}
                          </span>
                          <span className="text-green-400 font-semibold text-xs">
                            {t("received")}: {testimonial.result}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ExpandableSection>
          </div>
        </div>
      </section>

      {/* Компактный CTA */}
      <section className="py-8 sm:py-10 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">{t("ctaTitle")}</h2>
            <p className="text-sm text-slate-300 mb-4">{t("ctaSubtitle")}</p>

            <a
              href="https://t.me/+iawpP4pwqW42YmM6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 mb-4 text-lg min-h-[56px] flex items-center justify-center"
            >
              {t("discussInvestment")}
              <ArrowRight className="ml-2 w-3 h-3 inline-block" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>
                  {language === "ru" ? "Минимум" : "Minimal"}{" "}
                  {formatCurrency(convertCurrency(60, "USD", currency), currency)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>{t("commissionOnly")}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>{t("dailyReports")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-3">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-500 text-xs">{t("copyright")}</p>
          <p className="text-slate-600 text-xs mt-1">{t("riskWarning")}</p>
        </div>
      </footer>
    </div>
  )
}

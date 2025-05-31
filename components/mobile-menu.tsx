"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, TrendingUp, Shield, Target, Users, MessageCircle, ExternalLink } from "lucide-react"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface MobileMenuProps {
  language: Language
}

export default function MobileMenu({ language }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = (key: TranslationKey) => translations[language][key]

  // Telegram канал
  const telegramChannel = "https://t.me/+iawpP4pwqW42YmM6"

  const menuItems = [
    { icon: TrendingUp, label: "О трейдере", href: "#about" },
    { icon: Target, label: "Как работаю", href: "#how-it-works" },
    { icon: Shield, label: "Преимущества", href: "#features" },
    { icon: Users, label: "Отзывы", href: "#testimonials" },
    { icon: MessageCircle, label: "Контакты", href: "#contact" },
  ]

  const handleCTAClick = () => {
    window.open(telegramChannel, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="md:hidden text-slate-300 hover:text-cyan-400"
      >
        <Menu className="w-6 h-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-slate-800 border-l border-slate-700 shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-cyan-400">Меню</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <nav className="p-6">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <Button
                  onClick={handleCTAClick}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
                >
                  {t("trustCapital")}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

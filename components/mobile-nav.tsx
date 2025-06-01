"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  language: "ru" | "uz"
}

export default function MobileNav({ language }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      label: language === "ru" ? "Как это работает" : "Bu qanday ishlaydi",
      href: "#how",
    },
    {
      label: language === "ru" ? "Результаты" : "Natijalar",
      href: "#results",
    },
    {
      label: language === "ru" ? "Отзывы" : "Sharhlar",
      href: "#testimonials",
    },
    {
      label: language === "ru" ? "Халяль" : "Halol",
      href: "#halal",
    },
  ]

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-slate-300">
        <Menu className="w-6 h-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-slate-300">
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <nav className="space-y-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Button
                size="lg"
                className="mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {language === "ru" ? "Начать зарабатывать" : "Daromad topishni boshlash"}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

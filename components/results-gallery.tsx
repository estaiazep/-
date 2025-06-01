"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ResultsGalleryProps {
  language: "ru" | "uz"
  isOpen: boolean
  onClose: () => void
}

export default function ResultsGallery({ language, isOpen, onClose }: ResultsGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const results = [
    {
      src: "/images/result-1.jpeg",
      title: "NKNUSDT",
      profit: "+288.71%",
      leverage: "20x",
      type: "Short",
    },
    {
      src: "/images/result-2.jpeg",
      title: "DOGEUSDT",
      profit: "+141.64%",
      leverage: "75x",
      type: "Продать",
    },
    {
      src: "/images/result-3.jpeg",
      title: "CELRUSDT",
      profit: "+418.17%",
      leverage: "75x",
      type: "Short",
    },
    {
      src: "/images/result-4.jpeg",
      title: "THETAUSDT",
      profit: "+221.69%",
      leverage: "20x",
      type: "Long",
    },
    {
      src: "/images/result-5.jpeg",
      title: "FTMUSDT",
      profit: "+116.74%",
      leverage: "20x",
      type: "Short",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % results.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + results.length) % results.length)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {language === "ru" ? "Мои торговые результаты" : "Mening savdo natijalarim"}
              </h2>
              <p className="text-slate-400 text-sm">
                {language === "ru" ? "Реальные сделки на Binance Futures" : "Binance Futures'da haqiqiy bitimlar"}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-[70vh] rounded-xl overflow-hidden mb-4">
          <Image
            src={results[currentImage].src || "/placeholder.svg"}
            alt={results[currentImage].title}
            fill
            className="object-contain"
          />

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800/70 text-white"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800/70 text-white"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Result Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{results[currentImage].title}</h3>
                  <p className="text-slate-300 text-sm">
                    {results[currentImage].type} • {results[currentImage].leverage}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">{results[currentImage].profit}</div>
                  <div className="text-slate-400 text-sm">{language === "ru" ? "Прибыль" : "Foyda"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 justify-center">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentImage === index
                  ? "border-green-500 scale-110"
                  : "border-slate-600 hover:border-slate-500 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={result.src || "/placeholder.svg"} alt={result.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{result.profit}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4">
          <span className="text-slate-400 text-sm">
            {currentImage + 1} / {results.length}
          </span>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <p className="text-slate-300 mb-4">
            {language === "ru"
              ? "Хочешь такие же результаты? Я работаю — ты получаешь прибыль!"
              : "Bunday natijalarni xohlaysizmi? Men ishlayman — siz foyda olasiz!"}
          </p>
          <a
            href="https://t.me/+iawpP4pwqW42YmM6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg"
          >
            {language === "ru" ? "Начать инвестировать" : "Investitsiya qilishni boshlash"}
          </a>
        </div>
      </div>
    </div>
  )
}

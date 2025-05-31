"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface PhotoGalleryProps {
  language: "ru" | "uz"
}

export default function PhotoGallery({ language }: PhotoGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const images = [
    {
      src: "/images/shahmir-professional.jpg",
      alt: "Shahmir - Professional Look",
      title: language === "ru" ? "Деловой стиль" : "Biznes uslubi",
      description: language === "ru" ? "Профессиональный образ" : "Professional ko'rinish",
    },
    {
      src: "/images/shahmir-casual.jpg",
      alt: "Shahmir - Casual Style",
      title: language === "ru" ? "Повседневный стиль" : "Kundalik uslub",
      description: language === "ru" ? "Элегантный интерьер" : "Nafis interer",
    },
    {
      src: "/images/shahmir-luxury.jpg",
      alt: "Shahmir - Luxury Lifestyle",
      title: language === "ru" ? "Успешный образ жизни" : "Muvaffaqiyatli turmush tarzi",
      description: language === "ru" ? "Результат работы" : "Ish natijasi",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setCurrentImage(index)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Gallery */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative group cursor-pointer" onClick={() => openModal(currentImage)}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-2 hover:border-cyan-500/50 transition-all duration-500">
            <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
              <Image
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

              {/* Image Info */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3">
                  <h3 className="text-sm font-semibold text-white">{images[currentImage].title}</h3>
                  <p className="text-cyan-400 text-xs">{images[currentImage].description}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800/70 text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800/70 text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-3 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentImage === index
                  ? "border-cyan-500 scale-110"
                  : "border-slate-600 hover:border-slate-500 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Gallery Counter */}
        <div className="text-center mt-2">
          <span className="text-xs text-slate-400">
            {currentImage + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-slate-900/50 hover:bg-slate-800/70 text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="relative w-full h-[80vh] rounded-xl overflow-hidden">
              <Image
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Navigation */}
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

            {/* Modal Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{images[currentImage].title}</h3>
                <p className="text-cyan-400 text-sm">{images[currentImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

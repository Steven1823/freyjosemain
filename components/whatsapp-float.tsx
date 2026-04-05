"use client"

import { usePathname } from 'next/navigation'

export function WhatsAppFloat() {
  const pathname = usePathname()

  if (pathname.startsWith('/admission')) {
    return null
  }

  return (
    <a
      href="https://wa.me/254715505526"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-colors hover:bg-green-600 sm:bottom-6 sm:right-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-8 h-8"
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.437-2.01A15.938 15.938 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm8.27 22.383c-.343.964-2.01 1.843-2.77 1.957-.76.113-1.706.161-2.75-.173a25.08 25.08 0 0 1-2.49-.92c-4.38-1.894-7.24-6.31-7.455-6.604-.216-.293-1.763-2.343-1.763-4.47 0-2.127 1.116-3.174 1.512-3.61.395-.435.863-.544 1.15-.544.287 0 .575.003.826.015.265.013.62-.1.97.74.36.858 1.22 2.97 1.328 3.186.108.215.18.467.035.753-.144.287-.216.466-.432.718-.216.251-.454.562-.647.755-.216.215-.44.448-.19.879.252.43 1.118 1.844 2.4 2.988 1.65 1.47 3.044 1.924 3.474 2.14.43.215.68.18.93-.108.252-.287 1.08-1.257 1.368-1.688.287-.43.575-.358.97-.215.395.144 2.51 1.185 2.94 1.4.432.216.72.323.827.503.108.18.108 1.044-.234 2.008z" />
      </svg>
    </a>
  )
}

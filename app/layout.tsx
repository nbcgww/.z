import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { MenuDesk } from '@/components/layout/MenuDesk'
import clsx from 'clsx'
import { quicksand } from '@/utils/font'

export const metadata: Metadata = {
  title: '',
  description: '.z',
}
export const viewport: Viewport = {
  themeColor: '#fff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          quicksand.className,
          'mx-auto my-[80px] w-full bg-[#ffffff] antialiased *:text-[14px] *:font-light *:text-[#000000] sm:mt-0 sm:w-[800px]',
        )}
      >
        <MenuDesk />
        {children}
      </body>
    </html>
  )
}

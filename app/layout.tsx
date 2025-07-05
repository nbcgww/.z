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
          'mx-auto my-[80px] w-full bg-[#ffffff] antialiased *:text-[14px] *:font-[500] sm:mt-0 sm:w-[800px]',
        )}
      >
        <MenuDesk />
        {children}
      </body>
    </html>
  )
}

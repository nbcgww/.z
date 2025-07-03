import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { MenuDesk } from '@/components/layout/MenuDesk'
import clsx from 'clsx'
import { quicksand } from '@/utils/font'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '.z',
  description: '.z',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(quicksand.className, 'antialiased w-[800px] mx-auto *:font-[500]')}>
        <MenuDesk />
        {children}
      </body>
    </html>
  )
}

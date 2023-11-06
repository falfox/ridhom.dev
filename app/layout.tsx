import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'ridhom.dev — Ridho Maulana Akbar',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </Head>
      <Analytics />
      <body>{children}</body>
    </html>
  )
}

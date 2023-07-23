import { Metadata } from 'next'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export const metadata: Metadata = {
  title: 'ridhom.dev — Ridho Maulana Akbar',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Ridho Maulana Akbar</title>
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  )
}

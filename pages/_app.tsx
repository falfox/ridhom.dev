import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Ridho Maulana Akbar</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp

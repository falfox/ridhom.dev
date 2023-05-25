import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <div className="antialiased text-white bg-black">
      <header className="flex items-center h-16 px-6 border-b border-gray-500">
        <div className="w-full max-w-4xl mx-auto">
          <Link href="/">
            <a className="text-lg font-extrabold text-white">ridhom.dev</a>
          </Link>
        </div>
      </header>
      <main className="px-6 py-32 md:flex md:flex-col md:justify-center md:min-h-screen">
        <div className="max-w-4xl mx-auto md:flex md:space-x-6">
          <div className="space-y-4 md:w-1/2">
            <h3 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              <span className="block leading-none text-white">Full Stack</span>
              <span className="block leading-none text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                Developer
              </span>
            </h3>
            <p className="text-base font-light leading-relaxed text-white">
              Hi, I’m <span className="font-bold">Ridho Maulana Akbar</span>.
              I'm a freelance full stack developer, UI/UX enthusiast and a
              cat-lover. I’m from Indonesia. I love TypeScript, NextJS,
              TailwindCSS. I still don't know what I'm doing.
            </p>
          </div>
          <div className="mt-16 md:w-1/2 md:mt-0">
            <div className="pb-4 text-xs font-bold leading-normal tracking-normal">
              RECENT WORK
            </div>
            <div className="space-y-4">
              <a
                href="https://untukumat.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col p-5 space-y-2 border border-white rounded-lg hover:text-black hover:bg-white"
              >
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-bold">Untukumat</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </div>
                <p className="text-xs font-light">
                  Indonesia fundraising platform by Cinta Quran Foundation
                </p>
              </a>
              <a
                target="_blank"
                href="https://member.chatwa.id/"
                rel="noreferrer noopener"
                className="flex flex-col p-5 space-y-2 border border-white rounded-lg hover:text-black hover:bg-white"
              >
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-bold">WhatsApp CS</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </div>
                <p className="text-xs font-light">
                  Chrome Extension that easily manage your customer WhatsApp
                  conversation.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-6 py-8 mt-8 border-t border-gray-500">
        <div className="pb-4 text-xs font-bold leading-normal tracking-normal md:text-center">
          CONTACTS
        </div>

        <div className="items-center justify-center space-y-4 text-xs md:space-y-0 md:space-x-6 md:text-center md:flex space">
          <a
            href="mailto:hi@ridhom.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center space-x-2 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-current"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="font-medium">hi@ridhom.dev</span>
          </a>
          <a
            href="https://github.com/falfox/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center space-x-2 hover:text-gray-500"
          >
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
            >
              <path d="M9 .223c-4.973 0-9 4.03-9 9a8.999 8.999 0 006.154 8.539c.45.084.615-.194.615-.433 0-.214-.008-.78-.011-1.53-2.504.543-3.032-1.208-3.032-1.208-.41-1.038-1.001-1.316-1.001-1.316-.816-.558.063-.547.063-.547.904.063 1.378.927 1.378.927.803 1.377 2.107.979 2.621.749.082-.582.313-.979.57-1.204-1.998-.225-4.099-.999-4.099-4.447 0-.983.349-1.785.926-2.415-.101-.228-.405-1.143.079-2.383 0 0 .754-.241 2.475.923.72-.2 1.485-.3 2.25-.304.765.005 1.53.104 2.25.304 1.71-1.164 2.464-.923 2.464-.923.483 1.24.18 2.155.09 2.383.574.63.922 1.432.922 2.414 0 3.458-2.104 4.22-4.106 4.44.315.27.607.822.607 1.665 0 1.205-.01 2.172-.01 2.465 0 .236.157.518.618.428A8.969 8.969 0 0018 9.223a9 9 0 00-9-9" />
            </svg>
            <span className="font-medium">falfox</span>
          </a>
          <a
            href="https://www.instagram.com/ridhoomm/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center space-x-2 hover:text-gray-500"
          >
            <svg
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
            >
              <path d="M9 0C6.555 0 6.25.011 5.29.054 4.33.099 3.679.25 3.105.472A4.407 4.407 0 001.51 1.51c-.5.5-.809 1.003-1.038 1.595C.25 3.679.098 4.331.054 5.29.009 6.25 0 6.555 0 9c0 2.445.011 2.75.054 3.71.045.958.196 1.611.418 2.185.23.591.538 1.094 1.038 1.595.5.499 1.003.809 1.595 1.038.575.222 1.227.374 2.185.418.96.045 1.265.054 3.71.054 2.445 0 2.75-.011 3.71-.054.958-.045 1.611-.197 2.185-.419a4.423 4.423 0 001.595-1.038c.499-.5.809-1 1.038-1.594.222-.574.374-1.227.418-2.185.045-.96.054-1.265.054-3.71 0-2.445-.011-2.75-.054-3.71-.045-.958-.197-1.612-.419-2.185A4.417 4.417 0 0016.49 1.51c-.5-.5-1-.809-1.594-1.038C14.321.25 13.668.098 12.71.054 11.75.009 11.445 0 9 0zm0 1.62c2.402 0 2.689.012 3.637.053.878.041 1.354.187 1.67.311.422.163.72.358 1.037.672.315.315.51.615.672 1.036.123.317.27.793.31 1.67.043.95.052 1.235.052 3.638 0 2.403-.01 2.689-.055 3.637-.046.878-.192 1.354-.316 1.67-.168.422-.359.72-.674 1.037-.314.315-.618.51-1.035.672-.315.123-.799.27-1.676.31-.956.043-1.237.052-3.645.052s-2.689-.01-3.644-.055c-.878-.046-1.362-.192-1.677-.316a2.787 2.787 0 01-1.034-.674 2.732 2.732 0 01-.675-1.035c-.124-.315-.27-.799-.315-1.676-.034-.945-.046-1.237-.046-3.633 0-2.397.012-2.69.046-3.646.046-.878.191-1.36.315-1.675.157-.428.36-.72.675-1.036a2.662 2.662 0 011.034-.674c.315-.124.788-.27 1.666-.315.956-.034 1.237-.046 3.644-.046L9 1.62zm0 2.758a4.621 4.621 0 100 9.243 4.621 4.621 0 000-9.243zM9 12a3 3 0 110-6 3 3 0 110 6zm5.884-7.804a1.08 1.08 0 01-2.16 0 1.08 1.08 0 012.16 0z" />
            </svg>
            <span className="font-medium">@ridhoomm</span>
          </a>
        </div>
      </footer>
    </div>
  )
}

import { Icons } from '@/components/icons'
import {
  NowPlayingCard,
  NowPlayingCardPlaceholder,
} from '@/components/now-playing'
import Slider from '@/components/slider'
import clsx from 'clsx'
import { Suspense } from 'react'
import { HeroSection } from './hero-section'

export const revalidate = 30

export default function Page() {
  return (
    <div className="antialiased text-white bg-[#0E0F11]">
      <HeroSection />
      <div className="border-b border-white/10" />

      <section className="relative top-0 w-full max-w-4xl px-4 pt-64 pb-8 mx-auto">
        <h2 className="pb-16 text-2xl font-semibold">Projects</h2>

        <article className="min-h-screen pb-4 bg-[#0E0F11] group">
          <a href="https://mazender.id" target="_blank">
            <img
              src="/mazender.png"
              alt="Mazender Project Preview"
              className="object-cover w-full duration-150 border border-gray-800 lg:scale-105 rounded-xl group-hover:scale-100"
            />

            <div className="relative py-8 space-y-3">
              <div className="pt-12 text-4xl font-bold">
                Mazender
                <LinkExternalIcon />
              </div>
              <div className="text-lg text-gray-300">
                Chrome Extension that helps you send messages quickly and easily
              </div>
              <div className="absolute right-0 flex space-x-3 top-4">
                <Badge>UI DESIGN</Badge>
                <Badge>FULL STACK</Badge>
              </div>
            </div>
          </a>
        </article>

        <article className="min-h-screen pb-4 bg-[#0E0F11] group">
          <a
            href="http://untukumat.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full border border-gray-800 rounded-xl">
              <img
                src="/untukumat.png"
                alt="Mazender Project Preview"
                className="object-cover w-full duration-150 border border-gray-800 lg:scale-105 rounded-xl group-hover:scale-100"
              />
            </div>

            <div className="relative py-8 space-y-3">
              <div className="pt-12 text-4xl font-bold">
                UntukUmat
                <LinkExternalIcon />
              </div>
              <div className="text-lg text-gray-300">
                Indonesia fundraising platform by Cinta Quran Foundation
              </div>
              <div className="absolute right-0 flex space-x-3 top-4">
                <Badge>MOBILE</Badge>
                <Badge>UI DESIGN</Badge>
                <Badge>FULL STACK</Badge>
              </div>
            </div>
          </a>
        </article>
        <article className="pb-4 bg-[#0E0F11] group">
          <a
            href="http://d2-leveling.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/d2-leveling.png"
              alt="Mazender Project Preview"
              className="object-cover w-full duration-150 border border-gray-800 lg:scale-105 rounded-xl group-hover:scale-100"
            />

            <div className="relative py-8 space-y-3 ">
              <div className="pt-12 text-4xl font-bold">
                Destiny 2 Leveling Tool
                <LinkExternalIcon />
              </div>
              <div className="text-lg text-gray-300">
                Help you minmax your overall Power Gear up to Pinnacle Cap
              </div>
              <div className="absolute right-0 flex space-x-3 top-4">
                <Badge>UI DESIGN</Badge>
                <Badge>FRONTEND</Badge>
              </div>
            </div>
          </a>
        </article>
      </section>

      <section className="py-64">
        <div className="w-full max-w-4xl px-4 py-8 mx-auto">
          <h2 className="text-2xl font-semibold">Tech Stacks & Tools</h2>
        </div>
        <div className="border-y border-white/10 bg-[#1A1A1A]/20 py-16">
          <div className="flex flex-wrap items-center justify-center w-full max-w-4xl gap-16 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
            >
              <title>React</title>
              <path
                fill="#fff"
                fillOpacity=".41"
                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
            >
              <title>Tailwind CSS</title>
              <path
                fill="#fff"
                fillOpacity=".41"
                d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
            >
              <title>Laravel</title>
              <path
                fill="#fff"
                fillOpacity=".41"
                d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033a.3.3 0 0 1 .024.06c.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81 1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505 2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256 1.58.908zm-8.65 9.654 5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              className="w-16 h-16"
            >
              <title>Next.js</title>
              <path
                fill="#fff"
                fillOpacity=".41"
                d="M30.86 0c-.47 0-.827.003-.956.018-.138.014-.576.056-.97.087-9.09.82-17.604 5.724-22.997 13.261-3.003 4.191-4.924 8.945-5.649 13.98C.031 29.105 0 29.624 0 32.007c0 2.384.032 2.903.288 4.66 1.739 12.017 10.29 22.112 21.89 25.853 2.077.67 4.267 1.126 6.756 1.401.97.107 5.162.107 6.131 0 4.298-.476 7.94-1.539 11.53-3.372.55-.281.657-.356.582-.419-.05-.037-2.396-3.183-5.211-6.987l-5.118-6.912-6.412-9.488c-3.529-5.217-6.431-9.483-6.456-9.483-.026-.007-.05 4.21-.063 9.357-.018 9.014-.025 9.377-.138 9.59-.163.306-.288.431-.55.569-.2.1-.376.118-1.32.118h-1.083l-.287-.181a1.169 1.169 0 0 1-.42-.457l-.131-.281.014-12.541.018-12.548.194-.244c.1-.132.313-.3.463-.381.256-.126.356-.138 1.439-.138 1.276 0 1.489.05 1.82.412.094.1 3.566 5.33 7.72 11.629 4.206 6.376 8.414 12.75 12.625 19.122l5.067 7.675.256-.17c2.272-1.475 4.674-3.577 6.575-5.766 4.048-4.648 6.657-10.315 7.533-16.358.256-1.757.287-2.277.287-4.66s-.032-2.902-.287-4.66C61.972 15.33 53.421 5.234 41.822 1.494 39.776.831 37.6.374 35.16.1 34.71.052 32.27 0 30.86 0Zm10.849 19.245c.926 0 1.088.014 1.295.126.3.15.544.438.632.738.05.162.062 3.64.05 11.478l-.018 11.247-1.983-3.04-1.99-3.04v-8.176c0-5.286.025-8.257.063-8.4.1-.351.319-.627.62-.789.255-.132.348-.144 1.33-.144Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
            >
              <title>Inertia.js</title>
              <path
                fill="#fff"
                fillOpacity=".41"
                d="M6.901 5.331H0L6.669 12 0 18.669h6.901L13.571 12 6.9 5.331zm10.43 0H10.43L17.099 12l-6.67 6.669h6.902L24 12l-6.669-6.669z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
            >
              <title>Figma</title>
              <path
                fill="#fff"
                fillOpacity=".41"
                d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
            >
              <title>TypeScript</title>
              <path
                fill="#fff"
                fillOpacity=".41"
                d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="w-full max-w-4xl px-4 py-8 mx-auto">
          <h2 className="pb-8 text-2xl font-semibold">My World</h2>

          <div
            className={clsx(
              'flex flex-wrap gap-4',
              'sm:grid grid-cols-6 grid-rows-4 gap-4 sm:gap-8 auto-cols-fr'
            )}
          >
            <a
              href="https://github.com/falfox"
              target="_blank"
              className={clsx(
                'flex flex-col items-center justify-center col-span-2 space-y-8 border rounded-lg border-white/10 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/60 w-full',
                'sm:flex-1 aspect-square md:aspect-auto h-48 sm:h-auto'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-white sm:w-16 sm:h-16"
              >
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <div className="text-xl font-semibold">GitHub</div>
            </a>
            <a
              href="https://twitter.com/falfoxdev"
              target="_blank"
              className={clsx(
                'flex flex-col items-center justify-center col-span-2 space-y-8 border rounded-lg border-white/10 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/60 relative group w-full',
                'sm:flex-1 aspect-square md:aspect-auto h-48 sm:h-auto'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-white sm:w-16 sm:h-16"
              >
                <path
                  fill="currentColor"
                  d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"
                />
              </svg>
              <div className="text-xl font-semibold">Twitter</div>

              <div className="absolute inset-x-0 flex items-start space-x-2 opacity-0 -top-24 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 43"
                  className="h-10"
                >
                  <path
                    fill="#fff"
                    d="M7.151.37A1 1 0 1 1 8.706 1.63L7.151.37Zm4.456 41.175a1 1 0 0 1-1.31.53l-8.285-3.517a1 1 0 0 1 .781-1.84l7.364 3.125 3.126-7.364a1 1 0 1 1 1.84.781l-3.516 8.285ZM8.706 1.629c-.245.303-.533.859-.814 1.713-.276.837-.526 1.895-.73 3.15-.41 2.507-.628 5.733-.542 9.403.17 7.342 1.557 16.377 4.994 24.884l-1.854.75C6.215 32.755 4.796 23.475 4.62 15.94c-.088-3.768.135-7.12.568-9.771.216-1.326.487-2.492.804-3.455.312-.946.692-1.766 1.16-2.344l1.554 1.258Z"
                  />
                </svg>
                <div className="font-semibold -translate-y-4">
                  SO MUCH NONSENSE <span className="text-2xl">🫣</span>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/ridhoomm/"
              target="_blank"
              className={clsx(
                'flex flex-col items-center justify-center col-span-2 space-y-8 border rounded-lg border-white/10 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/60 w-full',
                'sm:flex-1 aspect-square md:aspect-auto h-48 sm:h-auto'
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-white sm:w-16 sm:h-16"
              >
                <path
                  fill="currentColor"
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
                />
              </svg>
              <div className="text-xl font-semibold">Instagram</div>
            </a>

            <a
              href="https://www.bungie.net/7/en/User/Profile/3/4611686018494671832"
              target="_blank"
              className="relative col-span-6 overflow-hidden border rounded-lg sm:col-span-4 border-white/10"
            >
              <video
                src="https://r2.ridhom.dev/warlock.webm"
                controls={false}
                autoPlay
                loop
                muted
                className="object-cover h-full pointer-events-none"
              />

              <div className="absolute inset-x-0 bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute flex items-center bottom-4 left-4">
                <Icons.bungie className="w-12 h-12 mr-2 text-white" />
                <div className="text-4xl font-bold text-white drop-shadow-md">
                  FalFox#2847
                </div>
              </div>
            </a>
            <div className="flex flex-col flex-1 col-span-6 row-span-1 overflow-hidden sm:col-span-2">
              <Suspense fallback={<NowPlayingCardPlaceholder />}>
                <NowPlayingCard />
              </Suspense>

              <Slider />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg inline-flex px-3.5 py-2 text-xs  font-medium sm:text-sm text-white/90 border border-white/20">
      {children}
    </div>
  )
}

function LinkExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="inline-block w-6 h-6 ml-2 transition-all duration-200 origin-bottom-left scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  )
}

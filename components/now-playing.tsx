import { GET, NowPlaying } from '@/app/api/now-playing/route'
import { formatDistanceToNowStrict } from 'date-fns'
import { Icons } from './icons'
import NowPlayingIcon from './now-playing-icon'

export async function NowPlayingCard() {
  const response = await GET()

  if (!response.ok) {
    return (
      <div className="border rounded-lg border-white/10 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/60 divide-y divide-white/10">
        <div className="flex items-center px-4 py-2 space-x-2 text-sm">
          <span className="w-full truncate">Error</span>
          <a
            href="https://open.spotify.com/user/edoin21?si=a044ac47d3e44c15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.follow className="w-5 h-5 text-white shrink-0" />
          </a>
          <Icons.spotify className="w-5 h-5 shrink-0 text-[#1DB954]" />
        </div>
        <div className="flex items-center justify-center px-4 py-2 space-x-2">
          <div className="w-10 h-10 bg-gray-700 rounded-md shrink-0" />
          <div className="relative w-full">
            <div className="text-white truncate">Failed to Fetch</div>
            <div className="text-sm text-gray-400">Unknown Reasons</div>
          </div>
        </div>
      </div>
    )
  }

  const data = (await response.json()) as NowPlaying

  return (
    <div className="border rounded-lg border-white/10 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/60 divide-y divide-white/10">
      <div className="flex items-center px-4 py-2 space-x-2 text-sm">
        {data.live ? (
          <>
            <NowPlayingIcon />
            <span className="w-full truncate">Now Playing</span>
            <a
              href="https://open.spotify.com/user/edoin21?si=a044ac47d3e44c15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.follow className="w-5 h-5 p-px text-white shrink-0" />
            </a>
            <Icons.spotify className="w-5 h-5 shrink-0 text-[#1DB954]" />
          </>
        ) : (
          <>
            <span className="w-full text-gray-400 truncate">
              Played{' '}
              {formatDistanceToNowStrict(new Date(data.timestamp), {
                addSuffix: true,
              })}
            </span>
             <a
              href="https://open.spotify.com/user/edoin21?si=a044ac47d3e44c15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.follow className="w-5 h-5 p-px text-white shrink-0" />
            </a>
            <Icons.spotify className="w-5 h-5 shrink-0 text-[#1DB954]" />
          </>
        )}
      </div>
      <a
        href={data.url}
        target="_blank"
        className="flex items-center px-4 py-2 space-x-2 group"
      >
        <img
          src={data.cover_img}
          alt="Album Cover"
          className="w-10 h-10 rounded-md shrink-0"
        />
        <div className="relative w-full overflow-hidden">
          <div className="text-white truncate">{data.title}</div>
          <div className="text-sm text-gray-400 truncate">{data.artist}</div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline-block p-1.5 mr-px transition-all duration-200 origin-bottom-left scale-95 bg-white/10 border rounded-full shadow-xl opacity-0 border-white/40 w-7 h-7 group-hover:opacity-100 group-hover:scale-105"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  )
}

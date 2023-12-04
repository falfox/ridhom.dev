import clsx from 'clsx'

export function AnnounceLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a
      className="relative inline-block border border-black rounded-full bg-black/60 group"
      href={href}
      target="_blank"
    >
      <div className="inline-block bg-white/10 group-hover:bg-[#1549BA] rounded-full border border-transparent transition-colors">
        <div
          className={clsx(
            'text-white items-center inline-flex rounded-full font-bold text-sm',
            'bg-gradient-to-b from-black/50 to-transparent',
            'px-3.5 py-1.5'
          )}
          style={{}}
        >
          {children}
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 w-full h-6 bg-[#2865EB] blur-3xl" />
    </a>
  )
}

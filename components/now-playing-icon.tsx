'use client'

import React from 'react'
import { motion } from 'framer-motion'

const barAnimation = {
  show: { height: ['0%', '75%'] },
}

export default function NowPlayingIcon() {
  return (
    <div className="flex justify-center h-4 rotate-180 gap-x-px shrink-0">
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          className="w-0.5 origin-bottom bg-[#1DB954]"
          initial={{ height: Math.min(100, (index + 1) * 25) + '%' }}
          animate="show"
          variants={barAnimation}
          transition={{
            duration: 0.6,
            delay: [0.5, 0.4, 0, 0.8][index],
            yoyo: Infinity,
            repeatType: 'reverse',
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

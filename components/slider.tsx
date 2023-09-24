'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  'cats/cimenk.png',
  'cats/mamba_and_scoopy.png',
  'cats/regal.png',
  'cats/dino.jpg',
]

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <div className="relative object-cover w-full h-full overflow-hidden border rounded-lg border-white/10">
      <motion.div
        className="flex items-center justify-center w-full h-full"
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)

          if (swipe < -swipeConfidenceThreshold && page < images.length - 1) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold && page > 0) {
            paginate(-1)
          }
        }}
      >
        <img className="object-cover w-full h-full aspect-square" src={images[page]} alt="" />
      </motion.div>
      <div className="absolute left-0 right-0 flex items-center justify-center bottom-3">
        <div className="flex p-2 mx-auto space-x-2 bg-gray-900 border rounded-full bottom-2 border-white/10">
          {images.map((_, index) => (
            <div
              className={`cursor-pointer w-2 h-2 rounded-full ${
                page === index ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setPage([index, 0])}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default Slider

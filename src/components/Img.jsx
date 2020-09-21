import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useRaf from '@rooks/use-raf'

const baseWidth = 100
const distanceLimit = baseWidth * 6
const beyondTheDistanceLimit = distanceLimit + 1

const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
]

const widthOutput = [
  baseWidth,
  baseWidth * 1.3,
  baseWidth * 1.7,
  baseWidth * 2.5,
  baseWidth * 1.7,
  baseWidth * 1.3,
  baseWidth,
]

const Img = ({ mouseX, src }) => {
  const distance = useMotionValue(beyondTheDistanceLimit)
  const width = useSpring(useTransform(distance, distanceInput, widthOutput), {
    damping: 25,
    stiffness: 125,
  })

  const ref = useRef()

  useRaf(() => {
    const el = ref.current
    const mouseXVal = mouseX.get()
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect()

      const imgCenterX = rect.left + rect.width / 2

      const distanceDelta = mouseXVal - imgCenterX
      distance.set(distanceDelta)
      return
    }

    distance.set(beyondTheDistanceLimit)
  }, true)

  return <motion.img ref={ref} src={src} className='icon' style={{ width }} />
}

export default Img

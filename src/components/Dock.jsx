import React from 'react'
import { useMotionValue } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

import Img from './Img'

import '../styles/components/Dock.scss'

const Dock = ({ images }) => {
  const mouseX = useMotionValue(null)

  return (
    <div className='dock'>
      <div
        className='dock__icons'
        onMouseMove={e => mouseX.set(e.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {
          images.map(image => (
            <Img key={uuidv4()} src={image} mouseX={mouseX}/>
          ))
        }
      </div>
    </div>
  )
}

export default Dock

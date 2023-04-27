import React from 'react'
import background from '../images/bg.jpg'
import '../style/background.css'

export default function Background() {
  return (
    <img className="background" src={background} alt="Background Img" />
  )
}

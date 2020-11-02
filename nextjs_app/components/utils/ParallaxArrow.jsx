import { ParallaxLayer } from 'react-spring/addons.cjs'
import ScrollArrow from './ScrollArrow'

const ParallaxArrow = ({ offset, parallaxRef, text, to, style }) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={1}
      style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, pointerEvents: 'none' }}
    >
      <ScrollArrow scrollRef={parallaxRef} text={text} n={to} style={{ pointerEvents: 'auto' }} />
    </ParallaxLayer>

  )
}

export default ParallaxArrow

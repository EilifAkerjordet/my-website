import { ParallaxLayer } from 'react-spring/addons.cjs'
import ScrollArrow from './ScrollArrow'

const ParallaxArrow = ({ offset, parallaxRef, text, to }) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={1}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
    >
      <ScrollArrow scrollRef={parallaxRef} text={text} n={to} />
    </ParallaxLayer>

  )
}

export default ParallaxArrow

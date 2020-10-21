import { useState, useEffect } from 'react'

export default function useScrolled () {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    const el = document.querySelector('#the-navbar').getBoundingClientRect()
    const handleScrollEvent = () => {
      handleScroll(el.top, el.height)
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return isScrolled
}

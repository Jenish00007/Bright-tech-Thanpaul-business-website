import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export const CarouselWithControlsExample = () => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage className="d-block w-100" src="../../assets/bg.webp" alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="../../assets/model2.webp" alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="../../assets/hero.webp" alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}

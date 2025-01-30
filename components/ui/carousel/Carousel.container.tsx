import React, { FC } from 'react'

import Carousel from './Carousel.component'
import { CarouselProps } from './Carousel'

const CarouselContainer: FC<CarouselProps> = ({ children }) => {
    return (
        <Carousel >
            {children}
        </Carousel>
    )
}

export default CarouselContainer
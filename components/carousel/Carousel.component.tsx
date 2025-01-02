import React, { FC } from 'react'
import { Carousel as CarouselComponent } from "react-responsive-carousel";

import { CarouselProps } from './Carousel';

const Carousel: FC<CarouselProps> = ({ children }) => {
    return (
        <CarouselComponent
            className="min-w-[400px] max-w-[800px]"
            autoPlay
            interval={3000}
            transitionTime={1000}
            showStatus={false}
            showArrows={false}
            infiniteLoop
            emulateTouch
        >
            {children}
        </CarouselComponent>
    )
}

export default Carousel
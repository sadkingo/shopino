import React, { FC } from 'react'
import CarouselItem from './CarouselItem.component'


const CarouselItemContainer: FC<CarouselItemProps> = ({ image }) => {
    return (
        <CarouselItem image={image} />
    )
}

export default CarouselItemContainer
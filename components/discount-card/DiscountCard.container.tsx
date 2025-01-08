import React, { FC } from 'react'
import DiscountCard from './DiscountCard.component'
import { DiscountCardProps } from './DiscountCard'

const DiscountCardContainer: FC<DiscountCardProps> = ({children , ...restProps}) => {
    return (
        <DiscountCard {...restProps} >
            {children}
        </DiscountCard>
    )
}

export default DiscountCardContainer
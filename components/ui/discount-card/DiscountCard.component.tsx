import React, { FC } from 'react'
import { Text, VStack } from '@chakra-ui/react'

import { DiscountCardProps } from './DiscountCard'
import colors from '@/config/colors'

const DiscountCard: FC<DiscountCardProps> = ({children, ...restProps}) => {
    return (
        <VStack
            gap={0}
            h="full"
            w="full"
        >
            <Text
                w="full"
                bg={colors.light}
                p="2"
                textAlign="center"
            >
                Latest Super Discount Active Coupon Code
            </Text>
            <VStack w="full" flex={1} {...restProps}>
                {children}
            </VStack>
        </VStack>
    )
}

export default DiscountCard
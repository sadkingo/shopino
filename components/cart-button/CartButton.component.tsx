import { Button, Circle, Float, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React from 'react'

const CartButton = () => {
    return (
        <Button p="2">
            <Icon className="h-full w-full" icon="iconoir:cart" />
            <Float offset="2">
                <Circle size="5" bg="red" color="white">
                    <Text fontSize="12px">0</Text>
                </Circle>
            </Float>
        </Button>
    )
}

export default CartButton
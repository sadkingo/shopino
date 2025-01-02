import colors from '@/config/colors'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'

const CarouselItem: FC<CarouselItemProps> = ({ image }) => {
    return (
        <Box className="relative">
            <Image
                src={image}
                className="aspect-[2/1] rounded-xl"
                width="1200"
                height="600"
                alt={`Fruit`}
            />
            <Flex
                h="fit"
                w="fit"
                pos="absolute"
                top="10%"
                right={0}
                bottom={0}
                left={0}
                flexDir="column"
                justifyContent="center"
                alignItems="start"
                p={3}
                bg="skyblue/50"
                borderRightRadius="16px"
                maxW="3/4"
            >
                <Text fontSize="3xl" color={colors.medium} fontWeight="bolder">
                    Quality Freshness Guaranteed!
                </Text>
                <Text fontSize="xl" textAlign="start" p={3}>
                    Quickly aggregate empowered networks after emerging
                    products...
                </Text>
            </Flex>
        </Box>
    )
}

export default CarouselItem
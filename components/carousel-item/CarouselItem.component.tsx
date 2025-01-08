import colors from '@/config/colors'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'

const CarouselItem: FC<CarouselItemProps> = ({ image }) => {
    return (
        <Box className="relative px-3">
            <Image
                src={image}
                className="rounded-xl aspect-[2/1]"
                width="1200"
                height="600"
                alt={`Fruit`}
            />
            <Flex
                pos="absolute"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                h="fit"
                w="fit"
                maxW="1/2"
                top="10%"
                right={0}
                bottom={0}
                left={0}
                p={3}
                borderRightRadius="16px"
                xlDown={{ p: 0, maxW: "none" }}
                mdDown={{ maxW: "1/2" }}
            >
                <Text
                    fontSize={{ base: "2xl", lgDown: "xl" }}
                    textAlign="center"
                    color={colors.mediumLight}
                    fontWeight="bolder"
                >
                    Quality Freshness Guaranteed!
                </Text>
                <Text
                    fontSize={{ base: "xl", lgDown: "md" }}
                    color="white"
                    textAlign="center"
                    p={2}
                >
                    Quickly aggregate empowered networks after emerging
                    products...
                </Text>
                <Button
                    bg={colors.mediumLight}
                    color="white"
                    p={2}
                >
                    Get It now
                </Button>
            </Flex>
        </Box>
    )
}

export default CarouselItem
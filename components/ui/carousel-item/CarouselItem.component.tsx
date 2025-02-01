import colors from "@/config/colors";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";

const CarouselItem: FC<CarouselItemProps> = ({image}) => {
  return (
    <Box
      pos="relative"
      px={3}
      flex={1}
    >
      <Image
        src={image}
        className="rounded-xl aspect-[2/1]"
        width="1200"
        height="600"
        alt={`Fruit`}
      />
      <Flex
        borderRightRadius="16px"
        pos="absolute"
        flexDir="column"
        h="fit"
        w="full"
        mdDown={{
          maxW: "none",
          top: 0,
          alignItems: "center",
          gap: 2,
          pt: 0,
        }}
        smDown={{
          px: 2,
        }}
        pt={4}
        px={12}
        gap={6}
        top="10%"
        right={0}
        bottom={0}
        left={0}
      >
        <Text
          fontSize={{base: "3xl", lgDown: "2xl", mdDown: "xl"}}
          textAlign="start"
          mdDown={{textAlign: "center"}}
          color={colors.mediumLight}
          fontWeight="bolder"
        >
          Quality Freshness Guaranteed!
        </Text>
        <Text
          fontSize={{base: "xl", lgDown: "md"}}
          textAlign="start"
          mdDown={{textAlign: "center"}}
          color="white"
        >
          Quickly aggregate empowered networks after emerging products...
        </Text>
        <Button
          w="fit"
          bg={colors.mediumLight}
          color="white"
          p={2}
          fontSize={16}
          md={{p: 7, fontSize: 24}}
        >
          Get It now
        </Button>
      </Flex>
    </Box>
  );
};

export default CarouselItem;

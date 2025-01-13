import { FC } from 'react';
import Image from "next/image";
import { Badge, Flex, Text, VStack } from "@chakra-ui/react";
import { colors } from "@/config/theme";
import { DiscountItemProps } from "@components/DiscountItem/DiscountItem";
import Timer from "@components/Timer/Timer.container";


const DiscountItem: FC<DiscountItemProps> = ({ image, date, coupon, ...restProps }) => {
  return (
    <Flex
      smDown={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: "2",
      }}
      justifyContent="start"
      p={2}
      {...restProps}>

      <Image width={100} height={100} className="w-[100px] h-[100px] object-cover rounded-2xl border bg-white"
             src={image}
             style={{ borderColor: colors.light }} alt="product"/>
      <VStack
        flex={1}
        gap={1}
        px={2}
      >
        <Flex gap={1} alignItems="center">
          <Text fontSize="xl" color="red">10%</Text>
          <Text color="gray.400">Off</Text>
          <Badge h="fit" rounded="xl" px={3} py={1} variant="solid" bg={colors.light + "D9"}
                 color="white">
            <Text>Active</Text>
          </Badge>
        </Flex>
        <Flex fontWeight="bold">
          {coupon}
        </Flex>
        <Timer date={date}/>
      </VStack>
    </Flex>
  )
}

export default DiscountItem;
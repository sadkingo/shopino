import { FC } from 'react';
import { Icon } from '@iconify/react'
import { Flex, Link, Text, VStack } from "@chakra-ui/react";


const FeaturedCategoryCard: FC<FeaturedCategoryCardProps> = ({title, icon, topItems, link}) => {
  return (
    <Link href={link}>
      <Flex
        gap={8}
        borderColor="gray"
        borderRadius="10px"
        borderStyle="solid"
        borderWidth="1px"
        p={4}
        transition="all 0.3s ease-in-out"
        _hover={{transform: "scale(1.1)"}}
      >
        <Icon width={35} height={35} icon={icon}/>
        <VStack
          alignItems="start"
        >
          <Text>
            {title}
          </Text>
          {topItems.map((item, index) => (
            <Text key={index} color="gray.500" fontSize="sm">{item}</Text>
          ))}
        </VStack>
      </Flex>
    </Link>
  )
}

export default FeaturedCategoryCard;
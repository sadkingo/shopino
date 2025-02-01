import { FC } from 'react';
import {
  AvatarFallback,
  AvatarImage, AvatarRoot,
  CardBody,
  CardFooter,
  CardRoot,
  CardTitle, Flex,
  StatLabel,
  StatRoot,
  StatValueText, Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import orangeImage from "@images/orange.webp"

const ProductCard: FC = () => {
  return (
    <CardRoot margin="auto" w="350px" shadow="xl">
      <CardBody>
        <StatRoot flexDir="row">
          <StatLabel>Stock:</StatLabel>
          <StatValueText color="blue.400" fontSize={16}>192</StatValueText>
        </StatRoot>
        <AvatarRoot>
          <AvatarFallback>
            <AvatarImage src={orangeImage.src}/>
          </AvatarFallback>
          <AvatarImage src={orangeImage.src}/>
        </AvatarRoot>
        <CardTitle>
          Clementine
        </CardTitle>
      </CardBody>
      <CardFooter>
        <Flex alignItems="center" gap={4}>
          <Text>$48.18</Text>
          <Icon className="h-full w-full" icon="material-symbols:favorite"/>
        </Flex>
      </CardFooter>
    </CardRoot>
  )
}

export default ProductCard;
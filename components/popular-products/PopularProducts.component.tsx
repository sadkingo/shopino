import { FC } from 'react';
import { Heading, Stack, Text } from "@chakra-ui/react";
import ProductCard from "@components/product-card";

const PopularProducts: FC = () => {
  return (
    <Stack textAlign="center">
      <Heading
        fontSize={24}
        fontWeight="bold"
        color="brand.primary"
      >
        Popular Products
      </Heading>
      <Text maxW={600}>
        See all our popular products in this week.
        You can choose your daily needs products from this list and get some
        special offer with free shipping.
      </Text>
      {/* Add your popular products here */}
      <ProductCard/>
    </Stack>
  )
}

export default PopularProducts;
import { FC } from 'react';
import { Flex, Grid, Text, VStack } from "@chakra-ui/react";
import FeaturedCategoryCard from "@components/featured-category-card";

const FeaturedCategories: FC = () => {
  return (
    <VStack
      p={8}
      alignItems="center"
      w="full"
    >
      <Text
        fontSize={24}
        fontWeight="bold"
        color="brand.primary"
      >
        FeaturedCategories
      </Text>
      <Text>
        Choose your necessary products from this feature categories.
      </Text>
      <Grid
        w="full"
        templateRows="auto"
        justifyItems="center"
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
      >
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
        <FeaturedCategoryCard
          title="Biscuits & Cakes"
          topItems={["Biscuits", "Cakes"]}
          link="/products#BiscuitsAndCakes"
          icon="emojione:cookie"
        />
      </Grid>
    </VStack>
  )
}

export default FeaturedCategories;
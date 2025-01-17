import { FC } from 'react';
import { Flex, Text, VStack } from "@chakra-ui/react";
import FeaturedCategoryCard from "@components/featured-category-card";

const FeaturedCategories: FC = () => {
  return (
    <VStack>
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
      <Flex
        gap={4}
        flexWrap="wrap"
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
      </Flex>
    </VStack>
  )
}

export default FeaturedCategories;
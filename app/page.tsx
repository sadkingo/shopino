"use client";
import { Grid, HStack } from "@chakra-ui/react";

import fruit1 from "@/public/images/fruit-1.png";
import fruit2 from "@/public/images/fruit-2.png";
import fruit3 from "@/public/images/fruit-3.png";

import CarouselItem from "@/components/carousel-item";
import Carousel from "@/components/carousel";
import DiscountCard from "@/components/discount-card";
import colors from "@/config/colors";
import DiscountItem from "@components/DiscountItem";

export default function Home() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2, minmax(0, 1fr))", mdDown: "minmax(0, 1fr)" }}
      h="fit"
      flexDir={{ lgDown: "column" }}
      flex={1}
      p={4}
    >
      {renderMainCarousel()}
      <DiscountCard borderWidth={2} borderColor={colors.light} >
        <DiscountItem/>
      </DiscountCard>
    </Grid>
  );

  function renderMainCarousel() {
    return (
      <HStack h="fit">
        <Carousel>
          {[fruit1, fruit2, fruit3].map((src, index) => (
            <CarouselItem key={index} image={src} />
          ))}
        </Carousel>
      </HStack>
    )
  }
}

"use client";
import { Flex, Grid, GridItem, Link, Text, VStack } from "@chakra-ui/react";

import fruit1 from "@/public/images/fruit-1.png";
import fruit2 from "@/public/images/fruit-2.png";
import fruit3 from "@/public/images/fruit-3.png";
import apple from "@/public/images/apple.png";

import CarouselItem from "@/components/ui/carousel-item";
import Carousel from "@components/ui/carousel";
import DiscountCard from "@components/ui/discount-card";
import colors from "@/lib/theme-config/colors";
import DiscountItem from "@components/ui/discount-item";
import { Alert } from "@components/chakra-ui/alert";
import { themedColors } from "@/lib/theme-config/theme";
import FeaturedCategories from "@components/ui/featured-categories";
import PopularProducts from "@components/ui/popular-products";

export default function Home() {
  const date = new Date(2026, 2, 15, 3, 4, 5);

  return (
    <VStack
      gap={0}
    >
      <Grid
        alignItems="center"
        gridTemplateColumns="repeat(12, minmax(0, 1fr))"
        flexDir={{lgDown: "column"}}
        h="fit"
        w="fit"
        p={4}

        gapY={8}
      >
        <GridItem display="flex" alignItems="center" colSpan={{base: 7, lgDown: 12}}>
          {renderMainCarousel()}
        </GridItem>
        <GridItem colSpan={{base: 5, lgDown: 12}}>
          {renderCouponCard()}
        </GridItem>
        <GridItem colSpan={12}>
          {renderDiscountAlert()}
        </GridItem>
      </Grid>
      <FeaturedCategories/>
      <PopularProducts/>
    </VStack>
  );

  function renderDiscountAlert() {
    return (
      <Alert
        icon={<></>}
        status="info"
        variant="subtle"
      >
        <VStack
          gap={4}
        >
          <Flex
            fontSize="2xl"
            color={themedColors.light}
          >
            100% Natural Quality Organic Product
          </Flex>
          <Text
            fontSize="xl"
            gap={2}
          >
            See Our latest discounted products from here and get a special
            <Link m={2} color={themedColors.medium} href="#Products">discount product</Link>
          </Text>
        </VStack>
      </Alert>
    )
  }

  function renderMainCarousel() {
    return (
      <Flex
        w="fit"
        h="fit"
        justifyContent={"center"}
      >
        <Carousel>
          {[fruit1, fruit2, fruit3].map((src, index) => (
            <CarouselItem key={index} image={src}/>
          ))}
        </Carousel>
      </Flex>
    );
  }

  function renderCouponCard() {
    return <DiscountCard
      maxH="400px"
      overflow="hidden"
      borderWidth={2}
      borderColor={colors.light}
      alignItems="start"
      overflowY="auto"
    >
      <DiscountItem
        coupon="COUPON_HERE"
        date={date}
        image={apple}
        w="full"
        borderBottom={`${colors.light} solid 1px`}
      />
      <DiscountItem
        coupon="COUPON_HERE"
        date={date}
        image={apple}
        w="full"
        borderBottom={`${colors.light} solid 1px`}
      />
      <DiscountItem
        coupon="COUPON_HERE"
        date={date}
        image={apple}
        w="full"
        borderBottom={`${colors.light} solid 1px`}
      />
      <DiscountItem
        coupon="COUPON_HERE"
        date={date}
        image={apple}
        w="full"
        borderBottom={`${colors.light} solid 1px`}
      />
    </DiscountCard>;
  }
}

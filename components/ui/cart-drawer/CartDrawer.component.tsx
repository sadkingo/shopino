"use client"
import { FC } from 'react';
import {
  DrawerBackdrop,
  DrawerBody, DrawerCloseTrigger,
  DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@components/chakra-ui/drawer";
import Link from "next/link";
import { Button } from "@components/chakra-ui/button";
import { Circle, Flex, Float, Separator, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react"

const CartDrawer: FC = () => {
  return (
    <DrawerRoot>
      <DrawerBackdrop/>
      <DrawerTrigger asChild>
        <Button p="2">
          <Icon className="h-full w-full" icon="iconoir:cart"/>
          <Float offset="2">
            <Circle size="5" bg="red" color="white">
              <Text fontSize="12px">0</Text>
            </Circle>
          </Float>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle fontSize="xl" fontWeight="bold">
            Shopping Cart
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Stack w="full">
            {renderCartItem()}
          </Stack>
        </DrawerBody>
        <DrawerFooter p={0} justifyContent="center">
          <Link className="w-full" href="/checkout">
            <DrawerTrigger
              rounded="none"
              color="bg"
              fontSize="xl" fontWeight="bold"
              w="full" p={8}
              bg="bg.inverted"
            >
              Proceed to checkout
            </DrawerTrigger>
          </Link>
        </DrawerFooter>
        <DrawerCloseTrigger/>
      </DrawerContent>
    </DrawerRoot>
  )

  function renderCartItem() {
    return (
      <Flex>
        <Circle size="50" bg="gray.200"/>
        <Stack pl="4" pr="8">
          <Text>Product Name</Text>
          <Text>Price: $100.00</Text>
          <Text>Quantity: 1</Text>
          <Button size="sm" variant="ghost" colorScheme="red">
            Remove
          </Button>
          <Text>Subtotal: $100.00</Text>
          <Separator my={4}/>
          <Text fontWeight="bold">Total: $100.00</Text>
        </Stack>
      </Flex>
    )
  }
}

export default CartDrawer;
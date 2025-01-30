import { HStack } from "@chakra-ui/react";
import React from "react";
import Menu from "../../commen/menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import colors from "@/config/colors";
// TODO Grab the menus form API
const NavLinks = () => {
  return (
    <HStack
      bg={{_light: colors.mediumLight, _dark: colors.medium}}
      mdDown={{display: "none"}}
      p={1}
      borderBottomWidth={1}
      justifyContent="space-around"
      fontSize={18}
    >
      <HStack gap={8}>
        <Menu
          title="Categories"
          items={[{id: 0, title: "All products", url: "/"}]}
        >
          <Icon icon="ep:arrow-down"/>
        </Menu>
        <Link href="/about-us">About us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </HStack>
      <HStack gap={8} justifyContent="center" alignItems="center">
        <Menu
          items={[
            {
              id: 0,
              title: "Arabic",
              content: (
                <HStack fontSize={16}>
                  <Icon icon="twemoji:flag-algeria"/>
                  Arabic
                </HStack>
              ),
              url: "/",
            },
          ]}
        >
          <Icon icon="flag:us-4x3"/> English
        </Menu>
        <Link href="/about-us">Privacy Policy</Link>
        <Link href="/contact-us">Terms & Conditions</Link>
      </HStack>
    </HStack>
  );
};

export default NavLinks;

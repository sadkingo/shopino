import { Icon } from "@iconify/react";
import Link from "next/link";

import {
  Box,
  Button,
  Circle,
  Float,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "@ui/input-group";
import Menu from "@components/menu";

import { NAVBAR_HIGHT, ProfileMenuItems } from "./NavBar.config";
import { ColorModeButton } from "@ui/color-mode";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@ui/drawer";
import colors from "@/config/colors";

function NavBarComponent() {
  return (
    <HStack
      h={NAVBAR_HIGHT + 4}
      w="full"
      px="5%"
      lg={{ px: "15%" }}
      py={2}
      justifyContent="space-between"
      bg="Background"
    >
      {renderDesktopMenu()}
      {renderMobileMenu()}
      <ColorModeButton ms="10" />
    </HStack>
  );

  function renderDesktopMenu() {
    return (
      <HStack mdDown={{ display: "none" }} gap={8} h="full" w="full">
        {renderLogoLink()}
        <InputGroup
          minW="fit"
          w="full"
          color="white"
          bg={{ _light: colors.mediumLight, _dark: colors.medium }}
          startElement={<LuSearch color="white" />}
        >
          <Input
            outlineColor={{ base: colors.light, _dark: colors.dark }}
            _placeholder={{ color: "white" }}
            placeholder="Search products"
          />
        </InputGroup>
        <HStack>
          <Button p="2">
            <Icon className="w-full h-full" icon="fluent:alert-48-filled" />
          </Button>
          <Button p="2">
            <Icon className="w-full h-full" icon="material-symbols:favorite" />
          </Button>
          <Button p="2">
            <Icon className="w-full h-full" icon="ic:outline-share" />
          </Button>
          <Button p="2">
            <Icon className="w-full h-full" icon="iconoir:cart" />
            <Float offset="2">
              <Circle size="5" bg="red" color="white">
                <Text fontSize="12px">0</Text>
              </Circle>
            </Float>
          </Button>
          <Menu items={ProfileMenuItems}>
            <Icon className="w-full h-full" icon="mdi:user" />
          </Menu>
        </HStack>
      </HStack>
    );
  }
  function renderLogoLink() {
    return (
      <Link
        href="/"
        className="flex justify-center items-center min-h-8 gap-2 h-full"
      >
        <Box h="full" w="max-content">
          <Icon
            className={`h-full w-fit`}
            icon="fluent-mdl2:shopping-cart-solid"
          />
        </Box>
        <Text fontWeight="bolder">{process.env.WEBSITE_NAME}</Text>
      </Link>
    );
  }
  function renderMobileMenu() {
    return (
      <HStack wrap="wrap" md={{ display: "none" }}>
        <DrawerRoot size="full" placement="start">
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              <Icon className="w-full h-fit" icon="stash:burger-classic" />
            </Button>
          </DrawerTrigger>
          <DrawerContent md={{ display: "none" }}>
            <DrawerBody px="0" pt="0" bg={{ _light: colors.mediumLight }}>
              <VStack w="full" h="fit" gap="0">
                <Box bg={{ _light: "white" }} w="full" h="12">
                  {renderLogoLink()}
                </Box>
                {mobileMenuButton("Home", "/")}
                {mobileMenuButton("Profile", "/")}
                {mobileMenuButton("Cart", "/")}
                {mobileMenuButton("Products", "/")}
                {mobileMenuButton("About us", "/")}
                {mobileMenuButton("Contact us", "/")}
              </VStack>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </HStack>
    );
    function mobileMenuButton(text: string, href: string) {
      return (
        <Link href={href} className="w-full">
          <Button
            w="full"
            borderRadius="none"
            bg={colors.medium}
            color="white"
            opacity={{ _hover: "80%" }}
          >
            {text}
          </Button>
        </Link>
      );
    }
  }
}

export default NavBarComponent;

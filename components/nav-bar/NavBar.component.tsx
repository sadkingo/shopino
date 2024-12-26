import { Icon } from "@iconify/react";
import Link from "next/link";

import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "@ui/input-group";
import { ColorModeButton } from "@ui/color-mode";
import Menu from "@components/menu";

import { NAVBAR_HIGHT, ProfileMenuItems } from "./NavBar.config";

function NavBarComponent() {
  return (
    <HStack
      justifyContent={"space-between"}
      gap={8}
      h={"12"}
      px={"15%"}
      py={2}
      position={"relative"}
    >
      <Link href="/" className="flex gap-2 h-full">
        <Box h={"full"} w="fit">
          <Icon
            className={`h-${NAVBAR_HIGHT} w-${NAVBAR_HIGHT}`}
            icon="fluent-mdl2:shopping-cart-solid"
          />
        </Box>
        <Box>{process.env.WEBSITE_NAME}</Box>
      </Link>
      <InputGroup
        minW={"fit"}
        w="full"
        bg={"gray.800"}
        startElement={<LuSearch />}
      >
        <Input placeholder="Search products" />
      </InputGroup>
      <ColorModeButton position={"absolute"} right={"14"} />
      <HStack>
        <Button p={"2"}>
          <Icon className="w-full h-full" icon="fluent:alert-48-filled" />
        </Button>
        <Button p={"2"}>
          <Icon className="w-full h-full" icon="material-symbols:favorite" />
        </Button>
        <Button p={"2"}>
          <Icon className="w-full h-full" icon="ic:outline-share" />
        </Button>
        <Button p={"2"}>
          <Icon className="w-full h-full" icon="iconoir:cart" />
        </Button>
        <Menu items={ProfileMenuItems}>
          <Icon className="w-full h-full" icon="mdi:user" />
        </Menu>
      </HStack>
    </HStack>
  );
}

export default NavBarComponent;

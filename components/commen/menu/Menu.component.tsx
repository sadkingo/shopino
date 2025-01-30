import React from "react";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

import { MenuProps } from "./Menu";
import Link from "next/link";

const Menu = ({ title, items, style, childrenStyle, children }: MenuProps) => {
  return (
    <Box w="fit" h="fit" zIndex={1}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button size="sm" style={style} variant="outline">
            {title}
            {children}
          </Button>
        </MenuTrigger>
        <MenuContent pos="absolute">
          {items.map((menu) => (
            <MenuItem
              key={menu.id}
              style={childrenStyle}
              asChild
              value={menu.title}
            >
              <Link href={menu.url}>{menu.content || menu.title}</Link>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default Menu;

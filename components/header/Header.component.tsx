import React from "react";
import NavBar from "../nav-bar";
import BottomNav from "../nav-links";
import ContactStrap from "../contact-strap";
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <ContactStrap/>
      <Box pos="sticky" zIndex={1} top={0}>
        <NavBar/>
        <BottomNav/>
      </Box>
    </>
  );
};

export default Header;

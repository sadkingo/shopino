import { Center, ClipboardRoot, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ClipboardLink } from "@components/chakra-ui/clipboard";
import { Icon } from "@iconify/react";
import colors from "@/config/colors";

const ContactStrap = () => {
  const phoneNumber = "(555-555-555)";
  return (
    <Center bg={{_light: colors.mediumLight, _dark: colors.medium}} gap={2}>
      <Icon className="text-white" icon="line-md:phone-call-loop"/>
      <Text color="white" fontWeight="bold">
        We are available 24/7, Need help? Call Us:
      </Text>
      <Stack color="white">
        <ClipboardRoot value={phoneNumber}>
          <ClipboardLink
            value={phoneNumber}
            color="black"
            fontWeight="bolder"
            textStyle="sm"
          />
        </ClipboardRoot>
      </Stack>
    </Center>
  );
};

export default ContactStrap;

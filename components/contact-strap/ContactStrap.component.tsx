import { Center, ClipboardRoot, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ClipboardLink } from "../ui/clipboard";
import { Icon } from "@iconify/react";

const ContactStrap = () => {
  const phoneNumber = "(555-555-555)";
  return (
    <Center gap={2}>
      <Icon className="text-white" icon="line-md:phone-call-loop" />
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

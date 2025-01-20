import * as React from 'react';
import {
  Container,
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { siteConfig } from './Footer.config';
import FooterSignup from '@components/email-news-signUp';
import { ExternalFooterLink, InternalFooterLink } from '@components/footer-links';

const Footer = () => {
  const socialMediaLinks = {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || 'http://www.facebook.com',
    x: process.env.NEXT_PUBLIC_X_LINK || 'https://x.com/###',
    github: process.env.NEXT_PUBLIC_GITHUB_LINK || "https://github.com/sadkingo",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/mohammed-zakaria-dhiab-50168a283/",
  }

  return (
    <Box
      as="footer"
      w="screen"
      bg={{_light: "whiteAlpha.950", _dark: "blackAlpha.950"}}
    >
      <Container
        w="screen"
        p={{base: 5, md: 10}}
      >
        <SimpleGrid
          flexDirection="column-reverse"
          gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
          borderTopWidth={2}
          mt="30px"
          borderTopColor="gray.900"
          pt="20px"
        >
          <Box display={['block', 'block', 'none', 'none']} mb="30px">
            <FooterSignup/>
          </Box>
          <Box>
            <SimpleGrid gap={8} columns={[1, 1, 2, 3]}>
              {renderMainLinks()}
              {renderHelpLinks()}
              {renderSocialMediaLinks()}
            </SimpleGrid>
            <Text mt="20px" color="gray.500">
              Made with 🧡 by{' '}
              <ChakraLink
                _focus={{boxShadow: 'none', outline: 'none'}}
                target="_blank"
                href={siteConfig.author.github}
                fontWeight={600}
                color="white"
                bgClip="text"
                bgGradient="to-l"
                gradientFrom="#7928CA"
                gradientTo="#FF0080"
                _hover={{
                  bgGradient: 'to-r',
                  gradientFrom: 'red.500',
                  gradientTo: 'yellow.500',
                }}
              >
                {process.env.NEXT_PUBLIC_NAME || "SaDKinG"}
              </ChakraLink>{' '}
            </Text>
          </Box>
          <Box display={['none', 'none', 'block', 'block']}>
            <FooterSignup/>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );

  function renderMainLinks() {
    return <Stack mb={['10px', '10px', 0, 0]}>
      <Text as="span">
        <ExternalFooterLink href="#" text="Contact us"/>
      </Text>
      <Text as="span">
        <ExternalFooterLink href="#" text="Contribute"/>
      </Text>
      <Text as="span">
        <InternalFooterLink href="#" text="Open source projects"/>
      </Text>
    </Stack>;
  }

  function renderHelpLinks() {
    return <Stack>
      <Text as="span">
        <ExternalFooterLink href="#" text="Sponsor"/>
      </Text>
      <Text as="span">
        <ExternalFooterLink href="#" isExternal={false} text="FAQs"/>
      </Text>
    </Stack>;
  }

  function renderSocialMediaLinks() {
    return <Flex flexWrap="wrap">
      <ChakraLink _hover={{opacity: 0.75}} href={socialMediaLinks.facebook} target="_blank">
        <Icon width={60} height={60} icon="ic:baseline-facebook"/>
      </ChakraLink>
      <ChakraLink _hover={{opacity: 0.75}} href={socialMediaLinks.github} target="_blank">
        <Icon width={60} height={60} icon="mdi:github"/>
      </ChakraLink>
      <ChakraLink _hover={{opacity: 0.75}} href={socialMediaLinks.linkedin} target="_blank">
        <Icon width={60} height={60} icon="entypo-social:linkedin-with-circle"/>
      </ChakraLink>
      <ChakraLink _hover={{opacity: 0.75}} href={socialMediaLinks.x} target="_blank">
        <Icon icon="pajamas:twitter" width="60" height="60"/>
      </ChakraLink>
    </Flex>;
  }
};

export default Footer;
import { FC } from 'react';
import * as React from 'react';
import { Link as ChakraLink, IconButton } from '@chakra-ui/react';
import {
  ExternalFooterLinkProps,
  ExternalSocialLinkProps,
  InternalFooterLinkProps,
} from "@ui/footer-links/FooterLinksType";
import { iconProps } from "./FooterLinks.config"

const ExternalFooterLink: FC<ExternalFooterLinkProps> = ({href, text, isExternal = true}) => {
  return (
    <ChakraLink
      _focus={{outline: 'none', boxShadow: 'none'}}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      fontWeight={500}
      color="gray.500"
      _hover={{color: 'gray.600', textDecoration: 'none'}}
    >
      {text}
    </ChakraLink>
  )
}

const InternalFooterLink: FC<InternalFooterLinkProps> = ({href, text}) => {
  return (
    <a>
      <ChakraLink
        href={href}
        _focus={{outline: 'none', boxShadow: 'none'}}
        as="span"
        fontWeight={500}
        color="gray.500"
        _hover={{color: 'gray.600', textDecoration: 'none'}}
      >
        {text}
      </ChakraLink>
    </a>
  );
};

const ExternalSocialLink: FC<ExternalSocialLinkProps> =
  ({href, label, icon, type, isExternal = true}) => {

    return (
      <IconButton
        as={ChakraLink}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Ignoring TypeScript error for the href prop
        // problem ts reading the props from "as"
        href={href}
        target={isExternal ? '_blank' : '_self'}
        aria-label={label}
        icon={icon}
        colorScheme={type}
        {...iconProps}
      />
    );
  };

export { ExternalFooterLink, InternalFooterLink, ExternalSocialLink } ;
type ExternalFooterLinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
};
type InternalFooterLinkProps = {
  href: string;
  text: string;
};
type ExternalSocialLinkProps = {
  href: string;
  label: string;
  isExternal?: boolean;
  type: string;
  icon: iconProps;
};

export type { FooterLinkProps, ExternalFooterLinkProps, InternalFooterLinkProps, ExternalSocialLinkProps };

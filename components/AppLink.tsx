import Link, { LinkProps } from 'next/link';
import React, { HTMLProps, ReactNode } from 'react';

type AppLinkProps = {
  href: string;
  children: ReactNode;
  handleClick?: () => void;
  appearance?: React.CSSProperties;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>;

const defaultLinkStyles = {
  margin: '0 2px',
  color: 'gray',
  display: 'block',
  textDecoration: 'none'
};

export default function AppLink({
  href,
  children,
  handleClick,
  appearance = defaultLinkStyles,
  ...rest
}: AppLinkProps) {
  return (
    <Link href={href} style={appearance} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}

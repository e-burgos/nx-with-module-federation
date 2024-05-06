import React from 'react';
import Frame from '../Frame';

export interface LayoutProps {
  children?: React.ReactNode;
  withFrame?: boolean;
}

function Layout({ children, withFrame }: LayoutProps) {
  if (withFrame) return <Frame>{children}</Frame>;
  return <div>{children}</div>;
}

export default Layout;

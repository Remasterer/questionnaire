import '../styles/main.scss';

import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { StoreProvider } from '../providers';
import { font } from './font';

export const metadata: Metadata = {
  title: 'Nebula Questionnaire'
};

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <html lang="en" className={font.className}>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
};

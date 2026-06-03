'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider defaultTheme="normal" themes={['normal', 'dark']} attribute="data-theme">
      {children}
    </NextThemesProvider>
  );
}

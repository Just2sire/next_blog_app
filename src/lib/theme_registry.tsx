// app/ThemeRegistry.tsx
'use client';
import createCache, { EmotionCache } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider, Theme } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useState, createContext} from 'react';
import { themeOptions } from './theme';

interface ThemeContextInterface {
  mode: string
  toggle: () => void
}

export const AppThemeContext = createContext<ThemeContextInterface | null>(null);

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode
}) {
  const options = { key: 'mui' }

  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev: string) => (prev === "dark" ? "light" : "dark"));
  };

  const [{ cache, flush }] = useState<{
    cache: EmotionCache;
    flush: () => string[];
}>(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  const lightTheme: Theme = createTheme(themeOptions.light);
  const darkTheme: Theme = createTheme(themeOptions.dark);

  return (
    <CacheProvider value={cache}>
      <AppThemeContext.Provider value={{ mode, toggle }} >
        <ThemeProvider theme={mode == 'light' ? lightTheme : darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppThemeContext.Provider>
    </CacheProvider>
  );
}


import { createContext } from 'react';

interface IThemeContext {
  theme: String,
  setTheme: Function
}

export const ThemeContext = createContext<IThemeContext>({theme: '', setTheme: () => {}});
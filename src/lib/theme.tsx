import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { purple, green, blue, red } from '@mui/material/colors';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin',],
  variable: '--font-poppins',
  weight: ['400', '700']
});

export const themeOptions: { light: object, dark: object } = {
  light: {
    palette: {
      mode: "light",
      // menu: {
      //   main: "#3A173F",
      // },
      text: {
        primary: "#020D19",
        main: "#020D19",

      },
      primary: {
        default: "#53c28b",
        main: "#53c28b",
      },
      secondary: {
        default: "#020D19",
        main: "#020D19",
      },
      background: {
        default: "#F9F9F9",
        paper: "#F9F9F9",
      },
    },
    typography: {
      fontFamily: [poppins, 'Tahoma', "Urbanist", "Roboto", "Arial", 'sans-serif'],
      // color: 'secondary',
    },
    props: {
      MuiAppBar: {
        color: "#F9F9F9",
      },
    },
  },
  dark: {
    palette: {
      mode: "dark",
      // menu: {
      //   main: "#3A173F",
      // },
      text: {
        primary: "#FFFAFA",
      },
      primary: {
        default: "#53c28b",
        main: "#53c28b",
      },  
      secondary: {
        main: "#FFFAFA",
      },
      background: {
        default: "#1A1A1A",
        paper: "#020D19",
      },
      white: {
        main: "#FFFAFA",
      }
    },
    typography: {
      fontFamily: [poppins, 'Tahoma', "Urbanist", "Roboto", "Arial", 'sans-serif'],
      // fontSize: 16,
    },
    props: {
      MuiAppBar: {
        color: "#1A1A1A",
      },
    },
  },
};

const theme = {
  palette: {
    primary: {
      main: '#007bff',
      light: '#c5e1fc',
      dark: '#0056b3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#673ab7',
      light: '#e1bee2',
      dark: '#3700b3',
      contrastText: '#fff'
    },
    error: {
      main: '#f44336',
      light: '#e71c3e',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff'
    },
    text: {
      primary: '#1a212b',
      secondary: '#969696',
      disabled: '#bdbdbd'
    }
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'],
    h1: {
      fontSize: [24, 24 + 10 * 1.5],
      fontWeight: 500,
      lineHeight: [1.6, 1.6]
    },
    h2: {
      fontSize: [20, 20 + 10 * 1.5],
      fontWeight: 500,
      lineHeight: [1.6, 1.6]
    },
    h3: {
      fontSize: [16, 16 + 10 * 1.5],
      fontWeight: 500,
      lineHeight: [1.5, 1.5]
    },
    body1: {
      fontSize: [14, 16 + 10 * 1.5],
      lineHeight: [1.5, 1.5],
      fontWeight: 400
    },
    body2: {
      fontSize: [12, 14 + 10 * 1.5],
      lineHeight: [1.5, 1.5],
      fontWeight: 400
    },
    button: {
      fontSize: [14, 16 + 10 * 1.5],
      fontWeight: 500,
      lineHeight: [1.5, 1.5]
    },
    caption: {
      fontSize: [11, 13 + 10 * 1.5],
      lineHeight: [1.5, 1.5],
      fontWeight: 400
    },
    overline: {
      fontSize: [10, 12 + 10 * 1.5],
      lineHeight: [1.5, 1.5],
      fontWeight: 400
    }
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 6px rgba(0, 0, 0, 0.1)',
    '0 8px 12px rgba(0, 0, 0, 0.1)',
    '0 16px 24px rgba(0, 0, 0, 0.1)',
    '0 24px 36px rgba(0, 0, 0, 0.1)'
  ],
  spacing: (unit: number) => {
    const baseUnit = 8;
    return unit * baseUnit;
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
};
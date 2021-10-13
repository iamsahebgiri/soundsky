import { deepmerge } from "@mui/utils";
import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontWeightExtraBold?: number;
    fontFamilyCode?: string;
  }

  interface Typography {
    fontWeightExtraBold: number;
    fontFamilyCode: string;
  }
}

// TODO: enable this once types conflict is fixed
// declare module '@mui/material/Button' {
//   interface ButtonPropsVariantOverrides {
//     code: true;
//   }
// }

const defaultTheme = createTheme();

const indigo = {
  50: "#eef2ff",
  100: "#e0e7ff",
  200: "#c7d2fe",
  300: "#a5b4fc",
  400: "#818cf8",
  500: "#6366f1",
  600: "#4f46e5",
  main: "#4f46e5",
  700: "#4338ca",
  800: "#3730a3",
  900: "#312e81",
};

const grey = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
};

const systemFont = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const getMetaThemeColor = (mode: "light" | "dark") => {
  const themeColor = {
    light: grey[50],
    dark: grey[800],
  };
  return themeColor[mode];
};

export const getDesignTokens = (mode: "light" | "dark") =>
  ({
    palette: {
      primary: {
        ...indigo,
        ...(mode === "dark" && {
          main: indigo[400],
        }),
      },
      divider: mode === "dark" ? grey[700] : grey[200],
      primaryDark: grey,
      mode,
      ...(mode === "dark" && {
        background: {
          default: grey[900],
          paper: grey[900],
        },
      }),
      common: {
        black: "#1D1D1D",
      },
      ...(mode === "light" && {
        text: {
          primary: grey[900],
          secondary: grey[700],
        },
      }),
      ...(mode === "dark" && {
        text: {
          primary: "#fff",
          secondary: grey[500],
        },
      }),
      grey,
      error: {
        50: "#FFF0F1",
        100: "#FFDBDE",
        200: "#FFBDC2",
        300: "#FF99A2",
        400: "#FF7A86",
        500: "#FF505F",
        main: "#EB0014", // contrast 4.63:1
        600: "#EB0014",
        700: "#C70011",
        800: "#94000D",
        900: "#570007",
      },
      success: {
        50: "#E9FBF0",
        100: "#C6F6D9",
        200: "#9AEFBC",
        300: "#6AE79C",
        400: "#3EE07F",
        500: "#21CC66",
        600: "#1DB45A",
        ...(mode === "dark" && {
          main: "#1DB45A", // contrast 6.17:1 (blueDark.800)
        }),
        ...(mode === "light" && {
          main: "#1AA251", // contrast 3.31:1
        }),
        700: "#1AA251",
        800: "#178D46",
        900: "#0F5C2E",
      },
      warning: {
        50: "#FFF9EB",
        100: "#FFF4DB",
        200: "#FFEDC2",
        300: "#FFE4A3",
        400: "#FFD980",
        500: "#FCC419",
        600: "#FAB005",
        main: "#F1A204", // does not pass constrast ratio
        700: "#F1A204",
        800: "#DB9A00",
        900: "#8F6400",
      },
    },
    shape: {
      borderRadius: 6,
    },
    spacing: 10,
    typography: {
      fontFamily: ['"Inter"', ...systemFont].join(","),
      fontFamilyCode: [
        "Consolas",
        "Menlo",
        "Monaco",
        "Andale Mono",
        "Ubuntu Mono",
        "monospace",
      ].join(","),
      fontFamilySystem: systemFont.join(","),
      fontWeightExtraBold: 800,
      allVariants: {
        fontFeatureSettings: ['"cv02"', '"cv03"', '"cv04"', '"cv11"'].join(","),
      },
      h1: {
        fontFamily: ['"Inter"', ...systemFont].join(","),
        fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
        fontWeight: 800,
        lineHeight: 78 / 70,
        ...(mode === "light" && {
          color: grey[900],
        }),
      },
      h2: {
        fontFamily: ['"Inter"', ...systemFont].join(","),
        fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
        fontWeight: 800,
        lineHeight: 44 / 36,
        color: mode === "dark" ? grey[200] : grey[700],
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(36),
        lineHeight: 44 / 36,
        letterSpacing: 0,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(28),
        lineHeight: 42 / 28,
        letterSpacing: 0,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(24),
        lineHeight: 36 / 24,
        letterSpacing: 0,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 30 / 20,
        letterSpacing: 0,
      },
      button: {
        textTransform: "initial",
        fontWeight: 700,
        letterSpacing: 0,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(16), // 16px
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14), // 14px
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: "inline-block",
        fontSize: defaultTheme.typography.pxToRem(12), // 12px
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 700,
      },
    },
  } as ThemeOptions);

export function getThemedComponents(theme: Theme) {
  return {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          sizeLarge: {
            padding: "1rem 1.25rem",
            ...theme.typography.body1,
            lineHeight: 21 / 16,
            fontWeight: 700,
          },
          containedPrimary: {
            backgroundColor: theme.palette.primary[500],
            color: "#fff",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
        styleOverrides: {},
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[100],
          },
        },
      },
    },
  };
}

const darkTheme = createTheme(getDesignTokens("dark"));
export const brandingDarkTheme = deepmerge(
  darkTheme,
  getThemedComponents(darkTheme)
);

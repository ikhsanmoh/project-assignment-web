import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    neutral: {
      main: "#FFFFFF",
      light: "#7B8082",
      dark: "#42494D",
    },
    warning: {
      main: "#E6AB09",
      light: "#FFCB3B",
      dark: "#E66D00",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        colorPrimary: "#E6AB09",
        colorSuccess: "#42494D",
      },
    },
  },
});

import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/styles";

// Styles
import { theme } from "@styles/theme";
import "@styles/global.css";
import "@styles/vars.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

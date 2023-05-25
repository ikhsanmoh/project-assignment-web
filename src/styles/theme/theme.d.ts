import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    orange?: PaletteColorOptions;
    pink?: PaletteColorOptions;
    red?: PaletteColorOptions;
    green?: PaletteColorOptions;
  }
}

import { useMediaQuery } from "@mui/material";
import { theme } from "@styles/theme";

export const useScreen = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return {
    isDesktop,
  };
};

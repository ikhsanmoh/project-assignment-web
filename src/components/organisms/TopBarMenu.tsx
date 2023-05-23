import { MenuItem } from "@components/molecules";
import { Box, BoxProps } from "@mui/material";
import type { FC } from "react";

// Constatns
import { ROUTES } from "@constants/config";

export interface TopBarMenuProps extends BoxProps {}

export const TopBarMenu: FC<TopBarMenuProps> = (props) => {
  return (
    <Box display={"flex"} alignItems={"center"} textAlign={"center"} {...props}>
      {ROUTES.map((item, idx) => (
        <MenuItem
          key={idx}
          text={item.title}
          path={item.route}
          ml={idx !== 0 ? 4 : 0}
        />
      ))}
    </Box>
  );
};

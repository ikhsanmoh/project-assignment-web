import type { FC } from "react";
import type { BoxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";

export interface BadgeStatusProps extends BoxProps {
  label?: string;
  status?: number;
  size: number; // in pixel
  borderSize?: number; // in pixel
  badgeColor?: string;
}

export const BadgeStatus: FC<BadgeStatusProps> = (props) => {
  const { size, label, status, badgeColor, borderSize = 20, ...rest } = props;

  return (
    <Box
      minWidth={size}
      minHeight={size}
      borderRadius="50%"
      border="solid"
      borderColor={badgeColor ?? "primary.main"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      fontSize={24}
      sx={{ backgroundColor: "white", borderWidth: borderSize }}
      {...rest}
    >
      <Typography
        fontSize={50}
        textAlign="center"
        fontWeight={700}
        color={badgeColor ?? "primary"}
      >
        {status}
        <Typography fontSize={14} fontWeight={400} color="neutral.dark">
          {label}
        </Typography>
      </Typography>
    </Box>
  );
};

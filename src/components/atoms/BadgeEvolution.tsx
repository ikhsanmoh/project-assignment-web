import type { FC } from "react";
import type { BoxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";

export interface BadgeEvolutionProps extends BoxProps {
  title?: string;
  description?: string;
  size: number; // in pixel
  borderSize?: number; // in pixel
  badgeColor?: string;
}

export const BadgeEvolution: FC<BadgeEvolutionProps> = (props) => {
  const {
    size,
    title,
    description,
    badgeColor,
    borderSize = 8,
    ...rest
  } = props;

  return (
    <Box textAlign="center" {...rest}>
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
      >
        <Typography fontSize={20} fontWeight={400} color="neutral.dark">
          {description}
        </Typography>
      </Box>

      <Typography fontSize={20} fontWeight={700} color="neutral.dark" mt={4}>
        {title}
      </Typography>
    </Box>
  );
};

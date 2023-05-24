import type { FC } from "react";
import { Box, BoxProps, Button as ButtonMui, Typography } from "@mui/material";

export interface ButtonProps extends BoxProps {
  text: string;
  textColor: string;
  textSize?: string | number;
  textWeight?: string | number;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { text, textColor, textWeight, textSize, onClick, ...rest } = props;
  return (
    <Box {...rest}>
      <ButtonMui
        variant="contained"
        color="warning"
        size="large"
        onClick={() => onClick?.()}
      >
        <Typography
          color={textColor}
          fontWeight={textWeight}
          fontSize={textSize}
        >
          {text}
        </Typography>
      </ButtonMui>
    </Box>
  );
};

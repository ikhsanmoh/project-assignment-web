import type { FC } from "react";
import type { BoxProps } from "@mui/material";
import NextImage from "next/image";
import { Box } from "@mui/material";

export interface ImageProps extends BoxProps {
  src: string;
  alt: string;
  size: number; // in pixel
  bordered?: boolean;
}

export const Image: FC<ImageProps> = (props) => {
  const { src, alt, size, bordered, ...rest } = props;

  return (
    <Box
      maxWidth={size}
      border={bordered ? 0.5 : 0}
      borderColor="neutral.light"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      position="relative"
      sx={{
        "::before": {
          content: '""',
          display: "block",
          paddingTop: "100%",
        },
      }}
      {...rest}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <NextImage
          src={src ?? ""}
          alt={alt}
          style={{ position: "absolute" }}
          fill
        />
      </Box>
    </Box>
  );
};

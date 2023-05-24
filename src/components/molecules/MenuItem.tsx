import Link from "next/link";
import { Box, BoxProps, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { useRouter } from "next/router";

export interface MenuItemProps extends BoxProps {
  path: string;
  text: string;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { path, text, ...rest } = props;

  const router = useRouter();

  const isActive = useMemo(() => {
    const activepath = router.pathname;

    return activepath === path;
  }, [router.pathname, path]);

  return (
    <Box {...rest}>
      <Link href={path} style={{ textDecoration: "none" }}>
        <Typography
          color={isActive ? "warning.main" : "neutral.dark"}
          fontWeight={isActive ? "700" : "400"}
          fontSize={16}
        >
          {text}
        </Typography>
      </Link>
    </Box>
  );
};

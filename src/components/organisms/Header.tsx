import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import { TopBarMenu } from "@components/organisms/TopBarMenu";

export const Header = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <header>
      <Box component="header" display={"flex"} alignItems={"center"} py={2}>
        {isDesktop && (
          <Link href="/">
            <Image
              src={"/images/logo-pokemon.png"}
              width={167}
              height={59}
              alt="Logo Brand Img"
            />
          </Link>
        )}
        <TopBarMenu ml={isDesktop && 4} />
      </Box>
    </header>
  );
};

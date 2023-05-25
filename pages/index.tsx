import { NextPage } from "next";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography } from "@mui/material";

// Styles
import { theme } from "@styles/theme";

// Components
import { BaseLayout } from "@components/layouts";
import { FeaturedSection, PokemonList } from "@components/organisms";
import { PokemonModal } from "@components/molecules";

// Hooks
import { usePokemonModal, useScroll } from "src/hooks";

// Dummy
import { POKEMON_LIST } from "@constants/dummy";

const Home: NextPage = () => {
  const { t } = useTranslation();

  const { state: isModalVisible, handleCloseModal } = usePokemonModal();
  const { scrollTo, scrollToRef } = useScroll();

  return (
    <BaseLayout>
      <FeaturedSection goToPokemonSection={scrollTo} />

      <Box
        position="relative"
        sx={{ backgroundColor: theme.palette.warning.light }}
        py={10}
        ref={scrollToRef}
      >
        <Image
          src={"/images/featured-image-3.png"}
          width={300}
          height={250}
          alt="Featured Image 2"
          style={{ position: "absolute", left: 0, top: 0, zIndex: -1 }}
        />
        <Image
          src={"/images/featured-image-2.png"}
          width={300}
          height={250}
          alt="Featured Image 3"
          style={{ position: "absolute", right: 0, bottom: 0, zIndex: -1 }}
        />

        <Container maxWidth="lg">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="h1"
              fontSize={40}
              lineHeight="70px"
              fontWeight="700"
              color="neutral.dark"
            >
              PokèDex
            </Typography>
            <Typography
              variant="body1"
              fontSize={24}
              fontWeight="400"
              color="neutral.dark"
              mt="16px"
            >
              All Generation totaling 999999 Pokemon
            </Typography>
          </Box>

          <PokemonList data={POKEMON_LIST as any} mt={4} />
        </Container>
      </Box>

      <PokemonModal visible={isModalVisible} onClose={handleCloseModal} />
    </BaseLayout>
  );
};

export default Home;

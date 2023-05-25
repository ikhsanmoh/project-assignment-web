import type { GetPokemonDetailResponse } from "@services/api/api.types";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography } from "@mui/material";
import { getSlug } from "@utils/string-util";

// Styles
import { theme } from "@styles/theme";

// Components
import { BaseLayout } from "@components/layouts";
import { FeaturedSection, PokemonList } from "@components/organisms";
import { PokemonModal } from "@components/molecules";

// Hooks
import { usePokemonModal, useScroll } from "src/hooks";
import { usePokemons } from "@services/query/usePokemon";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<GetPokemonDetailResponse>(null);

  const { state, handleCloseModal } = usePokemonModal();
  const { scrollTo, scrollToRef } = useScroll();

  const { getPokemons, getPokemonDetail } = usePokemons();

  const pokemons = useMemo(() => data, [data]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPokemons({ limit: 15, offset: 0 });

        if (res.results.length) {
          const fetchPokemonsDataset = res.results.map(async (item) => {
            const slug = getSlug(item.url);

            return await getPokemonDetail(slug);
          });

          await Promise.all(fetchPokemonsDataset)
            .then((data) => setData(data))
            .catch((e) => console.log(e));
        }
      } catch (error) {
        console.log("err => ", error);
      }
    })();
  }, []);

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
          style={{ position: "absolute", left: 0, top: 0, zIndex: 1 }}
        />
        <Image
          src={"/images/featured-image-2.png"}
          width={300}
          height={250}
          alt="Featured Image 3"
          style={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }}
        />

        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            zIndex={1}
            position="relative"
          >
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

          {data && <PokemonList data={pokemons as any} mt={4} />}
        </Container>
      </Box>

      <PokemonModal visible={state.visible} onClose={handleCloseModal} />
    </BaseLayout>
  );
};

export default Home;

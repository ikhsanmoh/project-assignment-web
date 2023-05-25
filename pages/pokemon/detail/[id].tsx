import { FC, useEffect, useMemo, useState } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Stack, Typography } from "@mui/material";

// Icons
import { ArrowForward as IconArrowForward } from "@mui/icons-material";

// Components
import { BaseLayout } from "@components/layouts";
import { BadgeEvolution, BadgeStatus } from "@components/atoms";
import { CardPokemonDetail } from "@components/molecules";

// Hooks
import { usePokemons } from "@services/query/usePokemon";

const sliderStyle = {
  overflow: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "transparent transparent", // Change this to desired color
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent", // Change this to desired color
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
};

const DetailPokemon: FC = () => {
  const { t } = useTranslation();

  const [item, setItem] = useState(null);

  const { getPokemonDetail } = usePokemons();
  const router = useRouter();

  const { id } = router.query;

  const otherImages = useMemo(() => {
    const data = item?.sprites?.other;

    if (data) {
      return Object.entries(data).map((entry) => {
        const [name, url] = entry as any;

        return { name, url: url.front_default };
      });
    }

    return [];
  }, [item]);

  const stats = useMemo(() => item?.stats, [item]);

  // ? I am not sure where is the pokemon evolution data
  const evolutions = useMemo(() => [1, 2, 3, 4, 5, 4, 4, 5], [item]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPokemonDetail(id as string);

        console.log(res);
        setItem(res);
      } catch (error) {
        console.log("err => ", error);
      }
    })();
  }, []);

  return (
    <BaseLayout title="Pokemon">
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <CardPokemonDetail item={item} />

        {otherImages.length && (
          <Box mt={5}>
            <Typography fontSize={20} fontWeight={700} color="neutral.dark">
              Other Image :
            </Typography>

            <Stack
              direction="row"
              overflow="scroll"
              gap={3}
              mt={4}
              sx={sliderStyle}
            >
              {otherImages.map((item, idx) => (
                <NextImage
                  key={idx}
                  src={item.url}
                  alt={`Image ${item.name}`}
                  width={200}
                  height={200}
                />
              ))}
            </Stack>
          </Box>
        )}

        {stats && (
          <Box mt={5}>
            <Typography fontSize={20} fontWeight={700} color="neutral.dark">
              Stats :
            </Typography>

            <Stack
              direction="row"
              overflow="scroll"
              gap={3}
              mt={4}
              sx={sliderStyle}
            >
              {stats.map((item: any, idx: number) => (
                <BadgeStatus
                  key={idx}
                  size={140}
                  label={item?.stat?.name}
                  status={item?.base_stat}
                />
              ))}
            </Stack>
          </Box>
        )}

        {evolutions && (
          <Box mt={5}>
            <Typography fontSize={20} fontWeight={700} color="neutral.dark">
              Evolution :
            </Typography>

            <Stack
              divider={
                <IconArrowForward
                  sx={{ mt: 6, fontSize: 70, color: "#42494D" }}
                />
              }
              direction="row"
              overflow="scroll"
              gap={1}
              mt={4}
              sx={sliderStyle}
            >
              {evolutions.map((item: any, idx) => (
                <BadgeEvolution
                  key={idx}
                  size={140}
                  title="Pokemon evalution state 1 name"
                  description="Pokemon evalution state 1 image"
                />
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </BaseLayout>
  );
};

export default DetailPokemon;

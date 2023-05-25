import type { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

// Components
import { BaseLayout } from "@components/layouts";

const PokemonList: FC = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout title="Pokemon | List">
      <Container maxWidth="lg">
        <Typography>Pokemon Type List</Typography>
      </Container>
    </BaseLayout>
  );
};

export default PokemonList;

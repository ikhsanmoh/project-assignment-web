import type { FC } from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography } from "@mui/material";

// Components
import { BaseLayout } from "@components/layouts";

const DetailPokemon: FC = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout title="Pokemon">
      <Container maxWidth="lg">
        <Typography>Detail Pokemon</Typography>
      </Container>
    </BaseLayout>
  );
};

export default DetailPokemon;

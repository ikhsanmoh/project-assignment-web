import Image from "next/image";
import { Container, Box, Typography } from "@mui/material";

// Components
import { Button } from "@components/atoms";

export const FeaturedSection = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" position="relative" alignItems="center" height={768}>
        <Box maxWidth={534}>
          <Typography
            variant="h1"
            fontSize={52}
            lineHeight="78px"
            fontWeight="700"
            color="neutral.dark"
          >
            All the Pokémon data you&apos;ll ever need in one place!
          </Typography>
          <Typography
            variant="body1"
            fontSize={20}
            fontWeight="400"
            color="neutral.light"
            mt="16px"
          >
            Thousands of data compiled into one place Check PokèDex
          </Typography>
          <Button
            text="Check Pokédex"
            textColor="neutral.main"
            textWeight="700"
            textSize={20}
            mt={4}
          />
        </Box>
        <Image
          src={"/images/featured-image.jpg"}
          width={534}
          height={631}
          alt="Featured Image"
          style={{ position: "absolute", right: 0 }}
        />
      </Box>
    </Container>
  );
};

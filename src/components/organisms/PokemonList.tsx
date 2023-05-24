import { Box, Grid } from "@mui/material";
import type { BoxProps } from "@mui/material";
import type { FC } from "react";
import { CardItem, PokeItem } from "@components/molecules";

export interface PokemonListProps extends BoxProps {
  data: PokeItem[];
}

export const PokemonList: FC<PokemonListProps> = (props) => {
  const { data, ...rest } = props;
  return (
    <Box {...rest}>
      <Grid container rowSpacing={"50px"} columnSpacing={"92px"}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={8} md={4}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

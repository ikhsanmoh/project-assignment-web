import type { FC } from "react";
import { Box, Typography, Stack, List, ListItem } from "@mui/material";

// Components
import { BadgeType, Image } from "@components/atoms";

// Hooks
import { useScreen } from "src/hooks";

export interface CardPokemonDetailProps {
  item: any;
}

export const CardPokemonDetail: FC<CardPokemonDetailProps> = (props) => {
  const { item } = props;

  const { isDesktop } = useScreen();

  const renderDimension = () => {
    return (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={12}
      >
        <Typography
          className="transition-modal-description"
          fontWeight={700}
          fontSize={20}
          lineHeight="30px"
          color="neutral.dark"
        >
          Weight:
          <Typography
            component={"span"}
            fontWeight={400}
            fontSize={20}
            lineHeight="30px"
            ml={4}
            color="neutral.dark"
          >
            {item?.weight}
          </Typography>
        </Typography>

        <Typography
          className="transition-modal-description"
          fontWeight={700}
          fontSize={20}
          lineHeight="30px"
          color="neutral.dark"
        >
          Height:
          <Typography
            component={"span"}
            fontWeight={400}
            fontSize={20}
            lineHeight="30px"
            ml={4}
            color="neutral.dark"
          >
            {item?.height}
          </Typography>
        </Typography>
      </Stack>
    );
  };

  const renderAbilities = () => {
    return (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
        mt={2}
      >
        <Typography
          className="transition-modal-description"
          fontWeight={700}
          fontSize={20}
          lineHeight="30px"
          color="neutral.dark"
        >
          Abilities:
        </Typography>
        <List sx={{ pt: 0 }}>
          {item?.abilities.map((ability: any, idx: number) => (
            <ListItem key={idx} sx={{ pt: 0 }}>
              <Typography
                component={"span"}
                fontWeight={400}
                fontSize={20}
                lineHeight="30px"
                color="neutral.dark"
              >
                &#x2022; {ability?.ability?.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    );
  };

  const renderTypes = () => {
    return (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={12}
        mt={2}
      >
        <Typography
          className="transition-modal-description"
          fontWeight={700}
          fontSize={20}
          lineHeight="30px"
          color="neutral.dark"
        >
          Type:
        </Typography>
        <Stack direction="row" gap={"20px"}>
          {item?.types.map((type: any, idx: number) => (
            <BadgeType key={idx} label={type?.type?.name} type={type?.slot} />
          ))}
        </Stack>
      </Stack>
    );
  };

  return (
    <Box
      display="flex"
      flexDirection={isDesktop ? "row" : "column"}
      alignItems={isDesktop ? "start" : "center"}
      p={2}
    >
      <Box width={400}>
        <Image
          src={item?.sprites?.front_default ?? ""}
          alt="Image Pokemon"
          size={400}
        />
      </Box>
      <Box pt={3} ml={2}>
        <Typography
          fontWeight={700}
          fontSize={40}
          lineHeight="60px"
          color="neutral.dark"
          noWrap
        >
          {item?.name}
        </Typography>

        <Box mt={4}>
          {renderDimension()}

          {renderAbilities()}

          {renderTypes()}
        </Box>
      </Box>
    </Box>
  );
};

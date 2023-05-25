import type { FC } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

// Components
import { BadgeType } from "@components/atoms";
import { TYPE_LIST } from "@constants/dummy";

// Hooks
import { usePokemonModal } from "src/hooks";

export type PokeItem = {
  imageSrc?: string;
  title?: string;
  codeTag?: string;
  types?: string[];
};

export interface CardItemProps {
  item: any;
}

export const CardItem: FC<CardItemProps> = (props) => {
  const { item } = props;

  const { handleOpenModal } = usePokemonModal();

  const renderTypes = () => {
    return (
      <Stack direction="row" gap={1} flexWrap={"wrap"}>
        {TYPE_LIST.map((item: any, idx) => (
          <BadgeType key={idx} label={item.name} type={item.type} />
        ))}
      </Stack>
    );
  };

  return (
    <Card sx={{ minWidth: 275, borderRadius: 3 }}>
      <CardActionArea onClick={() => handleOpenModal({ name: "Pikacuu" })}>
        <Box sx={{ py: "25px", px: "10px" }}>
          <CardMedia>
            <Box width={275} height={275} position={"relative"}>
              <Image
                src={"/images/featured-image.jpg"}
                alt="Pokemon Image"
                style={{ position: "absolute" }}
                fill
              />
            </Box>
          </CardMedia>

          <CardContent>
            <Typography
              color="neutral.light"
              mt="10px"
              lineHeight={"20px"}
              fontSize={20}
              fontWeight={700}
            >
              #001
            </Typography>
            <Typography
              color="neutral.dark"
              my="10px"
              lineHeight={"60px"}
              fontSize={40}
              fontWeight={700}
            >
              Poke Name
            </Typography>

            {renderTypes()}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

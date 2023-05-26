import type { FC } from "react";
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
import { BadgeType, Image } from "@components/atoms";

// Hooks
import { usePokemonModal } from "src/hooks";
import { formatNumberWithZeros } from "@utils/string-util";

export interface CardItemProps {
  item: any;
}

export const CardItem: FC<CardItemProps> = (props) => {
  const { item } = props;

  const { handleOpenModal } = usePokemonModal();

  const renderTypes = () => {
    return (
      item?.types.length && (
        <Stack direction="row" gap={1} flexWrap={"wrap"}>
          {item?.types?.map((item: any, idx: number) => (
            <BadgeType
              key={idx}
              label={`Type ${item?.slot}`}
              type={item?.slot}
            />
          ))}
        </Stack>
      )
    );
  };

  return (
    <Card
      sx={{ minWidth: 275, borderRadius: 3, position: "relative", zIndex: 1 }}
    >
      <CardActionArea onClick={() => handleOpenModal(item)}>
        <Box sx={{ py: "25px", px: "10px" }}>
          <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              flex={1}
              src={item?.sprites?.front_default}
              alt="Pokemon Image"
              size={275}
            />
          </CardMedia>

          <CardContent>
            <Typography
              color="neutral.light"
              mt="10px"
              lineHeight={"20px"}
              fontSize={20}
              fontWeight={700}
            >
              {formatNumberWithZeros(item?.id ?? 0, 3)}
            </Typography>
            <Typography
              color="neutral.dark"
              my="10px"
              lineHeight={"60px"}
              fontSize={40}
              fontWeight={700}
            >
              {item?.name}
            </Typography>

            {renderTypes()}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

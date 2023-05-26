import type { FC } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  Fade,
  Modal,
  Backdrop,
} from "@mui/material";

// Icons
import { Close as IconClose } from "@mui/icons-material";

// Comopnents
import { BadgeType, Button, Image } from "@components/atoms";

// Hooks
import { usePokemonModal, useScreen } from "src/hooks";

// Styles
const cardStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  boxShadow: 24,
  borderRadius: 3,
};

export interface PokemonModalProps {
  visible: boolean;
  onClose: () => void;
}

export const PokemonModal: FC<PokemonModalProps> = (props) => {
  const { visible, onClose } = props;

  const { isDesktop } = useScreen();
  const router = useRouter();
  const { state } = usePokemonModal();
  const { item } = state;

  const seeDetail = () => {
    router.push(`/pokemon/detail/${item?.id}`);
    onClose();
  };

  const renderTitle = () => {
    return (
      <Typography
        id="transition-modal-title"
        fontWeight={700}
        fontSize={40}
        lineHeight="60px"
        color="neutral.dark"
        noWrap
      >
        {item?.name}
      </Typography>
    );
  };

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
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={visible}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={visible}>
        <Card sx={cardStyle}>
          <CardHeader
            action={
              <IconButton onClick={onClose}>
                <IconClose />
              </IconButton>
            }
          />

          <CardContent sx={{ pt: 0, px: "30px", pb: "40px" }}>
            <Box
              display="flex"
              flexDirection={isDesktop ? "row" : "column"}
              alignItems={isDesktop ? "start" : "center"}
            >
              <Box width={400}>
                <Image
                  src={item?.sprites?.front_default ?? ""}
                  alt="Image Pokemon"
                  size={400}
                />
              </Box>

              <Box pt={3} ml={2}>
                {renderTitle()}

                <Box mt={4}>
                  {renderDimension()}
                  {renderAbilities()}
                  {renderTypes()}

                  <Button
                    text="More Detail"
                    textColor="white"
                    mt={8}
                    onClick={seeDetail}
                  />
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

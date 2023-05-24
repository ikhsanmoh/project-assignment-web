import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

import { Circle as IconCircle, Close as IconClose } from "@mui/icons-material";
import { BadgeType, Button } from "@components/atoms";
import { TYPE_LIST } from "@constants/dummy";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface PokemonModalProps {
  visible: boolean;
  onOpen?: () => void;
  onClose: () => void;
}

export const PokemonModal: FC<PokemonModalProps> = (props) => {
  const { visible, onClose, onOpen } = props;

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
        Pokemon Name
      </Typography>
    );
  };

  const renderContent = () => {
    return (
      <Stack mt={2}>
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
              9999
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
              999
            </Typography>
          </Typography>
        </Stack>

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
            <ListItem sx={{ pt: 0 }}>
              <Typography
                component={"span"}
                fontWeight={400}
                fontSize={20}
                lineHeight="30px"
                color="neutral.dark"
              >
                &#x2022; Abilities 1
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component={"span"}
                fontWeight={400}
                fontSize={20}
                lineHeight="30px"
                color="neutral.dark"
              >
                &#x2022; Abilities 2
              </Typography>
            </ListItem>
          </List>
        </Stack>

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
            {TYPE_LIST.map((item: any, idx) => (
              <BadgeType key={idx} label={item.name} type={item.type} />
            ))}
          </Stack>
        </Stack>

        <Button text="More Detail" textColor="white" mt={8} />
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
        <Card
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 400,
            boxShadow: 24,
            borderRadius: 3,
          }}
        >
          <CardHeader
            action={
              <IconButton onClick={onClose}>
                <IconClose />
              </IconButton>
            }
          />

          <CardContent sx={{ pt: 0, px: "30px", pb: "40px" }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              columnGap="26px"
            >
              <Box
                width={400}
                height={400}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ backgroundColor: "lightgray" }}
              >
                Pokemon Images Placeholder
              </Box>
              <Box maxWidth="666px">
                {renderTitle()}

                {renderContent()}
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

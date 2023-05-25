import { Chip } from "@mui/material";
import type { FC } from "react";

export interface BadgeTypeProps {
  label: string;
  type: number;
}

export const BadgeType: FC<BadgeTypeProps> = (props) => {
  const { label, type } = props;

  const color: any =
    type === 1
      ? "primary"
      : type === 2
      ? "success"
      : type === 3
      ? "waring"
      : type === 4
      ? "info"
      : "default";

  return (
    <Chip
      label={label}
      color={color}
      sx={{
        width: "108px",
        fontSize: 20,
        lineHeight: 17,
        fontWeight: 700,
      }}
    />
  );
};

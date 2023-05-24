import { Chip } from "@mui/material";
import type { FC } from "react";

export interface BadgeTypeProps {
  label: string;
  type: "one" | "two" | "three" | "four";
}

export const BadgeType: FC<BadgeTypeProps> = (props) => {
  const { label, type } = props;

  const color: any =
    type === "one"
      ? "primary"
      : type === "two"
      ? "success"
      : type === "three"
      ? "waring"
      : "info";

  return (
    <Chip
      label={label}
      color="default"
      sx={{
        width: "108px",
        fontSize: 20,
        lineHeight: 17,
        fontWeight: 700,
      }}
    />
  );
};

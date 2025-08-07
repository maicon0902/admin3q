"use client";
import React from "react";
import "./EvoButton.scss";
import { Button, ButtonProps, ConfigProvider } from "antd";

declare const ButtonTypes: readonly [
  "default",
  "primary",
  "secondary",
  "grey",
  "dangerous"
];
type ButtonType = (typeof ButtonTypes)[number];

type EvoButtonProps = Omit<ButtonProps, "className" | "type"> &
  {
    className?: string;
    type?: ButtonType;
  };

const EvoButton: React.FC<EvoButtonProps> = ({
  className = "",
  type = "",
  ...buttonProps
}) => {
  const addSelectorByType = () => {
    switch (type) {
      case "default":
        return "evo-default-button";
      case "primary":
        return "evo-primary-button";
      case "secondary":
        return "evo-secondary-button";
      case "grey":
        return "evo-grey-button";
      case "dangerous":
        return "evo-dangerous-button";
      default:
        return "evo-primary-button";
    }
  };

  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
      <Button
        className={`evo-button ${className} ${addSelectorByType}`}
        {...buttonProps}
      />
    </ConfigProvider>
  );
};

export default React.memo(EvoButton);

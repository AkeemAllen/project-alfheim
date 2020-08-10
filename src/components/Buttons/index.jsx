import React from "react";
import { NormalButton } from "./NormalButtons";
import { OutlineButton } from "./OutlineButton";
import { TextButton } from "./TextButton";

const Button = ({
  text,
  variant,
  onClick,
  disabled,
  style,
  color,
  darkerColor,
}) => {
  return (
    <div style={style}>
      {variant === "Outlined" ? (
        <OutlineButton
          text={text}
          onClick={onClick}
          disabled={disabled}
          color={color}
          darkerColor={darkerColor}
        />
      ) : null}
      {variant === "Text" ? (
        <TextButton
          text={text}
          onClick={onClick}
          disabled={disabled}
          color={color}
          darkerColor={darkerColor}
        />
      ) : null}
      {variant === "" ? (
        <NormalButton
          text={text}
          onClick={onClick}
          disabled={disabled}
          color={color}
          darkerColor={darkerColor}
        />
      ) : null}
    </div>
  );
};

export default Button;

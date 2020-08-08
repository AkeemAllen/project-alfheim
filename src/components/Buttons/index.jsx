import React from "react";
import { NormalButton } from "./NormalButtons";
import { OutlineButton } from "./OutlineButton";
import { TextButton } from "./TextButton";

const Button = ({ text, variant, onClick, disabled }) => {
  return (
    <div>
      {variant === "Outlined" ? (
        <OutlineButton text={text} onClick={onClick} disabled={disabled} />
      ) : null}
      {variant === "Text" ? (
        <TextButton text={text} onClick={onClick} disabled={disabled} />
      ) : null}
      {variant === "" ? (
        <NormalButton text={text} onClick={onClick} disabled={disabled} />
      ) : null}
    </div>
  );
};

export default Button;

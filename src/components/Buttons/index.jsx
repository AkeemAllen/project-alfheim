import React from "react";
import { NormalButton } from "./NormalButtons";
import { OutlineButton } from "./OutlineButton";
import { TextButton } from "./TextButton";

const Button = ({ text, variant, onClick }) => {
  return (
    <div>
      {variant === "Outlined" ? <OutlineButton text={text} /> : null}
      {variant === "Text" ? <TextButton text={text} /> : null}
      {variant === "" ? <NormalButton text={text} onClick={onClick} /> : null}
    </div>
  );
};

export default Button;

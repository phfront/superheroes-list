import { KeyboardEventHandler } from "react";
import "./styles.scss";

type Props = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  handleKeyUp: (key: string) => void;
};

const Input = ({ placeholder, value, setValue, handleKeyUp }: Props) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onKeyUp={(e) => handleKeyUp(e.key)}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;

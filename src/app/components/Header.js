import React from "react";
import Button from "../utils/Button";

const Header = () => {
  return (
    <div className="flex gap-4">
      <Button name="Home" src="/" />
      <Button name="Cli" src="/cli" />
      <Button name="About Me" src="/am" />
      <Button name="Side Project" src="/sp" />
    </div>
  );
};

export default Header;

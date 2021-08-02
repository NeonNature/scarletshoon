import React, { useCallback, useState } from "react";
import { HeaderContainer, HeaderTitle } from "./ui";
import MenuToggle from "../Menubar/MenuToggle";
import Menubar from "../Menubar/Menubar";

type HeaderProps = {
  onClickContact: () => void;
  onClickAbout: () => void;
  onClickCommission: () => void;
  onClickArt: () => void;
};
const Header = ({ onClickContact, onClickAbout, onClickArt, onClickCommission }: HeaderProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onSetToggleMenu = useCallback(
    (value) => setToggleMenu(value),
    [setToggleMenu]
  );
  return (
    <HeaderContainer>
      <HeaderTitle>Scarlet Shoon</HeaderTitle>
      <MenuToggle toggleMenu={toggleMenu} setToggleMenu={onSetToggleMenu} />
      <Menubar
        toggleMenu={toggleMenu}
        onClickContact={onClickContact}
        onClickAbout={onClickAbout}
        onClickCommission={onClickCommission}
        onClickArt={onClickArt}
      />
    </HeaderContainer>
  );
};

export default Header;

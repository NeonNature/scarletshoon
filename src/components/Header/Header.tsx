import React, { useCallback, useMemo, useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderSvgWrapper,
  HeaderSvgRect,
} from "./ui";
import MenuToggle from "../Menubar/MenuToggle";
import Menubar from "../Menubar/Menubar";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onSetToggleMenu = useCallback(
    (value) => setToggleMenu(value),
    [setToggleMenu]
  );
  return (
    <HeaderContainer>
      {/*<HeaderSvgWrapper>*/}
        {/*<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">*/}
        {/*  <HeaderSvgRect height="60" width="320" />*/}
          <HeaderTitle>Scarlet Shoon</HeaderTitle>
        {/*</svg>*/}
      {/*</HeaderSvgWrapper>*/}
      <MenuToggle toggleMenu={toggleMenu} setToggleMenu={onSetToggleMenu} />
      <Menubar toggleMenu={toggleMenu} />
    </HeaderContainer>
  );
};

export default Header;

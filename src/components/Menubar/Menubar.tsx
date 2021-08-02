import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MenubarContainer, MenubarList, MenuList } from "./ui";

type MenubarProps = {
  toggleMenu: boolean;
  onClickContact: () => void;
  onClickAbout: () => void;
  onClickArt: () => void;
  onClickCommission: () => void;
};

const Menubar = ({
  toggleMenu,
  onClickContact,
  onClickAbout,
  onClickArt,
  onClickCommission,
}: MenubarProps) => {
  const history = useHistory();
  const onNavigate = useCallback((route) => history.push(route), [history]);
  return (
    <MenubarContainer toggleMenu={toggleMenu}>
      <MenubarList onClick={onClickArt}>
        <MenuList>Artworks</MenuList>{" "}
      </MenubarList>
      <MenubarList onClick={onClickCommission}>
        {" "}
        <MenuList>Commission</MenuList>{" "}
      </MenubarList>
      <MenubarList onClick={onClickAbout}>
        {" "}
        <MenuList>About</MenuList>{" "}
      </MenubarList>
      <MenubarList onClick={onClickContact}>
        {" "}
        <MenuList>Contact</MenuList>{" "}
      </MenubarList>
    </MenubarContainer>
  );
};

export default Menubar;

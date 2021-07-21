import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MenubarContainer, MenubarList, MenuList } from "./ui";

type MenubarProps = {
  toggleMenu: boolean;
};

const Menubar = ({ toggleMenu }: MenubarProps) => {
  const history = useHistory();
  const onNavigate = useCallback((route) => history.push(route), [history]);
  return (
    <MenubarContainer toggleMenu={toggleMenu}>
      <MenubarList onClick={() => onNavigate("/")}>
        <MenuList>Artworks</MenuList>{" "}
      </MenubarList>
      <MenubarList onClick={() => onNavigate("/commission")}>
        {" "}
        <MenuList>Commission</MenuList>{" "}
      </MenubarList>
      <MenubarList onClick={() => onNavigate("/About")}>
        {" "}
        <MenuList>About</MenuList>{" "}
      </MenubarList>
    </MenubarContainer>
  );
};

export default Menubar;

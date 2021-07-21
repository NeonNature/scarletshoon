import React, { useCallback, useMemo, useState } from "react";
import { MenuToggleContainer } from "./ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

type MenuToggleProps = {
	toggleMenu: boolean;
	setToggleMenu: (value: boolean) => void;
}
const MenuToggle = ({ toggleMenu, setToggleMenu }: MenuToggleProps) => {
  return (
    <MenuToggleContainer>
      <FontAwesomeIcon icon={toggleMenu ? faTimes : faBars} onClick={() => setToggleMenu(!toggleMenu)} />
    </MenuToggleContainer>
  );
};

export default MenuToggle;

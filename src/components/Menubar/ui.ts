import styled from "styled-components";

export const MenuToggleContainer = styled.div`
  cursor: pointer;
  color: #fff;
  align-items: center;
  width: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

type MenubarContainerProps = {
	toggleMenu: boolean;
}

export const MenubarContainer = styled.div<MenubarContainerProps>`
  position: absolute;
  right: 25px;
  top: 40px;
  z-index: 9;

  height: ${props => props.toggleMenu ? "300px": "0"};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  width: 250px;
`;

export const MenubarList = styled.div`
  background-color: #ffffff4D;
  padding: 5px 15px;
  margin: 17px 5px;
  cursor: pointer;
`;

export const MenuList = styled.div`
  color: #000;
  padding: 2px 15px;
  margin: 1px 15px;
  background-color: #fff;
  border: 1px solid #000;

  border-radius: 5px;
`;

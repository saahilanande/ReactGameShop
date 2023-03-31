import { Avatar } from "@chakra-ui/avatar";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from "@chakra-ui/react";

import logo from "../assets/avatar.jpg";

function AvatarMenu() {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar size={"sm"} src={logo} />
        </MenuButton>
        <MenuList>
          <MenuItem>Link 1</MenuItem>
          <MenuItem>Link 2</MenuItem>
          <MenuDivider />
          <MenuItem>Link 3</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default AvatarMenu;

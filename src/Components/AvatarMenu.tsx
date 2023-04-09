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
          <MenuItem><a href="https://www.linkedin.com/in/saahilpralhad/">linkedin</a></MenuItem>
          <MenuItem><a href="https://saahilanande.netlify.app/">portfolio</a></MenuItem>
          <MenuDivider />
          <MenuItem>Saahilanande21@gmail.com</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default AvatarMenu;

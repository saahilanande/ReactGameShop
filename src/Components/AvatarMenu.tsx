import { Avatar } from "@chakra-ui/avatar";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
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
          <MenuItem>
            <Link href="https://www.linkedin.com/in/saahilanande/" isExternal>
              linkedin
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="https://saahilanande.netlify.app/" isExternal>
              portfolio
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Link href="https://github.com/saahilanande" isExternal>
              GitHub
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default AvatarMenu;

import { Box, Center, HStack, Img, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import AvatarMenu from "./AvatarMenu";
import ModeSwitcher from "./ModeSwitcher";
import SearchTextBox from "./SearchTextBox";

function Navbar() {
  return (
    <>
      <HStack spacing="13px" marginLeft={5} marginRight={5}>
        <Img src={logo} boxSize={"60px"} padding={1}></Img>
        <Center flex={"auto 100"}>
          <SearchTextBox />
        </Center>
        <Spacer />
        <ModeSwitcher />
        <AvatarMenu />
      </HStack>
    </>
  );
}

export default Navbar;

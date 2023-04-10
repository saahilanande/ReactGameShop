import { Center, HStack, Img, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import AvatarMenu from "./AvatarMenu";
import ModeSwitcher from "./ModeSwitcher";
import SearchTextBox from "./SearchTextBox";

interface props {
  handleSearch: (search: string) => void;
  resetFilter: () => void;
}

function Navbar({ handleSearch, resetFilter }: props) {
  return (
    <>
      <HStack spacing="13px" marginLeft={5} marginRight={5}>
        <Img
          _hover={{ cursor: "pointer" }}
          src={logo}
          boxSize={"60px"}
          padding={1}
          onClick={() => resetFilter()}
        ></Img>
        <Center flex={"auto 100"}>
          <SearchTextBox onSearch={handleSearch} />
        </Center>
        <Spacer />
        <ModeSwitcher />
        <AvatarMenu />
      </HStack>
    </>
  );
}

export default Navbar;

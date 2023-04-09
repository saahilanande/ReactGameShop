import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
function SearchTextBox() {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="blackAlpha.600" />}
        />
        <Input
          placeholder="search..."
          borderRadius={25}
          variant={"filled"}
          _hover={{ bg: "teal.700" }}
        />
      </InputGroup>
    </>
  );
}

export default SearchTextBox;

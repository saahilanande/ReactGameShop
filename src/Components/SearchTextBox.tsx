import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
function SearchTextBox() {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="blackAlpha.600" marginTop={2} />}
        />
        <Input
          placeholder="search..."
          size={"lg"}
          focusBorderColor="blackAlpha.800"
          borderRadius={25}
          borderColor={"blackAlpha.600"}
          borderWidth={3}
        />
      </InputGroup>
    </>
  );
}

export default SearchTextBox;

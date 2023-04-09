import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";

interface props {
  onSearch: (search: string) => void;
}

function SearchTextBox({ onSearch }: props) {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (searchRef.current != null) {
      onSearch(searchRef.current.value);
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="blackAlpha.600" />}
          />
          <Input
            ref={searchRef}
            placeholder="search..."
            borderRadius={25}
            variant={"filled"}
            _hover={{ bg: "#C53030" }}
          />
        </InputGroup>
      </form>
    </>
  );
}

export default SearchTextBox;

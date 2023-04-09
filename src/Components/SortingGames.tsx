import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

function SortingGames() {
  const orderList = [
    { value: "name", label: "Name" },
    { value: "released", label: "Release Date" },
    { value: "added", label: "Date Added" },
    { value: "created", label: "Release Date" },
    { value: "updated", label: "Update Date" },
    { value: "rating", label: "Popularity" },
  ];

  return (
    <>
      <Menu preventOverflow={true}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Order by: Relevance
        </MenuButton>
        <MenuList>
          {orderList.map((data) => (
            <MenuItem value={data.value}>{data.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default SortingGames;

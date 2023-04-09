import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface props {
  onSortClick: (selectedOrder: string) => void;
  sortedOrder: string;
}

function SortingGames({ onSortClick, sortedOrder }: props) {
  const orderList = [
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "-created", label: "Release Date" },
    { value: "-updated", label: "Update Date" },
    { value: "-rating", label: "Popularity" },
  ];

  const currentSorting = orderList.find((data) => data.value === sortedOrder);

  return (
    <>
      <Menu preventOverflow={true}>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _hover={{ bg: "#C53030" }}
        >
          Order by: {currentSorting?.label || "Relevance"}
        </MenuButton>
        <MenuList _hover={{ bg: "#C53030" }}>
          {orderList.map((data) => (
            <MenuItem
              key={data.value}
              onClick={() => onSortClick(data.value)}
              value={data.value}
            >
              {data.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default SortingGames;

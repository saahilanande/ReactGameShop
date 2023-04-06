import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SkeletonText,
} from "@chakra-ui/react";
import useFetchPlatforms from "../Hooks/useFetchPlatform";
import { Platforms } from "../Hooks/useFetchGame";

interface props {
  onFilterItemClick: (Platform: Platforms) => void;
  platformInfoProp: Platforms | null;
}

function PlatfromFilter({ onFilterItemClick, platformInfoProp }: props) {
  const { platformInfo, platformError, isloading } = useFetchPlatforms();

  return (
    <>
      {isloading && <SkeletonText />}
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Platform
        </MenuButton>
        <MenuList>
          {platformInfo.map((data) => (
            <MenuItem
              key={data.id}
              onClick={() => {
                onFilterItemClick(data);
              }}
            >
              {data.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatfromFilter;

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SkeletonText,
} from "@chakra-ui/react";
import useFetchPlatforms, { Platforms } from "../Hooks/useFetchPlatform";

interface props {
  onFilterItemClick: (Platform: Platforms) => void;
  platformInfoProp: Platforms | null;
}

function PlatfromFilter({ onFilterItemClick, platformInfoProp }: props) {
  const { platformInfo, platformError, isloading } = useFetchPlatforms();

  if (platformError) return null;

  return (
    <>
      {isloading && <SkeletonText />}
      <Menu preventOverflow={true}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {platformInfoProp?.name || "Platform"}
        </MenuButton>
        <MenuList>
          {platformInfo.map((data) => (
            <MenuItem
              key={data.id}
              onClick={() => {
                onFilterItemClick(data);
              }}
            >
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={data.image_background}
                alt=""
                mr="12px"
              ></Image>
              {data.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatfromFilter;

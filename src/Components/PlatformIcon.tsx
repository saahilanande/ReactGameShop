import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { Platforms } from "../Hooks/useFetchGame";

interface props {
  platformIcon: Platforms[];
}

function PlatformIcon({ platformIcon }: props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox360: FaXbox,
    playstation5: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    "nintendo-switch": SiNintendoswitch,
  };

  return (
    <>
      {platformIcon.map(
        (data) =>
          iconMap[data.slug] && (
            <Icon
              key={data.id}
              marginInline={0.5}
              as={iconMap[data.slug]}
            ></Icon>
          )
      )}
    </>
  );
}

export default PlatformIcon;

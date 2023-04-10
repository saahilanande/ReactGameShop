import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import { Platforms } from "../Hooks/useFetchGame";
import CriticBadge from "./CriticBadge";
import TotalDownloads from "./TotalDownloads";
import CropImage from "../Services/Url-Client";
import EmojiRating from "./EmojiRating";
import GameModal from "./GameModal";

interface props {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  added: number;
  platforms: { platform: Platforms }[];
  rating_top: number;
  released: string;
}

function GameCard({
  rating_top,
  name,
  background_image,
  platforms,
  metacritic,
  added,
  released,
}: props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        onClick={onOpen}
        maxW={"sm"}
        margin={3}
        borderRadius={"xl"}
        _hover={{ bg: "#C53030", cursor: "pointer" }}
      >
        <Image
          src={CropImage(background_image)}
          alt=""
          borderTopRadius={"xl"}
        ></Image>
        <CardBody>
          <HStack flex={"wrap"} marginBottom={1}>
            <PlatformIcon platformIcon={platforms.map((p) => p.platform)} />
            <Spacer />
            <CriticBadge rating={metacritic} />
          </HStack>
          <Heading
            size="sm"
            textTransform="uppercase"
            marginBottom={2}
            fontFamily={"sans-serif"}
          >
            {name} <EmojiRating rating={rating_top} />
          </Heading>
          <TotalDownloads downloads={added} />
        </CardBody>
      </Card>
      <GameModal
        released={released}
        topRating={rating_top}
        critScore={metacritic}
        gameName={name}
        isOpen={isOpen}
        onClose={onClose}
        imageBack={background_image}
      />
    </>
  );
}

export default GameCard;

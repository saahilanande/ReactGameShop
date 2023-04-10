import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import { Platforms } from "../Hooks/useFetchGame";
import CriticBadge from "./CriticBadge";
import TotalDownloads from "./TotalDownloads";
import CropImage from "../Services/Url-Client";
import EmojiRating from "./EmojiRating";

interface props {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  added: number;
  platforms: { platform: Platforms }[];
  rating_top: number;
}

function GameCard({
  rating_top,
  name,
  background_image,
  platforms,
  metacritic,
  added,
}: props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        onClick={onOpen}
        maxW={"sm"}
        margin={3}
        borderRadius={"xl"}
        _hover={{ bg: "#C53030" }}
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

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{name}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GameCard;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  HStack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { Platforms } from "../Hooks/useFetchPlatform";
import CriticBadge from "./CriticBadge";

interface props {
  gameName: string;
  onClose: () => void;
  isOpen: boolean;
  imageBack: string;
  released: string;
  topRating: number;
  critScore: number;
}

function GameModal({
  gameName,
  onClose,
  isOpen,
  imageBack,
  released,
  topRating,
  critScore,
}: props) {
  return (
    <>
      <Modal size={"2xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"sans-serif"}>{gameName}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Image src={imageBack}></Image>

            <HStack spacing={2} padding={3}>
              <Text fontFamily={"sans-serif"}>Release date:</Text>
              <Spacer />
              <Text as={"b"} fontFamily={"sans-serif"}>
                {released}
              </Text>
            </HStack>

            <HStack spacing={2} padding={3}>
              <Text fontFamily={"sans-serif"}>Chart:</Text>
              <Spacer />
              <Text as={"b"} fontFamily={"sans-serif"}>
                #{topRating} Top 2023
              </Text>
            </HStack>
            <HStack spacing={2} padding={3}>
              <Text fontFamily={"sans-serif"}>Critic Score</Text>
              <Spacer />
              <CriticBadge rating={critScore} />
            </HStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={1}>
              <Button onClick={onClose}>Close</Button>
              <Button bg="#C53030">BUY</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GameModal;

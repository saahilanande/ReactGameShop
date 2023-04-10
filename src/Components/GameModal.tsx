import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  CardProps,
} from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

interface props {
  gameName: string;
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
  children: CardProps;
}

function GameModal({ gameName, onClose, isOpen, onOpen }: props) {
  return (
    <>
      <Button onClick={onOpen}></Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{gameName}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GameModal;

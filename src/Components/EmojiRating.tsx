import { Image, ImageProps } from "@chakra-ui/react";
import bulleye from "../assets/Emojis/bulls-eye.webp";
import thumbsup from "../assets/Emojis/thumbs-up.webp";
import meh from "../assets/Emojis/meh.webp";

interface props {
  rating: number;
}

function EmojiRating({ rating }: props) {
  const imageItems: { [key: number]: ImageProps } = {
    5: { src: bulleye, alt: "bulleye", boxSize: "30px" },
    4: { src: thumbsup, alt: "thumbsup", boxSize: "20px" },
    3: { src: meh, alt: "meh", boxSize: "20px" },
  };

  if (rating < 3) return null;

  return <Image {...imageItems[rating]} />;
}

export default EmojiRating;

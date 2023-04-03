import { Badge } from "@chakra-ui/react";

interface props {
  rating: number;
}

function CriticBadge({ rating }: props) {
  return <Badge colorScheme={rating > 75 ? "green" : "yellow"}>{rating}</Badge>;
}

export default CriticBadge;

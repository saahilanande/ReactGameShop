import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

interface props {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platforms }[];
}

function GameCard({ id, name, background_image, platforms }: props) {
  return (
    <>
      <Card maxW={"sm"} margin={3}>
        <Image src={background_image} alt=""></Image>
        <CardBody>
          <PlatformIcon platformIcon={platforms.map((p) => p.platform)} />
          <Heading size="sm" textTransform="uppercase">
            {name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;

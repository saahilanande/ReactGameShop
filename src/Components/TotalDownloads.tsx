import { AddIcon } from "@chakra-ui/icons";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";

interface props {
  downloads: number;
}

function TotalDownloads({ downloads }: props) {
  return (
    <Tag size={"sm"} variant="subtle" colorScheme="gray">
      <TagLeftIcon boxSize="10px" as={AddIcon} />
      <TagLabel>{downloads}</TagLabel>
    </Tag>
  );
}

export default TotalDownloads;

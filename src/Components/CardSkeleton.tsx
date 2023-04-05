import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function CardSkeleton() {
  return (
    <Card width={"200px"} margin={3} borderRadius={"xl"}>
      <Skeleton height={"180px"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default CardSkeleton;

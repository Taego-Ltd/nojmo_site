import { Text, Heading, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function Features({
  userimage = "images/img_noun_candidate_6250717.svg",
  dreamcandidate = "Dream Candidate",
  nojmo = "Nojmo customizes candidate searches to find your ideal match.",
  ...props
}) {
  return (
    <Flex
      {...props}
      gap="20px"
      borderColor="neutral.200"
      borderWidth="1px"
      borderStyle="solid"
      bg="neutral.50"
      w="100%"
      flexDirection="column"
      alignItems="center"
      px="20px"
      py={{ base: "20px", sm: "32px" }}
      borderRadius="14px"
    >
      <Image src={userimage} h="60px" w="16%" />
      <Flex mb="28px" gap="8px" alignSelf="stretch" flexDirection="column" alignItems="center" justifyContent="center">
        <Heading size="heading_h5_semibold_desktop" as="h4" color="neutral.800">
          {dreamcandidate}
        </Heading>
        <Text
          size="paragraph_large_regular"
          color="neutral.600"
          textAlign="center"
          alignSelf="stretch"
          lineHeight="28px"
        >
          {nojmo}
        </Text>
      </Flex>
    </Flex>
  );
}

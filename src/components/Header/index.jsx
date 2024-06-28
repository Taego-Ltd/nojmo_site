import { Button, Link, Text, UnorderedList, ListItem, Image, Container, Flex } from "@chakra-ui/react";
import React from "react";

export default function Header({ ...props }) {
  return (
    <Flex {...props} justifyContent="center" alignItems="center" py={{ base: "20px", sm: "22px" }} as="header">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        px="0px"
        flexDirection={{ base: "column", sm: "row" }}
        p={{ md: "", base: "20px" }}
      >
        <Image src="images/img_header_logo.png" h="30px" w="74px" fit="contain" />
        <UnorderedList styleType="none" gap="40px" display="flex" flexWrap="wrap">
          <ListItem>
            <Link href="#">
              <Text size="paragraph_large_regular" color="neutral.800">
                Features
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Text size="paragraph_large_regular" color="neutral.800">
                How it works
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Text size="paragraph_large_regular" color="neutral.800">
                Pricing
              </Text>
            </Link>
          </ListItem>
        </UnorderedList>
        <Button
          colorScheme="neutral_900"
          fontWeight={500}
          minW="148px"
          borderRadius="24px"
          px={{ base: "20px", sm: "" }}
        >
          Get started
        </Button>
      </Container>
    </Flex>
  );
}

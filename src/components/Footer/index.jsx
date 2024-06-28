import { Link, Text, UnorderedList, ListItem, Heading, Flex, IconButton, Image, Container } from "@chakra-ui/react";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <Flex
      {...props}
      as="footer"
      bg="black.900"
      justifyContent="center"
      alignItems="start"
      py={{ md: "50px", base: "20px" }}
    >
      <Container mb="30px" display="flex" justifyContent="center" px="0px" p={{ md: "", base: "20px" }}>
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="start"
          gap="20px"
          flexDirection={{ md: "row", base: "column" }}
        >
          <Flex gap="34px" flexDirection="column" alignItems="start">
            <Image
              src="images/img_footer_logo.png"
              h="30px"
              mt="12px"
              ml={{ md: "10px", base: "0px" }}
              w="74px"
              fit="contain"
            />
            <Flex gap="14px">
              <IconButton
                size="sm"
                icon={<Image src="images/img_frame.svg" />}
                aria-label="178:870-Social Icon"
                w="48px"
                borderRadius="24px"
              />
              <IconButton
                size="sm"
                icon={<Image src="images/img_frame_black_900.svg" />}
                aria-label="178:872-Social Icon Black"
                w="48px"
                borderRadius="24px"
              />
              <IconButton
                size="sm"
                icon={<Image src="images/img_frame_black_900_48x48.svg" />}
                aria-label="178:874-Social Icon Large"
                w="48px"
                borderRadius="24px"
              />
              <IconButton
                size="sm"
                icon={<Image src="images/img_frame_48x48.svg" />}
                aria-label="178:876-Social Icon Small"
                w="48px"
                borderRadius="24px"
              />
            </Flex>
          </Flex>
          <Flex
            w={{ md: "62%", base: "100%" }}
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex gap="14px" alignSelf={{ md: "start", base: "auto" }} flexDirection="column">
              <Heading as="h5">Product</Heading>
              <UnorderedList styleType="none" gap="14px" display="flex" flexDirection="column">
                <ListItem>
                  <Link href="Features" target="_blank" rel="noreferrer">
                    <Text>Features</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="Pricing" target="_blank" rel="noreferrer">
                    <Text>Pricing</Text>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex gap="14px" flexDirection="column">
              <Heading as="h5">Company</Heading>
              <UnorderedList styleType="none" gap="14px" display="flex" flexDirection="column">
                <ListItem>
                  <Link href="#">
                    <Text>About Us</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="Contact" target="_blank" rel="noreferrer">
                    <Text>Contact</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="Careers" target="_blank" rel="noreferrer">
                    <Text>Careers</Text>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex gap="14px" flexDirection="column" alignItems="center">
              <Heading as="h5">Resources</Heading>
              <UnorderedList styleType="none" gap="14px" display="flex" flexDirection="column" alignItems="center">
                <ListItem>
                  <Link href="#" alignSelf="start">
                    <Text>Help center</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Text>Terms of use</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Text>Privacy policy</Text>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

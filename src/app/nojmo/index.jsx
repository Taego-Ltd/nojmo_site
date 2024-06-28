import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  Button,
  Input,
  Flex,
  TabPanels,
  TabPanel,
  Box,
  TabList,
  Tab,
  Tabs,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  {
    frameNumber: "1",
    postTitle: "Post your job",
    postDescription:
      "Quickly create and publish detailed job listings with our intuitive tools, reaching a broad audience to attract the right candidates.",
  },
  {
    frameNumber: "2",
    postTitle: "Match with Qualified Candidates",
    postDescription:
      "Automatically connect with candidates who best match your job requirements, reducing time spent on manual screening.",
  },
  {
    frameNumber: "3",
    postTitle: "Seamless Applicant Tracking",
    postDescription:
      "Effortlessly manage and track candidate applications through every stage of the hiring process with our Kanban system.",
  },
];

export default function NojmoPage() {
  return (
    <Box bg="neutral.50" w="100%">
      {/* header section */}
      <Header />
      <Flex mt="36px" gap={{ md: "80px", base: "40px", sm: "60px" }} flexDirection="column" alignItems="center">
        {/* hero section */}
        <Container px="0px" p={{ md: "", base: "20px" }}>
          <Flex
            mr={{ md: "52px", base: "0px" }}
            gap="40px"
            alignItems="center"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex gap="40px" flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
              <Flex gap="20px" alignSelf="stretch" flexDirection="column" alignItems="start" justifyContent="center">
                <Heading size="headings" as="h1" color="neutral.800" mt="4px" letterSpacing="0.52px">
                  <Heading size="headings" as="span" color="neutral.800">
                    Discover your next&nbsp;
                  </Heading>
                  <Heading size="headings" as="span" color="teal.500">
                    Job.
                  </Heading>
                </Heading>
                <Heading size="heading_h6_medium_desktop" color="neutral.700" alignSelf="stretch" lineHeight="28px">
                Revolutionize Your Recruitment: Nojmo — Where Bullshit Stops and Pure Talent Begins! Say Goodbye to LinkedIn Noise and Hello to Tailored Excellence.
                </Heading>
              </Flex>
              <Button
                colorScheme="neutral_900"
                fontWeight={500}
                minW="316px"
                borderRadius="24px"
                px={{ base: "20px", sm: "" }}
              >
                Join the wait list
              </Button>
            </Flex>
            <Image
              src="images/img_header_3_1.png"
              h="572px"
              w={{ md: "572px", base: "100%" }}
              fit="cover"
              borderRadius="12px"
            />
          </Flex>
        </Container>
        <Tabs variant="unstyled" as={Flex} alignSelf="stretch" display="flex" flexDirection="column">
          <Container
            mb="180px"
            gap={{ md: "180px", base: "90px", sm: "135px" }}
            display="flex"
            flexDirection="column"
            px={{ base: "20px", sm: "40px" }}
            p={{ md: "", base: "20px" }}
          >
            {/* features section */}
            <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column">
              <Flex
                gap="24px"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mx={{ md: "298px", base: "0px" }}
              >
                <Flex bg="teal.500" p="10px" borderRadius="12px">
                  <Text size="textxs" color="neutral.50" letterSpacing="-0.40px">
                    Features
                  </Text>
                </Flex>
                <Heading size="headingxs" color="neutral.800" letterSpacing="0.44px">
                  Empowering Your Job Search
                </Heading>
              </Flex>
              <SimpleGrid gap="40px" rowGap="30px" columns={{ md: 3, base: 1, sm: 2 }} justifyContent="center">
                <Features
                  userimage="images/img_noun_candidate_6250717.svg"
                  dreamcandidate="Dream Candidate"
                  nojmo="Nojmo customizes candidate searches to find your ideal match."
                />
                <Features
                  userimage="images/img_noun_candidate_6250717.svg"
                  dreamcandidate="Application Management"
                  nojmo="Nojmo provides real time updates on your application progress at every stage."
                />
                <Features
                  userimage="images/img_noun_candidate_6250717.svg"
                  dreamcandidate="Candidate Management"
                  nojmo="Nojmo streamlines recruitment by connecting you directly with candidates who match your qualifications."
                />
                <Features
                  userimage="images/img_noun_candidate_6250717.svg"
                  dreamcandidate="Application Management"
                  nojmo="Nojmo provides real time updates on your application progress at every stage."
                />
                <Features
                  userimage="images/img_noun_candidate_6250717.svg"
                  dreamcandidate="Precise Recommendation"
                  nojmo="Nojmo analyzes candidate qualifications and matches them with companies seeking precisely those qualifications.."
                />
                <Features
                  userimage="images/img_noun_candidate_6250717.svg"
                  dreamcandidate="Pay Transparancy"
                  nojmo="Nojmo recommends optimal salaries for candidates and companies based on market and qualification analysis.."
                />
              </SimpleGrid>
            </Flex>

            {/* trusted companies section */}
            {/* <Flex
              gap={{ base: "30px", sm: "60px" }}
              flexDirection="column"
              alignItems="center"
              mx={{ md: "138px", base: "0px" }}
            >
              <Flex>
                <Heading size="headingxs" as="h3" color="neutral.800" mt="10px" letterSpacing="0.44px">
                  Trusted by teams at
                </Heading>
              </Flex>
              <TabList
                gap={{ md: "98px", base: "20px" }}
                display="flex"
                alignItems="end"
                flexWrap="wrap"
                px="10px"
                py="8px"
              >
                <Tab
                  color="neutral.600"
                  mt="4px"
                  letterSpacing="-0.48px"
                  fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                  fontWeight={600}
                  w="100%"
                >
                  Company logo
                </Tab>
                <Tab
                  color="neutral.600"
                  letterSpacing="-0.48px"
                  fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                  fontWeight={600}
                  w="100%"
                >
                  Company logo
                </Tab>
                <Tab
                  color="neutral.600"
                  letterSpacing="-0.48px"
                  fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                  fontWeight={600}
                  w="100%"
                >
                  Company logo
                </Tab>
                <Tab
                  color="neutral.600"
                  letterSpacing="-0.48px"
                  fontSize={{ md: "24px", base: "24px", sm: "22px" }}
                  fontWeight={600}
                  w="100%"
                >
                  Company logo
                </Tab>
              </TabList>
            </Flex> */}
            <TabPanels display="flex" mx={{ md: "34px", base: "0px" }}>
              {[...Array(4)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} w="100%">
                  <Box>
                    {/* how it works section */}
                    <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column" alignItems="center">
                      <Flex gap="40px" w={{ md: "40%", base: "100%" }} flexDirection="column" alignItems="center">
                        <Flex
                          gap="24px"
                          alignSelf="stretch"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Button
                            colorScheme="teal_500"
                            letterSpacing="-0.40px"
                            minW="166px"
                            borderRadius="12px"
                            px={{ base: "20px", sm: "" }}
                          >
                            How it works
                          </Button>
                          <Heading size="headingxs" as="h4" color="neutral.800" letterSpacing="0.44px">
                            Get set up in minutes
                          </Heading>
                        </Flex>
                        <Flex bg="neutral.900" flexWrap="wrap" mx={{ md: "48px", base: "0px" }} borderRadius="30px">
                          <Heading size="paragraph_large_medium" as="h5" px={{ md: "46px", base: "20px" }} py="14px">
                            Job seeker
                          </Heading>
                          <Heading
                            size="paragraph_large_medium"
                            as="h6"
                            alignSelf="end"
                            px={{ md: "46px", base: "20px" }}
                            py="14px"
                          >
                            Employer
                          </Heading>
                        </Flex>
                      </Flex>
                      <Flex
                        alignSelf="stretch"
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                        flexDirection={{ md: "row", base: "column" }}
                      >
                        <Image
                          src="images/img_post_job.png"
                          h="422px"
                          w={{ md: "58%", base: "100%" }}
                          fit="cover"
                          borderRadius="18px"
                        />
                        <Flex
                          ml={{ md: "100px", base: "0px" }}
                          gap="54px"
                          w={{ md: "40%", base: "100%" }}
                          flexDirection="column"
                        >
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                              <Flex
                                key={"landingList" + index}
                                gap="18px"
                                bg="teal.500"
                                flex={1}
                                alignItems="start"
                                p="14px"
                                borderRadius="18px"
                                flexDirection={{ base: "column", sm: "row" }}
                              >
                                <Heading
                                  as="h5"
                                  h="40px"
                                  color="teal.500"
                                  bg="generic.white"
                                  w="40px"
                                  justifyContent="center"
                                  display="flex"
                                  alignItems="center"
                                  textAlign="center"
                                  borderRadius="20px"
                                  p={{ base: "20px", sm: "" }}
                                >
                                  {d.frameNumber}
                                </Heading>
                                <Flex
                                  gap="12px"
                                  flex={1}
                                  flexDirection="column"
                                  alignItems="start"
                                  justifyContent="center"
                                  alignSelf="stretch"
                                >
                                  <Heading as="h5">{d.postTitle}</Heading>
                                  <Text size="paragraph_large_regular" alignSelf="stretch" lineHeight="28px">
                                    {d.postDescription}
                                  </Text>
                                </Flex>
                              </Flex>
                            ))}
                          </Suspense>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>

            {/* wait list section */}
            <Flex gap={{ base: "30px", sm: "60px" }} flexDirection="column" mx={{ md: "258px", base: "0px" }}>
              <Flex gap="24px" flexDirection="column" alignItems="center" justifyContent="center">
                <Button
                  colorScheme="teal_500"
                  letterSpacing="-0.40px"
                  minW="118px"
                  borderRadius="12px"
                  px={{ base: "20px", sm: "" }}
                >
                  Wait list
                </Button>
                <Heading size="headingxs" as="h1" color="neutral.800" letterSpacing="0.44px">
                  Join our wait list for early access{" "}
                </Heading>
              </Flex>
              <Tabs
                variant="custombackground"
                as={Flex}
                gap="24px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                mx={{ md: "102px", base: "0px" }}
              >
                <TabList
                  gap="6px"
                  display="flex"
                  bg="neutral.900"
                  flexWrap="wrap"
                  p="4px"
                  mx={{ md: "74px", base: "0px" }}
                  borderRadius="30px"
                >
                  <Tab
                    color="generic.white"
                    fontSize="18px"
                    fontWeight={500}
                    px={{ base: "20px", sm: "40px" }}
                    py="14px"
                  >
                    Job seeker
                  </Tab>
                  <Tab
                    color="generic.white"
                    fontSize="18px"
                    fontWeight={500}
                    alignSelf="end"
                    px={{ base: "20px", sm: "40px" }}
                    py="14px"
                  >
                    Employer
                  </Tab>
                </TabList>
                <TabPanels display="flex">
                  {[...Array(2)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} w="100%">
                      <Box alignSelf="stretch">
                        <Flex gap="40px" flexDirection="column">
                          <Flex gap="30px" flexDirection="column">
                            <Input placeholder={`Full name`} type="text" />
                            <Input placeholder={`Email address`} type="email" />
                          </Flex>
                          <Button
                            colorScheme="neutral_900"
                            fontWeight={500}
                            w="100%"
                            borderRadius="24px"
                            px={{ base: "20px", sm: "" }}
                          >
                            Join waitlist
                          </Button>
                        </Flex>
                      </Box>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Flex>
          </Container>
        </Tabs>
      </Flex>

      {/* footer section */}
      <Footer />
    </Box>
  );
}

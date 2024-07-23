import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am Ali Shahroze!";
const bio1 = "A Frontend Developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground 
    backgroundColor="#2A4365"
  >
    <Avatar src="https://mir-s3-cdn-cf.behance.net/user/276/bfe0c7174137547.65f8e214b6cec.jpg"size='2xl'/>
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

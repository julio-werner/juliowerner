import NextLink from "next/link";

import {
  IconButton,
  Heading,
  Flex,
  Spacer,
  Box,
  Portal,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Animation from "@/components/animation";
import Opacity from "@/components/opacity";

export default function Nav(props) {
  return (
    <>
      <Animation>
        <Flex
          as="header"
          m={6}
          mb={12}
          alignItems="center"
          justify="space-around"
        >
          <Spacer />
          <Heading
            as="h1"
            bgGradient="linear(to-r, pallete.600,pallete.200)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="bold"
          >
            {props.children}
          </Heading>
          <Spacer />
        </Flex>
      </Animation>
      <Portal>
        <Opacity>
          <Box
            display={{ base: "none", md: "block" }}
            pos="fixed"
            top={8}
            ml={12}
          >
            <NextLink href={props.backLink}>
              <IconButton
                variant="outline"
                colorScheme="pallete"
                icon={<ArrowBackIcon />}
              />
            </NextLink>
          </Box>
          <Box
            display={{ base: "block", md: "none" }}
            pos="fixed"
            bottom={8}
            ml={12}
          >
            <NextLink href={props.backLink}>
              <Box>
                <IconButton
                  size="lg"
                  colorScheme="pallete"
                  icon={<ArrowBackIcon />}
                  isRound
                />
              </Box>
            </NextLink>
          </Box>
        </Opacity>
      </Portal>
    </>
  );
}
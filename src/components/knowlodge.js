import {
  Image,
  Progress,
  SimpleGrid,
  Box,
  useColorModeValue,
  IconButton,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function Knowlodge(props) {
  return (
    <Box
      alignItems="center"
      bg={useColorModeValue("white", "gray.700")}
      rounded={"md"}
      boxShadow={"xl"}
      p={4}
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-15px)",
        boxShadow: "2xl",
      }}
    >
      <SimpleGrid templateColumns="1fr 2fr" alignItems="center">
        <Image
          borderRadius={props.radius}
          justifySelf="left"
          src={props.image}
          h="64px"
          maxW="100px"
        />

        <Stack>
          <Progress
            colorScheme="pallete"
            rounded={8}
            w="100%"
            value={props.value}
          />
          <Stack direction="row" spacing={2} align="center">
            {props.icon}
            <Text>{props.text}</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
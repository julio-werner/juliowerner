import Head from "next/head";
import Layout from "@/components/layout";
import Animation from "@/components/animation";
import { Box, Center } from "@chakra-ui/react";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>{props.title} | Júlio Werner</title>
      </Head>
      <Center>
        <Box
          mb={{ base: 32, md: 0 }}
          w={{ base: "90vw", lg: "85vw", xl: "60vw" }}
          maxW="100%"
        >
          <Layout>{props.title} </Layout>

          <Animation>{props.children}</Animation>
        </Box>
      </Center>
    </>
  );
}

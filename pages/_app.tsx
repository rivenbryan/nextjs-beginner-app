import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Head>
        <title>NextJS News App</title>
        <meta name="description" content="Beginner Crash Course" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Box>
  );
}

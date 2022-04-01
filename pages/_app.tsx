import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import theme from 'theme';
import Fonts from 'components/Fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Foodawaa</title>
        <meta name="description" content="Best place to buy food" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Aquatico.otf" as="font" crossOrigin="" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

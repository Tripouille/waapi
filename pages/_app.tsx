import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import theme from 'theme';
import Fonts from 'components/Fonts';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );

  return (
    <>
      <Head>
        <title>Foodawaa</title>
        <meta name="description" content="Best place to buy food" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Aquatico.otf" as="font" crossOrigin="" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Fonts />
          <Layout>
            <Hydrate
              state={pageProps.dehydratedState ? JSON.parse(pageProps.dehydratedState) : null}
            >
              <Component {...pageProps} />
            </Hydrate>
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

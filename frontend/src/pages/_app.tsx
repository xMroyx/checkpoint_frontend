import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/graphql/client";
import Header from "@/components/Header";

const client = createApolloClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });

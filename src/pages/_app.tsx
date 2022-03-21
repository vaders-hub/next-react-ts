import App, { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { wrapper } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import Layout from "../components/layout";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  store: any;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (Component.getLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <Layout home>
        <Component {...pageProps} />
      </Layout>
    );
  }
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(MyApp);

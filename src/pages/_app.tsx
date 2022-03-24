import type { NextPage } from "next";
import App, { AppContext, AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import withRedux from "next-redux-wrapper";
import { wrapper } from "../store";
import { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { IntlProvider } from "react-intl";
import Layout from "@/components/layout";
import { useLangSet } from "src/lib/stateUtils";
import "../styles/globals.css";

import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  store: any;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [message, selectedLang, setMessageData] = useLangSet();

  useEffect(() => {
    setMessageData();
  }, [selectedLang]);

  const myCustomErrorFunction = (err: any) => {
    if (err.code === "MISSING_TRANSLATION") {
      return;
    }
    throw err;
  };

  if (Component.getLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(
      <IntlProvider
        locale={selectedLang}
        messages={message}
        onError={myCustomErrorFunction}
      >
        <Component {...pageProps} />
      </IntlProvider>
    );
  } else {
    return (
      <IntlProvider
        locale={selectedLang}
        messages={message}
        onError={myCustomErrorFunction}
      >
        <Layout home>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    );
  }
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(MyApp);

import App, { AppContext, AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import withRedux from "next-redux-wrapper";
import { wrapper } from "../store";
import { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { IntlProvider } from "react-intl";
import Layout from "@/components/layout";
import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

type StateTypes = {
  lang: { selectedLang: string };
};

type MessageType = {
  default?: { keys: string };
};

interface GetJson {
  [key: string]: () => Promise<Record<string, unknown>>;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  store: any;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const selectedLang: string = useSelector(
    (state: StateTypes) => state.lang.selectedLang
  );
  const [message, setMessage] = useState({});
  const messageLoader: GetJson = {
    en: () => import("src/assets/lang/en.json"),
    fr: () => import("src/assets/lang/fr.json"),
    de: () => import("src/assets/lang/ar.json"),
  };
  const setMessageData = async () => {
    try {
      const result = await messageLoader[selectedLang]();
      setMessage(result);
    } catch (e) {
      console.log("error", e);
    }
  };

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

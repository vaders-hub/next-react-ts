import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const usePrevious = (value: number): any => {
  const ref: any = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useShape = (): any => {
  const [shape, setShape] = useState("square");
  const [dimension, setDimension]: any = useState({
    width: 100,
    height: 100,
  });

  useEffect(() => {
    const { height, width } = dimension;

    setShape(height === width ? "square" : "react");
    return () => {
      console.log("unmount useShape");
    };
  }, [dimension, dimension.height, dimension.width]);

  return [shape, setDimension];
};

type StateTypes = {
  lang: { selectedLang: string };
};

interface GetJson {
  [key: string]: () => Promise<Record<string, unknown>>;
}

// interface GetLang {
//   message: Record<string, unknown>;
//   selectedLang: string;
//   setMessageData: () => Promise<Record<string, unknown>>;
// }

const useLangSet = (): any => {
  const selectedLang: string = useSelector(
    (state: StateTypes) => state.lang.selectedLang
  );
  const [message, setMessage] = useState({});
  const messageLoader: GetJson = {
    en: () => import("src/assets/lang/en.json"),
    fr: () => import("src/assets/lang/fr.json"),
    de: () => import("src/assets/lang/de.json"),
  };
  const setMessageData = async () => {
    try {
      const result = await messageLoader[selectedLang]();
      setMessage(result);
    } catch (e) {
      console.log("error", e);
    }
  };

  return [message, selectedLang, setMessageData];
};

export { usePrevious, useLangSet };

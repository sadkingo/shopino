import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const deviceColorMode =
    window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? "dark"
      : "light";
  const [colorMode, setColorMode] = useLocalStorage("theme", deviceColorMode);

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    if (colorMode === "dark") {
      bodyClass.add(className);
      bodyClass.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
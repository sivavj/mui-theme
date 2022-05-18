import { createTheme, Theme } from "@mui/material";
import React, {
  PropsWithChildren,
  FC,
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";
import baseTheme from "./defaultTheme";
import { deepmerge } from "@mui/utils";
import { useLocalStorage } from "usehooks-ts";

type CustomThemeContextType = {
  theme: Theme;
  updateTheme: (themeValue: any) => void;
};

const CustomThemeContext = createContext<CustomThemeContextType>({
  theme: createTheme({}),
  updateTheme: () => {},
});

export const useCustomThemeContext = () => useContext(CustomThemeContext);

export const CustomThemeContextProvider: FC<PropsWithChildren<{}>> = (
  props
) => {
  // const [custTheme, setCustTheme] = useLocalStorage('cust-theme', "")
  const [newTheme, setNewTheme] = useState(baseTheme);

  // useEffect(()=>{
  //     if(custTheme !== ''){
  //         let myTheme = JSON.parse(custTheme);
  //         setNewTheme(myTheme);
  //     }
  // },[])

  const updateTheme = (themeValue: any) => {
    console.log("updating theme...");
    const mergedTheme = deepmerge(newTheme, themeValue);
    const finalTheme = createTheme(mergedTheme);
    setNewTheme(finalTheme);
    // setCustTheme(JSON.stringify(finalTheme))
  };

  return (
    <>
      {/* <pre>{`${JSON.stringify(newTheme, undefined,2)}`}</pre> */}
      <CustomThemeContext.Provider
        value={{ theme: newTheme, updateTheme: updateTheme }}
      >
        {props.children}
      </CustomThemeContext.Provider>
    </>
  );
};

import "../src/App.css";
import { ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveNavBar";
import Router from "./components/router";
import ScrollToTop from "./components/ScrollTop";
import { useCustomThemeContext } from "./components/theme-builder/ThemeContext";
import { ThemeBuilder } from "./components/theme-builder/ThemeBuilder";
import NavBarDrawer from "./components/NavBar/NavBarDrawer";
import MiniNavBarDrawer from "./components/NavBar/MiniNavBarDrawer";

// var renderCount = 1;

export default function App() {

  const { theme } = useCustomThemeContext();

  // renderCount++;
  return (
    <>
      {/* {renderCount} */}
      <ThemeBuilder />
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        {/* <NavBarDrawer/> */}
        {/* <MiniNavBarDrawer/> */}
        <Router />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

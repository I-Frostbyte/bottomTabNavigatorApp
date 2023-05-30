import { NativeBaseProvider, extendTheme } from "native-base";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainRouter from "./src/navigation";

const newColorTheme = {
  primary: {
    400: "#4ea24e",
    500: "#228b22",
  },
  secondary: {
    500: "#d3d3d3",
  },
  error: {
    500: '#F23839',
  },
};
const theme =  extendTheme({colors: newColorTheme})

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <MainRouter />
    </NativeBaseProvider>
  )
}

export default App;
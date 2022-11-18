import "./App.css";
import { Tasks } from "./components/Tasks";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  return (
    <>
      <ChakraProvider>
        <Tasks />
      </ChakraProvider>
      <GlobalStyles />
    </>
  );
}

export default App;

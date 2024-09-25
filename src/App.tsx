import Home from "./pages/Home";
import React from "react";
import { ThemeProvider } from "./context/theme/theme";
function App() {
  return (
    <>
    <ThemeProvider>
    <Home />
    </ThemeProvider>
    </>
  );
}

export default App;

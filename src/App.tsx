import Home from "./pages/Home";
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

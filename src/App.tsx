import Home from "./pages/Home";
import { ThemeProvider } from "./context/theme/theme";
import { useTheme } from "./context/theme/theme";

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : "light"}`}>
      <Home />
    </div>
  );
}

export default App;

//LIBRARIES
import { ThemeProvider } from "styled-components";
// ASSETS
import { GlobaleStyles } from "./Assets/GlobalCss";
import { lightMode } from "./Assets/Colors";
// PAGES
import { Home } from "./Pages";



function App() {
  return (
   <ThemeProvider theme={lightMode()} >
   <GlobaleStyles />
   <Home />
   </ThemeProvider>
  );
}

export default App;

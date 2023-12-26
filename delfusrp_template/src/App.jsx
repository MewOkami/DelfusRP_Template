import { RouterMain } from "./routes/RoutesMain";
import { GlobalStyles } from "./styles/GlobalStyle";
import { Reset } from "./styles/Reset";

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles />
      <RouterMain />
    </div>
  );
}

export default App;

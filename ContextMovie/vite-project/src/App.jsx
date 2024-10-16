import "./App.css";
import { MovieContextProvider } from "./Component/ContextApi/Context";
import ShowMovie from "./Component/ShowMovie";

function App() {
  return (
    <>
      <MovieContextProvider>
        <ShowMovie />
      </MovieContextProvider>
    </>
  );
}

export default App;

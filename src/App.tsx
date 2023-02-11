import Filter from "./components/filter/Filter";
import Games from "./components/games/Games";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <Games />
    </div>
  );
};

export default App;

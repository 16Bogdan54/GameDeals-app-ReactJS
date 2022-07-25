import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sales from "./components/sales/Sales";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sales />
      <Footer />
    </div>
  );
}

export default App;

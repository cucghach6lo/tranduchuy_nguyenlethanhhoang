import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="Gradient">
          <Header />
          <Hero />
        </div>
        <div className="white-gradient" />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;

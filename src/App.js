import "./App.css";
import Hero from "./components/Hero/Hero";
import JoinUs from "./components/JoinUs/JoinUs";
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <JoinUs/>
    </div>
    );
}

export default App;
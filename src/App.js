import "./App.css";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
// import JoinUs from "./components/JoinUs/JoinUs";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans/>
    </div>
  );
}

export default App;

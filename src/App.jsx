import { React } from "react";
import "./App.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Header />
      <Timeline />
      <Projects />
      <Skills />
      <Publications />
    </div>
  );
}

export default App;

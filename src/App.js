import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

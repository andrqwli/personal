import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Research from './components/Research';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Experience />
      <Research />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

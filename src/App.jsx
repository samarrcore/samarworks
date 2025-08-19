
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-background min-h-screen text-primary" style={{fontFamily: "'Inter', system-ui, sans-serif", scrollBehavior: 'smooth'}}>
      <Navbar />
      <main className="relative">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

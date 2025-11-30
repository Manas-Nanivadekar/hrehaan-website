import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Talks from "./components/Talks";
import Socials from "./components/Socials";
import './globals.css';

export default function Home() {
  return (
    <main className="poppins-regular flex min-h-screen flex-col">
      <Navbar />
       <div className="container mt-24 mx-auto px-12 py-4">
       <Hero /> 
       <Socials />
       <About />
       <Projects />
       <Work />
       <Talks />
       <Footer />
       </div>
    </main>
  );
}

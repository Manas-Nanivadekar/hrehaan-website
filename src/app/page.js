import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WritingResearch from "./components/WritingResearch";
import IBResources from "./components/IBResources";
import Videos from "./components/Videos";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
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
       <WritingResearch />
       <IBResources />
       <Videos />
       <Blog />
       <Resume />
       <Footer />
       </div>
    </main>
  );
}

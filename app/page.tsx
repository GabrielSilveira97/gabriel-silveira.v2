"use client"
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";

const Home = () =>  {
  return (
    <main className="px-28 flex flex-col gap-32">
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  );
}
export default Home
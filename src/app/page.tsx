
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";


export default function page() {
  return (
    <div>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
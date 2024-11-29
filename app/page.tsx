import About from "./components/sections/About";
import Experience from "./components/sections/Experience";

export default function Home() {
  return (
    <main className="px-28 flex flex-col gap-32">
      <div>
        <h3 className="green">Ola, meu nome é</h3>
        <h1 className="title">Gabriel Silveira.</h1>
        <h2 className="sub-title">Eu construo coisas pra web.</h2>
        <p className="texts">
          Sou um engenheiro de software especializado em construir (e ocasionalmente projetar) experiências digitais excepcionais. 
        </p>
      </div>
      <About/>
      <Experience/>
    </main>
  );
}

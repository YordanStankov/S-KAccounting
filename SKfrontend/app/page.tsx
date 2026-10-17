import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Partners from "./components/home/Partners";
import ClientTypes from "./components/home/ClientTypes";
import About from "./components/home/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Partners />
      <ClientTypes />
      <About />
    </>
  );
}

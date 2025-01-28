
import HeroBanner from "./components/heroBanner";
import Header from "./components/header";
import Services from "./components/services";
import About from "./components/about";
import ClientForm from './components/form'

export default function Home() {
  return (
    <>
        <Header />
        <HeroBanner />
        <Services />
        <About />
        <ClientForm />
    </>
  );
}

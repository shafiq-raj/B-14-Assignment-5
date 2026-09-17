import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnologies } from "./types/technologiesType";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";

const technologiesFetch = async (): Promise<Itechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Nav />
      <Banner />
            
      <Suspense fallback={<h2>Loading........</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

import { Suspense } from "react";
import { Hero } from "./assets/component/hero";
import { Nav } from "./assets/component/nav";
import { Technologies } from "./assets/component/technologies/technologies";

function App() {
  const technologiesPromise = (async () => {
    const response = await fetch("/data.json");

    if (!response.ok) {
      throw new Error("Failed to fetch technologies");
    }

    const data = await response.json();

    return data;
  })();

  return (
    <>
      <Nav />

      <Hero />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
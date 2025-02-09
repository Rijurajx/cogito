import Image from "next/image";
import { SpotlightBlock } from "./components/blocks/spotlight-block";
import { Navbar } from "./components/blocks/navbar";
export default function Home() {
  return (
    <>
      <Navbar />      
      <SpotlightBlock />
    </>
  );
}

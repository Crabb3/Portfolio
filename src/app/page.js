import Image from "next/image";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Work from "./components/Work";
import Highlight from "./components/Highlight";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Intro />
      <Highlight />
      <Education />
      {/*<Work />*/}
    </div>
  );
}

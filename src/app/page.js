import Image from "next/image";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Project from "./components/Project";
import Work from "./components/Work";
import Highlight from "./components/Highlight";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-2/3 bg-white relative m-auto p-4">
      <Header />
      <Intro />
      <Highlight />
      <Education />
      <Work />
      <Project />
    </div>
  );
}

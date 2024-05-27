import Image from "next/image";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Project from "./components/Project";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="w-2/3 bg-white relative m-auto p-4">
      <Intro />
      <Education />
      <Work />
      <Project />
    </div>
  );
}

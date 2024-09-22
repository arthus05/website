import Default from "@/layout/Default";

import { Hero } from "./containers/Hero";
import { Background } from "./containers/Background";
import { Projects } from "./containers/Projects";
import { Experience } from "./containers/Experience";

const Home = () => {
  return (
    <Default>
      <Hero />
      {/* <Background /> */}
      {/* <Experience /> */}
      {/* <Projects /> */}
    </Default>
  );
};

export default Home;

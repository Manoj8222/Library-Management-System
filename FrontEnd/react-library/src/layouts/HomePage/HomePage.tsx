import React from "react";

import ExploreTopBooks from "./Components/ExploreTopBooks";
import Heros from "./Components/Heros";
import LibraryServices from "./Components/LibraryServices";
import Carousel from "./Components/Carousel";

function HomePage() {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
}

export default HomePage;

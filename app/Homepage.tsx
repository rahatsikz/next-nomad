import About from "@/components/Homepage/About";
import Categories from "@/components/Homepage/Categories";
import TopServices from "@/components/Homepage/TopServices";
import UpcomingServices from "@/components/Homepage/UpcomingServices";
import React from "react";

const Homepage = () => {
  return (
    <main>
      <About />
      <Categories />
      <TopServices />
      <UpcomingServices />
    </main>
  );
};

export default Homepage;

import "./App.css";
import React from "react";
import Navbar from "./Components/navbar";
import LandingSection from "./Components/landing";
import VideoCard from "./Components/video";
import ItemsCard from "./Components/attribute";
import OverviewCard from "./Components/overview";
import Project from "./Components/project";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <LandingSection />
      <VideoCard />
      <ItemsCard />
      <OverviewCard />
      <Project />
    </React.Fragment >
  );
}

export default App;

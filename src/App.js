import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import LandingSection from "./components/landing";
import VideoCard from "./components/video";
import ItemsCard from "./components/attribute";
import OverviewCard from "./components/overview";
import Project from "./components/project";

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

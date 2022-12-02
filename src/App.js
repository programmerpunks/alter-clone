import "./App.css";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import Team from "./Components/Team";

import { BrowserRouter } from "react-router-dom";
import { TeamModal } from "./Components/TeamModal";
import Navbar from "./components/navbar";
import LandingSection from "./components/landing";
import VideoCard from "./components/video";
import ItemsCard from "./components/attribute";
import OverviewCard from "./components/overview";
import Project from "./components/project";

function App() {
  const [showMyModal, setShowTeamModal] = useState(false);
  const [memberDetails, setMemberDetail] = useState({});
  const setDetails = (details) => {
    setMemberDetail(details);
  };
  const enableModal = (details) => {
    setMemberDetail(details);
    setShowTeamModal(true);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <React.Fragment>
          <Navbar />
          <LandingSection />
          <VideoCard />
          <ItemsCard />
          <OverviewCard />
          <Project />
        </React.Fragment>
        <Team setDetails={setDetails} enableModal={enableModal} />
        <Footer />
        {showMyModal && (
          <TeamModal
            closeModal={setShowTeamModal}
            memberDetails={memberDetails}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;

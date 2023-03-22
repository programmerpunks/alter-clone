import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";

import Footer from "./Components/footer";
import ItemsCard from "./Components/attribute";
import LandingSection from "./Components/landing";
import Navbar from "./Components/navbar";
import OverviewCard from "./Components/overview";
import Project from "./Components/project";
import Team from "./Components/team/Team.jsx";
import { TeamModal } from "./Components/team";
import VideoCard from "./Components/video";

import "./App.css";

function App() {
  const [memberDetails, setMemberDetail] = useState({});
  const [showMyModal, setShowTeamModal] = useState(false);

  const enableModal = (details) => {
    setMemberDetail(details);
    setShowTeamModal(true);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar />
          <LandingSection />
          <VideoCard />
          <ItemsCard />
          <OverviewCard />
          <Project />
        </>
        <Team enableModal={enableModal} />
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

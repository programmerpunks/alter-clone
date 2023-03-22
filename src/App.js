import "./App.css";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import Team from "./Components/Team";

import { BrowserRouter } from "react-router-dom";
import { TeamModal } from "./Components/TeamModal";
import Navbar from "./Components/navbar";
import LandingSection from "./Components/landing";
import VideoCard from "./Components/video";
import ItemsCard from "./Components/attribute";
import OverviewCard from "./Components/overview";
import Project from "./Components/project";
import { ScrollContainer } from "react-scroll-motion";
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
    <ScrollContainer>
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
    </ScrollContainer>
  );
}

export default App;

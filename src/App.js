import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollContainer } from "react-scroll-motion";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Mint from "./Components/mint/Mint";
import { TeamModal } from "./Components/TeamModal";
import Navbar from "./Components/navbar";
import LandingSection from "./Components/landing";
import VideoCard from "./Components/video";
import ItemsCard from "./Components/attribute";
import OverviewCard from "./Components/overview";
import Project from "./Components/project";

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
      <ToastContainer position="top-center" autoClose={2000} />
      <ScrollContainer>
        <Routes>
          <Route
            exact
            path="/"
            element={
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
            }
          />
          <Route exact path="/mint" element={<Mint />} />
        </Routes>
      </ScrollContainer>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollContainer } from "react-scroll-motion";
import { ToastContainer } from "react-toastify";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import { ContractABI } from "./Components/mint/contract";

function App() {
  const [showMyModal, setShowTeamModal] = useState(false);
  const [memberDetails, setMemberDetail] = useState({});
  const [wallet, setWallet] = useState("Connect a Wallet");
  const [logout, setLogout] = useState(false);
  const [maxMintAmount, setMaxMintAmount] = useState();
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [userMintedAmount, setUserMintedAmount] = useState(0);

  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;
  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const setDetails = (details) => {
    setMemberDetail(details);
  };
  const enableModal = (details) => {
    setMemberDetail(details);
    setShowTeamModal(true);
  };
  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };
  const setupConnections = async () => {
    if (window.ethereum != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (REACT_APP_NETWORK !== network.name) {
        notify(
          `Not on a correct network. Change your network to "${REACT_APP_NETWORK}"`
        );
        return false;
      } else {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        return address;
      }
    } else {
      notify("No Ether wallet available");
      return false;
    }
  };
  const connection = async () => {
    const res = await setupConnections();
    if (res === false) {
      setWallet("Connect a Wallet");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: REACT_APP_NETWORK_CHAIN_ID }],
      });
    } else {
      setLogout(true);
      setWallet(res.slice(0, 6) + "..." + res.slice(36, 42));
    }
  };
  const disconnect = async () => {
    setWallet("Connect a Wallet");
    setLogout(false);
    setUserMintedAmount("-");
    setMaxMintAmount("-");
    setPrice("-");
    setImages([]);
  };
  const readContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    const maxMintAmount = await contract.maxMintAmount();
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const userMintedAmount = await contract.balanceOf(address);
    const price = await contract.cost();
    setMaxMintAmount(parseInt(maxMintAmount, 10));
    setUserMintedAmount(parseInt(userMintedAmount, 10));
    setPrice(Number(ethers.utils.formatEther(price)));
  };
  const getTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const imagesTockens = await contract.nftsOnwedByWallet(address);
    let imagesLocal = [];
    await imagesTockens.map(async (image) => {
      const url = await contract.tokenURI(parseInt(image, 10));
      let result = await url.replace("ipfs://", "https://ipfs.io/ipfs/");
      const jsonBody = await (await fetch(result)).json();
      imagesLocal.push(
        await jsonBody.image.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
    });
    setTimeout(() => {
      setImages(imagesLocal);
    }, [1000]);
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
                  <Navbar
                    wallet={wallet}
                    logout={logout}
                    disconnect={disconnect}
                    setUserMintedAmount={setUserMintedAmount}
                    setMaxMintAmount={setMaxMintAmount}
                    setPrice={setPrice}
                    setImages={setImages}
                    connection={connection}
                    readContract={readContract}
                    getTokens={getTokens}
                  />
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
          <Route
            exact
            path="/mint"
            element={
              <>
                <Navbar
                  wallet={wallet}
                  logout={logout}
                  disconnect={disconnect}
                  setUserMintedAmount={setUserMintedAmount}
                  setMaxMintAmount={setMaxMintAmount}
                  setPrice={setPrice}
                  setImages={setImages}
                  connection={connection}
                  readContract={readContract}
                  getTokens={getTokens}
                />
                <Mint
                  wallet={wallet}
                  price={price}
                  images={images}
                  userMintedAmount={userMintedAmount}
                  maxMintAmount={maxMintAmount}
                  disconnect={disconnect}
                  connection={connection}
                  readContract={readContract}
                  getTokens={getTokens}
                />
                <Footer />
              </>
            }
          />
        </Routes>
      </ScrollContainer>
    </BrowserRouter>
  );
}

export default App;

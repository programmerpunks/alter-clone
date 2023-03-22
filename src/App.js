import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import { ScrollContainer } from "react-scroll-motion";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import "./App.css";
import { ContractABI } from "./Components/mint/contract";
import Footer from "./Components/footer";
import ItemsCard from "./Components/attribute";
import LandingSection from "./Components/landing";
import Mint from "./Components/mint/Mint";
import Navbar from "./Components/navbar";
import OverviewCard from "./Components/overview";
import Project from "./Components/project";
import Team from "./Components/team/Team";
import { TeamModal } from "./Components/team";
import VideoCard from "./Components/video";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [images, setImages] = useState([]);
  const [logout, setLogout] = useState(false);
  const [maxMintAmount, setMaxMintAmount] = useState();
  const [memberDetails, setMemberDetail] = useState({});
  const [price, setPrice] = useState(0);
  const [showMyModal, setShowTeamModal] = useState(false);
  const [userMintedAmount, setUserMintedAmount] = useState(0);
  const [wallet, setWallet] = useState("Connect a Wallet");

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;
  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;

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
    }, [2000]);
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

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
      <Navbar
        connection={connection}
        disconnect={disconnect}
        getTokens={getTokens}
        logout={logout}
        readContract={readContract}
        wallet={wallet}
      />
      <ScrollContainer>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <React.Fragment>
                  <LandingSection />
                  <VideoCard />
                  <ItemsCard />
                  <OverviewCard />
                  <Project />
                </React.Fragment>
                <Team enableModal={enableModal} setDetails={setDetails} />
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
                <Mint
                  connection={connection}
                  disconnect={disconnect}
                  getTokens={getTokens}
                  images={images}
                  maxMintAmount={maxMintAmount}
                  price={price}
                  readContract={readContract}
                  userMintedAmount={userMintedAmount}
                  wallet={wallet}
                />
              </>
            }
          />
        </Routes>
      </ScrollContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

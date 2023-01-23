import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";

import { ContractABI } from "./contract";

function Mint() {
  const [wallet, setWallet] = useState("Connect a Wallet");
  const [logout, setLogout] = useState(false);
  const [maxMintAmount, setMaxMintAmount] = useState();
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [userMintedAmount, setUserMintedAmount] = useState(0);
  const [check, setCheck] = useState(false);
  const customId = "custom-id-yes";
  const notify = (message) => {
    toast.error(message, {
      toastId: customId,
    });
  };

  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_CONTRACT_ADDRESS } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setCheck(!check);
    await mint(data.value);
    await readContract();
    await getTokens();
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
  const mint = async (mintAmount) => {
    setCheck(!check);
    if (wallet === "Connect a Wallet") {
      notify("Connect a Wallet First!");
      return;
    } else {
      await readContract();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        REACT_APP_CONTRACT_ADDRESS,
        ContractABI,
        signer
      );
      try {
        const response = await contract.mint(mintAmount, {
          value: ethers.utils.parseEther((price * mintAmount).toString()),
        });
        await response.wait();
        toast.success("Transaction Successful.", {
          toastId: customId,
        });
        setCheck(!check);
      } catch (error) {
        setCheck(!check);
        notify(error.reason);
      }
    }
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

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", async () => {
        await disconnect();
      });
      window.ethereum.on("accountsChanged", async () => {
        disconnect();
        connection();
        await readContract();
        await getTokens();
      });
    }
  });
  const fun = async () => {
    await connection();
    await readContract();
    await getTokens();
  };
  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <div className="bg-dark">
        <div className="text-white flex flex-wrap  justify-between md:px-36 px-10 py-8">
          <div className="text-3xl">Dashboard</div>
          <div>
            <button
              className="text-white w-[200px] shadow-lg border items-center text-xl bg-gray-700 rounded-xl"
              onClick={() => {
                connection();
                readContract();
                getTokens();
              }}
            >
              {wallet}
            </button>
            <button
              className="grid mt-3 justify-center w-[200px] shadow-lg border items-center text-white text-xl bg-gray-700 rounded-xl"
              onClick={() => {
                disconnect();
                setUserMintedAmount("-");
                setMaxMintAmount("-");
                setPrice("-");
                setImages([]);
              }}
              style={{ display: logout ? "block" : "none" }}
            >
              Disconnect
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="number"
              className="rounded px-2 py-3 text-black"
              {...register("value", { required: true })}
              defaultValue="0"
            />
            <button className="border rounded-lg text-2xl px-5 ml-5 py-1 my-5 bg-gray-500">
              Mint
            </button>
          </form>
        </div>
        <h4 className="text-white text-center font-bold text-3xl">
          Total Minted: {userMintedAmount}
        </h4>
        <h4 className="text-white text-center font-bold text-3xl">
          Maximum Minted: {maxMintAmount}
        </h4>
        <h4 className="text-white text-center font-bold text-3xl">
          Price: {price} eth
        </h4>
        <h4 className="text-white text-center font-bold text-3xl">
          Remaining minting:{maxMintAmount - userMintedAmount}
        </h4>
        <div className="text-white justify-center px-10 py-10 grid text-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {images.map((url, key) => {
            return (
              <div key={key} className="border border-md">
                <img alt="Tokens images" src={url} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mint;

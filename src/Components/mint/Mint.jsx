import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { ContractABI } from "./contract";

import "react-toastify/dist/ReactToastify.css";

const background = require("../../images/landing/Herobackground.png");

function Mint({
  connection,
  disconnect,
  getTokens,
  images,
  maxMintAmount,
  price,
  readContract,
  userMintedAmount,
  wallet,
}) {
  const [check, setCheck] = useState(false);

  const customId = "custom-id-yes";

  const notify = (message) => {
    toast.error(message, {
      toastId: customId,
    });
  };

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setCheck(!check);
    await mint(data.value);
    await readContract();
    await getTokens();
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

  useEffect(() => {
    const initialFunction = async () => {
      setTimeout(async () => {
        await getTokens();
      }, [2000]);
    };
    initialFunction();
  }, []);

  return (
    <>
      <div className="top-[10%] -left-[0px] z-20 lg:h-screen h-full w-full absolute object-center object-cover hidden md:block">
        <img src={background} alt="/" />
      </div>
      <div className=" z-30 pt-28 pb-[0rem] relative">
        <div className="flex justify-center">
          <div className="bg-slate-300 bg-opacity-80 font-poppins rounded-[55px] px-20 py-10">
            <div className="flex justify-end ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-center"
              >
                <div class="">
                  <input
                    type="number"
                    className=" text-black rounded-full focus:outline-none bg-white mt-2 p-3"
                    {...register("value", { required: true })}
                    defaultValue="0"
                  />
                </div>
                <button className="text-white h-[45px] mt-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-md rounded-[55px] px-5 mx-5  text-center  duration-700 hover:scale-110">
                  Mint
                </button>
              </form>
            </div>
            <h4 className="text-white text-center pt-5 font-bold text-3xl">
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
          </div>
        </div>
        <div className="text-white justify-center px-10 py-10 grid text-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {images.map((url, key) => {
            return (
              <div key={key} className="border border-md">
                <img key={key} alt="Tokens images" src={url} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mint;

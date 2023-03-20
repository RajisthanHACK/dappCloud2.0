import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Upload from "./contracts/Upload.json";
import IntroPage from "./Pages/IntroPage";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x9004148Ea65e3a72f8dA10551224649e1ecc98c7";
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not connected !");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroPage contract={contract} />} />
        <Route path="/dashboard" element={<Dashboard contract={contract} />} />
      </Routes>
    </div>
  );
};

export default App;

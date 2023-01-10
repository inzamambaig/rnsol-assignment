import { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import Account from "./components/Account";
import Network from "./components/Network";
import Wallet from "./components/Wallet";

function App() {
  const [network, setNetwork] = useState("");
  const [wallet, setWallet] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");

  function callAPI() {
    if (wallet === "meta-mask") {
      if (network === "bnb-chain") {
      } else if (network === "polygon") {
        console.log("for bnb chain request");
      } else if (network === "ethereum") {
        window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((address) => {
            console.log(address[1]);
            setCode(address[0].toString());
          })
          .catch((err) => console.log(err));

        getBalance(code);
      } else {
        console.log("wrong input");
      }
    }
  }

  function getBalance(code) {
    if (network === "bnb-chain") {
    } else if (network === "polygon") {
      console.log("second");
    } else if (network === "ethereum") {
      window.ethereum
        .request({
          method: "eth_getBalance",
          params: [code, "latest"],
        })
        .then((balance) => {
          console.log(balance);
          console.log(ethers.utils.formatEther(balance));
          setAmount(ethers.utils.formatEther(balance) + "ETH");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="App">
      <div className="content">
        <Network network={network} setNetwork={setNetwork} />
        <Wallet wallet={wallet} setWallet={setWallet} />
        <button className="cta" onClick={callAPI}>
          Connect Wallet
        </button>
      </div>
      <Account code={code} amount={amount} />
    </div>
  );
}

export default App;

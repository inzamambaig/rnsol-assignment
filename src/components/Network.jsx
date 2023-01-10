const Network = ({ network, setNetwork }) => {
  return (
    <div className="network-parent">
      <label className="label">Choose Network</label>
      <div className="network-type-parent">
        <div className="network-options">
          <input
            type="radio"
            id="bnb-chain"
            value="bnb-chain"
            onChange={(e) => setNetwork(e.target.value)}
            checked={network === "bnb-chain"}
          />
          <label htmlFor="bnb-chain" className="label-option">
            BNB Chain
          </label>
        </div>
        <div className="network-options">
          <input
            type="radio"
            id="polygon"
            value="polygon"
            onChange={(e) => setNetwork(e.target.value)}
            checked={network === "polygon"}
          />
          <label htmlFor="polygon" className="label-option">
            Polygon
          </label>
        </div>
        <div className="network-options">
          <input
            type="radio"
            id="Ethereum"
            value="ethereum"
            onChange={(e) => setNetwork(e.target.value)}
            checked={network === "ethereum"}
          />
          <label htmlFor="Ethereum" className="label-option">
            Ethereum
          </label>
        </div>
      </div>
    </div>
  );
};
export default Network;

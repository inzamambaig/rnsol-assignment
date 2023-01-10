const Wallet = ({ wallet, setWallet }) => {
  console.log(wallet);
  return (
    <div className="network-parent">
      <label className="label">Choose Wallet</label>
      <div className="network-type-parent">
        <div className="network-options">
          <input
            type="radio"
            id="meta-mask"
            value="meta-mask"
            onChange={(e) => setWallet(e.target.value)}
            checked={wallet === "meta-mask"}
          />
          <label htmlFor="meta-mask" className="label-option">
            Meta Mask
          </label>
        </div>
        <div className="wallet-options">
          <input
            type="radio"
            id="WalletConnect"
            value="WalletConnect"
            onChange={(e) => setWallet(e.target.value)}
            checked={wallet === "WalletConnect"}
          />
          <label htmlFor="WalletConnect" className="label-option">
            Wallet Connect
          </label>
        </div>
      </div>
    </div>
  );
};
export default Wallet;

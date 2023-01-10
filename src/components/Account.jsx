const Account = ({ code, amount }) => {
  return (
    <div className="account-parent">
      <h5>Account</h5>
      <div className="account-info">
        <h5 className="block-code">{code}</h5>
        <h4 className="amount-info">{amount}</h4>
      </div>
    </div>
  );
};
export default Account;

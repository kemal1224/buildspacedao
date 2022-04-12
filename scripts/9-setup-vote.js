import sdk from "./1-initialize-sdk.js";

// This is our governance contract.
const vote = sdk.getVote("0xFfA417ec15f5Ad88F8bAB9b826cB22aeDD708a36");

// This is our ERC-20 contract.
const token = sdk.getToken("0xaFE67fa080Defe059090BCfa410F0400B1Bdaa2F");

(async () => {
  try {
    // Give our treasury the power to mint additional token if needed.
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    
    const ownedTokenBalance = await token.balanceOf(
      process.env.WALLET_ADDRESS
    );

   
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent70 = (Number(ownedAmount) / 100) * 70;

    
    await token.transfer(
      vote.getAddress(),
      percent70
    ); 

    console.log("✅ Successfully transferred " + percent70 + " tokens to vote contract");
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})();

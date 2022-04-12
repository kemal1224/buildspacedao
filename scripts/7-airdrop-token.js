import sdk from "./1-initialize-sdk.js";


const editionDrop = sdk.getEditionDrop("0x1A2B33A98fc97B8a3f4A6e569B5c848Ce7d36E6F");


const token = sdk.getToken("0xaFE67fa080Defe059090BCfa410F0400B1Bdaa2F");

(async () => {
  try {
    
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, go and claim NFT right now !!!",
      );
      process.exit(0);
    }

    
    const airdropTargets = walletAddresses.map((address) => {
      
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();
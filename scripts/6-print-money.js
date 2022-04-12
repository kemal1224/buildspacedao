import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xaFE67fa080Defe059090BCfa410F0400B1Bdaa2F");

(async () => {
  try {
    
    const amount = 1000000;
    
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    
    console.log("✅ There now is", totalSupply.displayValue, "$FB in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";


const vote = sdk.getVote("0xFfA417ec15f5Ad88F8bAB9b826cB22aeDD708a36");


const token = sdk.getToken("0xaFE67fa080Defe059090BCfa410F0400B1Bdaa2F");

(async () => {
  try {
   
    const amount = 380_000;
    const description = "Should the DAO mint an additional " + amount + " tokens into the treasury?";
    const executions = [
      {
        
        toAddress: token.getAddress(),
        
        nativeTokenValue: 0,
        
        transactionData: token.encoder.encode(
          "mintTo", [
          vote.getAddress(),
          ethers.utils.parseUnits(amount.toString(), 18),
        ]
        ),
      }
    ];

    await vote.propose(description, executions);

    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }

  try {
    
    const amount = 190_007;
    const description = "Should the DAO transfer " + amount + " tokens from the treasury to " +
      process.env.WALLET_ADDRESS + " for being awesome?";
    const executions = [
      {
        
        nativeTokenValue: 0,
        transactionData: token.encoder.encode(

          "transfer",
          [
            process.env.WALLET_ADDRESS,
            ethers.utils.parseUnits(amount.toString(), 18),
          ]
        ),
        toAddress: token.getAddress(),
      },
    ];

    await vote.propose(description, executions);

    console.log(
      "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
    );
  } catch (error) {
    console.error("failed to create second proposal", error);
  }
})();
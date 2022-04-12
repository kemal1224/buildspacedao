import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0x1A2B33A98fc97B8a3f4A6e569B5c848Ce7d36E6F");

(async () => {
  try {
    
    const claimConditions = [{
      
      startTime: new Date(),
      
      maxQuantity: 19_007,
      
      price: 0,
      
      quantityLimitPerTransaction: 1,
     
      waitInSeconds: MaxUint256,
    }]

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
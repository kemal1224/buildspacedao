import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x1A2B33A98fc97B8a3f4A6e569B5c848Ce7d36E6F");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "kaptanlık pazu bandı",
        description: "This NFT will give you access to fbDAO!",
        image: readFileSync("scripts/assets/c.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
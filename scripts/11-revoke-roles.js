import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xaFE67fa080Defe059090BCfa410F0400B1Bdaa2F");

(async () => {
  try {
   
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO trasury", error);
  }
})();
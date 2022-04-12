import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({

      name: "fb dao",
      voting_token_address: "0xaFE67fa080Defe059090BCfa410F0400B1Bdaa2F",
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorum_fraction: 0,
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const TokenSwap = buildModule("TokenSwap", (m) => {


  const TokenSwap = m.contract("TokenSwap");

  return { TokenSwap };
});

export default TokenSwap;

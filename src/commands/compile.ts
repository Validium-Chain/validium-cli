import { PROCESS_CODE } from "../utils/constants";
import { runCommand } from "../utils/helpers";
import { log } from "../utils/logger";

export const compile = () => {
  const compileContractCommand = `npx hardhat compile`;

  log.info(`Setting up compilation environment...`);
  const compiled = runCommand(compileContractCommand);
  if (!compiled) process.exit(PROCESS_CODE.failure);
};

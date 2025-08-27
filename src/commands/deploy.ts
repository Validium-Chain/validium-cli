import { PROCESS_CODE } from "../utils/constants";
import { runCommand } from "../utils/helpers";
import { log } from "../utils/logger";

export const deploy = (script = "deploy.ts") => {
  try {
    const deploymentCommand = `npx hardhat deploy-zksync --script ${script}`;

    log.info(`Setting up deployment environment...`);
    const deployed = runCommand(deploymentCommand);
    if (!deployed) process.exit(PROCESS_CODE.failure);
  } catch (error) {
    log.error((error as Error).message);
    process.exit(PROCESS_CODE.failure);
  }
};

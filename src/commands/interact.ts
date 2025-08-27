import { PROCESS_CODE } from "../utils/constants";
import { runCommand } from "../utils/helpers";
import { log } from "../utils/logger";

export const interact = (script = "interact.ts") => {
  try {
    const interactCommand = `npx hardhat deploy-zksync --script ${script}`;

    const interacted = runCommand(interactCommand);
    if (!interacted) process.exit(PROCESS_CODE.failure);
  } catch (error) {
    log.error((error as Error).message);
    process.exit(PROCESS_CODE.failure);
  }
};

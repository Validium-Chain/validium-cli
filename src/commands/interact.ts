import { PROCESS_CODE } from "../utils/constants";
import { runCommand } from "../utils/helpers";

export const interact = (script = "interact.ts") => {
  const interactCommand = `npx hardhat deploy-zksync --script ${script}`;

  const interacted = runCommand(interactCommand);
  if (!interacted) process.exit(PROCESS_CODE.failure);
};

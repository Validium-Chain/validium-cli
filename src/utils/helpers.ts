import { execSync } from "child_process";
import { log } from "../utils/logger";

export const runCommand = (command: string) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    log.error(`Failed to execute the command! ${error}`);
    return false;
  }

  return true;
};

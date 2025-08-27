import { execSync } from "child_process";
import { log } from "../utils/logger";
import path from "path";
import { fileURLToPath } from "url";

export const runCommand = (command: string) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    const defaultMsg = "Failed to execute the command!";
    let errMsg = error instanceof Error ? error.message : null;

    // Silent hardhat related errors
    if (errMsg && errMsg.toLowerCase().includes("npx hardhat")) {
      errMsg = " ";
    }
    log.error(`${defaultMsg} ${errMsg ?? error}`);
    return false;
  }

  return true;
};

export const getDirPath = (filePath: string) => {
  const filename = fileURLToPath(filePath);
  return path.dirname(filename);
};

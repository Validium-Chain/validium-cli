import { execSync } from "child_process";
import { log } from "../utils/logger";
import path from "path";
import { fileURLToPath } from "url";

export const runCommand = (command: string) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    log.error(`Failed to execute the command! ${error}`);
    return false;
  }

  return true;
};

export const getDirPath = (filePath: string) => {
  const filename = fileURLToPath(filePath);
  return path.dirname(filename);
};

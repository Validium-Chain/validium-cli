import { PROCESS_CODE } from "../utils/constants";
import { runCommand } from "../utils/helpers";
import { log } from "../utils/logger";
import kleur from "kleur";

export const create = (projectName = "validium-project") => {
  const gitCloneCommand = `git clone --depth 1 https://github.com/Validium-Chain/Deploy-on-Validium ${projectName}`;
  const installDepsCommand = `cd ${projectName} && npm install`;

  // clone the repository
  log.info(`Cloning the repository to ${projectName}`);
  const repoCloned = runCommand(gitCloneCommand);
  if (!repoCloned) process.exit(PROCESS_CODE.failure);

  // install dependencies
  log.info(`Installing dependencies...`);
  const depsInstalled = runCommand(installDepsCommand);
  if (!depsInstalled) process.exit(PROCESS_CODE.failure);

  // Greet on success
  log.success("All set! You are ready to get started with Validium Network 🎉");
  console.log(`
        ${kleur.bold("Follow these steps")}:
        1. cd ${projectName}
        2. Create ${kleur.bold(".env")} file at root and add -
            WALLET_PRIVATE_KEY=
            INFURA_API_KEY=
        3. ${kleur.yellow("npx validium-cli compile")}
            - Compiles all the contracts inside the 'contracts' folder.
            - Generates a 'artifacts-zk' folder which contains all the compiled contract artifacts.
        4. ${kleur.yellow("npx validium-cli deploy")}
            - Asks to select the contract to deploy from the list of 'compiled contracts'.
            - Generates a 'deployments-zk' folder which contains deployed contract meta and bytecode.
            - Save the deployed contract address from the deployment logs (can also be found inside the 'deployments-zk' folder).
        7. ${kleur.yellow("npx validium-cli interact")}
            - Asks to select the contract to interact with from the list of 'compiled contrats'.
            - When prompted, provide the 'deployed contract address' of the selected contract.

        `);
  log.info(
    `For more information please visit: ${kleur.underline(
      "https://validium.gitbook.io/docs/start-coding/quickstart/deploy-using-validium-cli"
    )}
      `
  );
};

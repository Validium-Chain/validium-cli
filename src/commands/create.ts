import { PROCESS_CODE } from "../utils/constants";
import { runCommand } from "../utils/helpers";
import { log } from "../utils/logger";

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
        Follow these steps:
        1. cd ${projectName}
        2. Create .env file at root and add -
            WALLET_PRIVATE_KEY=
            INFURA_API_KEY=
        3. npx validium-cli compile
        4. Inside deploy.ts add -
            contractArtifactName
            constructorArguments
        5. npx validium-cli deploy <script-name>
        6. Copy contract address from deployment logs and add it to the interact.ts -
            CONTRACT_ADDRESS
            CONTRACT_NAME
        7. npx validium-cli interact <script-name>

        `);
  log.info(
    `For more information please visit: https://validium.gitbook.io/docs/start-coding/quickstart/deploy-using-quickstart-repository
      `
  );
};

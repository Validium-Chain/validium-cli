#!/usr/bin/env node

import { Command } from "commander";
import { log } from "./utils/logger";
import { COMMANDS, PACKAGE } from "./utils/constants";
import { create as createProject } from "./commands/create";
import { compile as compileContracts } from "./commands/compile";
import { deploy as deployContract } from "./commands/deploy";
import { interact as interactWithContract } from "./commands/interact";

const program = new Command();
const { name, description, version } = PACKAGE;
const { create, compile, deploy, interact } = COMMANDS;

program.name(name).description(description).version(version);

program
  .command(create)
  .argument("[projectName]")
  .description("Create a Validium Project")
  .action((projectName = "validium") => {
    log.info(`Creating Project ${projectName}...`);
    createProject(projectName);
  });

program
  .command(compile)
  .description("Compile the Validium project")
  .action(() => {
    log.info("Starting compilation...");
    compileContracts();
  });

program
  .command(deploy)
  .argument("[script]")
  .description("Deploy the Validium project")
  .action((script) => {
    log.info("Starting deployment...");
    deployContract(script);
  });

program
  .command(interact)
  .argument("[script]")
  .description("Interact with the Validium network")
  .action((script) => {
    log.info("Starting interaction...");
    interactWithContract(script);
  });

program.parse(process.argv);

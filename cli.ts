#!/usr/bin/env node
import { program } from "commander";
import { add } from "./commands/add.js";
import { init } from "./commands/init.js";

program
  .version("0.0.1")
  .description("novue-ui CLI for initializing and adding components");

program
  .command("init")
  .description("Initialize novue-ui in your project")
  .action(init);

program
  .command("add <component>")
  .description("Add a component to your project")
  .action(add);

program.parse(process.argv);

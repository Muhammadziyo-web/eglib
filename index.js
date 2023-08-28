#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const simpleGit = require("simple-git");
const { execSync } = require("child_process")

program
  .command("create <project-name")
  .description("Generate custom files and folders")
  .action((projectName) => {
    console.log("\x1b[33m Welcome to the eglib! \x1b[0m");
    const templateRepoUrl =
      "https://github.com/Muhammadziyo-web/eglib-template.git";

    const targetDir = path.join(process.cwd(), projectName);

    console.log(`\x1b[33m Cloning template from ${templateRepoUrl}... \x1b[0m`);

    simpleGit().clone(templateRepoUrl, targetDir, (err) => {
      if (err) {
        console.error("Error cloning template:", err);
      } else {
        console.log("Template cloned successfully.");

        process.chdir(targetDir);
        console.log("\x1b[33m Installing dependencies... \x1b[0m");
        try {
          execSync("npm install", { stdio: "inherit" });
          console.log("Dependencies installed successfully.");
          execSync("npm run start", { stdio: "inherit" });
        } catch (error) {
          console.error("Error installing dependencies:", error);
        }
      }
    });
  });

program.parse(process.argv);

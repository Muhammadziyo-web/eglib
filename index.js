#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const simpleGit = require("simple-git"); 
program
  .command("create")
  .description("Generate custom files and folders")
  .action(() => {
    let mainFolder = "src";
    fs.mkdirSync(mainFolder);
    const filePath = path.join(mainFolder, "server.js");
    fs.writeFileSync(filePath, "console.log('Hello world!')");
    console.log("Generated custom files and folders.");
  });

program.parse(process.argv);

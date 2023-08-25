#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { program } = require("commander");




program
  .command("create <folderName>")
  .description("Generate custom files and folders")
  .action((folderName) => {
    fs.mkdirSync(folderName);
    const filePath = path.join(folderName, "myFile.txt");
    fs.writeFileSync(filePath, "Hello, custom file content!");

    console.log("Generated custom files and folders.");
  });


program.parse(process.argv);

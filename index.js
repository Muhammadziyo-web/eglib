#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { program } = require("commander");




program
  .command("create")
  .description("Generate custom files and folders")
  .action(() => {
    fs.mkdirSync('src');
    const filePath = path.join(folderName, "server.js");
    fs.writeFileSync(filePath, "console.log(Hello world!");

    console.log("Generated custom files and folders.");
  });


program.parse(process.argv);

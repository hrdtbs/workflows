#!/usr/bin/env node
"use strict";

import * as fs from "fs";
import * as path from "path";

const main = () => {
  const argv = process.argv;
  const subcommand = argv[2];
  switch (subcommand) {
    case "ls": {
      const files = fs.readdirSync(
        path.resolve(__dirname, ".github/workflows")
      );
      console.log(files);
      break;
    }
    default: {
      throw new Error(`Not found ${subcommand} command`);
    }
  }
};

main();

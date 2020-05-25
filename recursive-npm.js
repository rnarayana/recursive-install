#!/usr/bin/env node

const path = require("path");
const shell = require("shelljs");
const execSync = require("child_process").execSync;

function getPackageJsonLocations(dirname) {
  return shell
    .find(dirname)
    .filter(function (fname) {
      return (
        !(fname.indexOf("node_modules") > -1 || fname[0] === ".") &&
        path.basename(fname) === "package.json"
      );
    })
    .map(function (fname) {
      return path.dirname(fname);
    });
}

function runNpmCommand(dir) {
  let exitCode = 0;
  let cmd = `npm ${process.argv.slice(2).join(" ")}`;
  try {
    console.log(`Running ${cmd} in ${dir}`);
    execSync(cmd, { cwd: dir });
  } catch (err) {
    exitCode = err.status;
  }

  return {
    dirname: dir,
    exitCode: exitCode,
  };
}

if (require.main === module) {
  var exitCode = getPackageJsonLocations(process.cwd())
    .map(runNpmCommand)
    .reduce(function (code, result) {
      return result.exitCode > code ? result.exitCode : code;
    }, 0);

  process.exit(exitCode);
}

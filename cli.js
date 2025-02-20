#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const templates = [
  "react",
  "next",
  "vue",
  "nuxt",
  "express",
  "react+ts",
  "angular",
];

const projectTypes = Object.values(templates);

const askQuestions = async () => {
  const { projectType } = await inquirer.prompt([
    {
      type: "list",
      name: "projectType",
      message: "What kind of project do you want to create?",
      choices: projectTypes,
    },
  ]);

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "my-project",
    },
  ]);

  console.log(chalk.green(`\n🚀 Generating ${projectType} project: ${projectName}...\n`));
  generateProjectStructure(projectType, projectName);
};


const generateProjectStructure = (projectType, projectName) => {
  const projectDir = path.join(process.cwd(), projectName);

  // Prevent overwriting existing projects
  if (fs.existsSync(projectDir)) {
    console.log(chalk.red("⚠️ Project already exists. Choose a different name."));
    return;
  }

  if (projectType === "react") {
    console.log(chalk.yellow("📦 Initializing React project..."));
    execSync(`npx create-react-app ${projectName}`, { stdio: "inherit", cwd: process.cwd() });
    console.log(chalk.green("✅ React project created successfully."));
    return;
  }

  if (projectType === "angular") {
    console.log(chalk.yellow("📦 Initializing Angular project..."));
    execSync(`npx @angular/cli new ${projectName}`, { stdio: "inherit", cwd: process.cwd() });
    console.log(chalk.green("✅ Angular project created successfully."));
    return;
  }

  if (projectType === "nuxt") {
    console.log(chalk.yellow("📦 Initializing Nuxt.js project..."));
    execSync(`npx nuxi@latest init ${projectName}`, { stdio: "inherit", cwd: process.cwd() });
    console.log(chalk.green("✅ Nuxt.js project created successfully."));
    return;
  }

  if (projectType === "next") {
    console.log(chalk.yellow("📦 Initializing Next.js project..."));
    execSync(`npx create-next-app@latest ${projectName}`, { stdio: "inherit", cwd: process.cwd() });
    console.log(chalk.green("✅ Next.js project created successfully."));
    return;
  }
  if (projectType === "vue") {
    console.log(chalk.yellow("📦 Initializing Vue.js project..."));
    execSync(`npx create vue@latest ${projectName}`, { stdio: "inherit", cwd: process.cwd() });
    console.log(chalk.green("✅ Vue.js project created successfully."));
    return;
  }

  if (projectType === "express") {
    console.log(chalk.yellow("📦 Initializing Express.js project..."));
    execSync(`npx express-generator ${projectName}`, { stdio: "inherit", cwd: process.cwd() });
    console.log(chalk.green("✅ Express.js project created successfully."));
    return;
  }

  if (projectType === "react+ts") {
    console.log(chalk.yellow("📦 Initializing TypeScript React project..."));
    execSync(`npx create-react-app ${projectName} --template typescript`, {
      stdio: "inherit",
      cwd: process.cwd(),
    });
    console.log(chalk.green("✅ TypeScript React project created successfully."));
    return;
  }

  

  console.log(chalk.green(`\n🎉 Project ${projectName} created successfully!`));
};


askQuestions();

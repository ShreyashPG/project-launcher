#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const templates = {
  react: require("./templates/react.json"),
  next: require("./templates/next.json"),
  vue: require("./templates/vue.json"),
  nuxt: require("./templates/nuxt.json"),
  express: require("./templates/express.json"),
  ts: require("./templates/ts.json"),
  angular: require("./templates/angularr.json"),
};

const projectTypes = Object.keys(templates);

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

  fs.ensureDirSync(projectDir);

  if (projectType === "angular") {
    console.log(chalk.yellow("📦 Initializing Angular project..."));
    execSync(`npx @angular/cli new ${projectName}`, { stdio: "inherit", cwd: process.cwd() });
    console.log(chalk.green("✅ Angular project created successfully."));
    return;
  }

  const template = templates[projectType];

  // Create package.json
  fs.writeJsonSync(path.join(projectDir, "package.json"), template.packageJson, { spaces: 2 });

  // Create configuration files
  for (const [file, content] of Object.entries(template.configFiles)) {
    const filePath = path.join(projectDir, file);
    fs.ensureFileSync(filePath);
    fs.writeFileSync(filePath, content);
  }

  if (projectType === "express") {
    const srcDir = path.join(projectDir, "src");
    fs.ensureDirSync(srcDir);

    console.log(chalk.yellow("📦 Setting up Express.js project..."));
    execSync("npm install", { stdio: "inherit", cwd: projectDir });
    console.log(chalk.green("✅ Express project created successfully."));
  }

  console.log(chalk.green(`\n🎉 Project ${projectName} created successfully!`));
};

askQuestions();

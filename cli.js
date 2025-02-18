#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const templates = {
  react: require('./templates/react.json'),
  next: require('./templates/next.json'),
  vue: require('./templates/vue.json'),
  nuxt: require('./templates/nuxt.json'),
  express: require('./templates/express.json'),
  ts: require('./templates/ts.json')
};

// List of available project types for the user to choose
const projectTypes = Object.keys(templates);

const askQuestions = async () => {
  // Step 1: Ask the user for project type
  const { projectType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'What kind of project do you want to create?',
      choices: projectTypes
    }
  ]);

  // Step 2: Ask for the project name
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
      default: 'my-project'
    }
  ]);

  console.log(chalk.green(`Generating ${projectType} project named ${projectName}...`));
  generateProjectStructure(projectType, projectName);
};

const generateProjectStructure = (projectType, projectName) => {
  const template = templates[projectType];
  const projectDir = path.join(process.cwd(), projectName);

  // Create project directory
  fs.ensureDirSync(projectDir);

  // Create package.json
  fs.writeJsonSync(path.join(projectDir, 'package.json'), template.packageJson, { spaces: 2 });

  // Create configuration files
  for (const [file, content] of Object.entries(template.configFiles)) {
    fs.writeFileSync(path.join(projectDir, file), content);
  }

  console.log(chalk.green(`Project ${projectName} created successfully in ${projectDir}!`));
};

askQuestions();

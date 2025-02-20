
# Project Launcher

A command-line tool to generate folder structures for various types of projects, including frontend and backend frameworks such as **React**, **Next.js**, **Vue**, **Nuxt**, **Express**, **TypeScript** and **Angular**. 

This tool helps you quickly set up the initial structure for your projects, including necessary configuration files like `package.json`, `.gitignore`, and others, based on the selected template.

---

## Features

- Generates **project folder structures** for multiple frameworks like React, Vue, Next.js, Nuxt, Express, TypeScript and Angular.
- Provides **default configuration files** (like `package.json`, `.gitignore`, `README.md`) to get you started right away.
- 
- Offers an **interactive CLI** to guide you through selecting the project type and providing project details.
- Easy to integrate into any development setup for faster project initialization.

---

## Installation

To install `project-launcher`, you can use npm:

```bash
npm install -g project-launcher
```

This will install the CLI tool globally on your system.

---

## Usage

Once installed, you can generate project folder structures by running the following command:

```bash
npx project-launcher
```

You will be prompted to:

1. **Select the type of project**: Choose from frameworks like **React**, **Next.js**, **Vue**, **Nuxt**, **Express**, **TypeScript**,, **Angular**, and more.
2. **Provide a project name**: Enter the name for your new project (e.g., `my-react-app`).
3. The package will then generate the project structure in the current working directory.

---

## Supported Project Types

Here are the supported templates you can choose from:

- **React**
- **Next.js**
- **Vue**
- **Nuxt**
- **Express**
- **TypeScript** 
- **Angular**   

Each template generates a specific folder structure and includes all necessary projectfiles like `package.json`, `.gitignore` ,`src`, `public` and `README.md`.

---

## Example

### React Project

When you choose **React**, the following folder structure will be created:

```plaintext
my-react-app/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── index.js
│   └── App.js
├── package.json
├── .gitignore
└── README.md
```


---

### Express Project

For an **Express** project, the structure will look like:

```plaintext
my-express-app/
├── node_modules/
├── src/
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```


## License

MIT License. 

---


## Support

For any issues or feature requests, please open an issue on the GitHub repository.


# Project Structure Generator

A command-line tool to generate folder structures for various types of projects, including frontend and backend frameworks such as **React**, **Next.js**, **Vue**, **Nuxt**, **Express**, and **TypeScript**. 

This tool helps you quickly set up the initial structure for your projects, including necessary configuration files like `package.json`, `.gitignore`, and others, based on the selected template.

---

## Features

- Generates **project folder structures** for multiple frameworks like React, Vue, Next.js, Nuxt, Express, and TypeScript.
- Provides **default configuration files** (like `package.json`, `.gitignore`, `README.md`) to get you started right away.
- Supports **custom templates** to extend and modify project types.
- Offers an **interactive CLI** to guide you through selecting the project type and providing project details.
- Easy to integrate into any development setup for faster project initialization.

---

## Installation

To install `project-structure-generator`, you can use npm:

```bash
npm install -g project-structure-generator
```

This will install the CLI tool globally on your system.

---

## Usage

Once installed, you can generate project folder structures by running the following command:

```bash
project-structure
```

You will be prompted to:

1. **Select the type of project**: Choose from frameworks like **React**, **Next.js**, **Vue**, **Nuxt**, **Express**, **TypeScript**, and more.
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
- **TypeScript** (for general TypeScript-based projects)

Each template generates a specific folder structure and includes common configuration files like `package.json`, `.gitignore`, and `README.md`.

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

**`package.json`** for React:

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
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

**`package.json`** for Express:

```json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}
```

---

## Extending Project Types

You can **extend** this tool by adding custom templates. Templates are stored in the `templates/` folder, and you can modify or add new templates based on your preferred project structures.

- To add a new template, simply create a new JSON file in the `templates/` directory following the structure of the existing ones.
- For example, create a new `angular.json` file for generating Angular projects.

---

## Contributing

We welcome contributions! If you find any bugs, have suggestions, or want to add new templates, please feel free to open an issue or create a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature xyz'`).
5. Push to the branch (`git push origin feature-xyz`).
6. Open a pull request.

---

## License

MIT License. See the [LICENSE](LICENSE) file for more details.

---

## FAQ

### How do I add a new project template?

To add a new template, simply create a new JSON file in the `templates/` directory. For example, if you want to add a template for **Angular**, create `angular.json` with the folder structure and configuration details.

### Can I generate a custom folder structure?

Yes, you can create your own custom template by modifying the `templates/` folder and adding a new template configuration in JSON format.

---

## Support

For any issues or feature requests, please open an issue on the GitHub repository.

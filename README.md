
# RE-BUG Project (Front-End)

A bug tracker project that is built on Next.js and Python (Flask).

RE-BUG allowes users to register with a role from one of the following: tester, developer, project manager and admin.

After authenticating, a user can see the history of a bugs related to a specific project.

They can modify bugs, add severity levels, see analytics, etc.


## Table of contents
* [Tecth Stack](#tech-stack)
* [Features](#features)
* [Used Packages](#used-packages)
* [Project Structure](#project-structure)

## Tech Stack
**Client:** React, Next.js, TailwindCSS, HTML & CSS, TypeScript, JavaScript

**Server:** Python, Flask, MySQL


## Features
- Registration Form
- Authorization Form
- Field Validations
- Pie Chart Analytics For Each Project
- Ability to Add Projects to A Company
- Bugs CRUD
- Personal Information Section
- See The Status of Each Bug
- See The Severity of Each Bug
- Status And Severity Descriptions
- Caching Data
- SSR (Server-side Rendering)
- Security Validations
## Used Packages
- [Dotenv](https://pypi.org/project/python-dotenv/) - For loading the .env file
- [Axios](https://axios-http.com/docs/intro) - For making requests
- [React Hook Form](https://react-hook-form.com/) - For validating fields
- [React Google Charts](https://www.react-google-charts.com/) - For displaying pie chart
- [Prettier](https://prettier.io/) - For formatting code
- [ESLint](https://eslint.org/) - For fixing JavaScript mistakes

## Project Structure
```bash
+---.vscode
|       settings.json
|       
+---app
|   |   fonts.ts
|   |   globals.css
|   |   
|   +---(main)
|   |   |   layout.tsx
|   |   |   page.tsx
|   |   |   
|   |   \---register
|   |       |   page.tsx
|   |       |   
|   |       \---form
|   |               page.tsx
|   +---dashboard
|   |   |   layout.tsx
|   |   |   page.tsx
|   |   |   
|   |   \---[id]
|   |       |   page.tsx
|   |       |   
|   |       \---[bug_id]
|   |               page.tsx
|   |            
|   +---actions
|   |       
|   +---components
|   |   |   index.ts
|   |   |   
|   |   +---PageComponents
|   |   |   |   index.ts
|   |   |   +---Component
|   |   |   |       Component.tsx
|   |   |   |       index.ts
|   |
|   +---config
|   |               
|   +---exceptions
|   |       
|   +---helpers
|   |       
|   +---hooks
|   |       
|   +---types
|
|   .env.local
|   .eslintrc.json
|   .gitignore
|   .prettierrc.json
|   next-env.d.ts
|   next.config.mjs
|   output.txt
|   package-lock.json
|   package.json
|   postcss.config.js
|   README.md
|   tailwind.config.ts
|   tsconfig.json
# Project Name

This project is an automation project that performs API and UI tests using Playwright.

## Project Structure

## Installation

1. Clone this repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the necessary dependencies:
    ```sh
    npm install
    ```

## Running Tests

### UI Tests

To run UI tests, use the following command:
```sh
npx playwright test tests/ui
```

### API Tests

To run API tests, use the following command:
```sh
npx playwright test tests/api
```

## 🛠️ **Configuration**
- **Project Configuration**:  
  The main configuration is located in the `playwright.config.ts` file.
- **Environment Variables**:  
  Environment variables are managed via the `.env` file.

---

## 📂 **Folder Structure**

### **`src`**
- **`config`**:  
  Contains project configuration files.  
  - `environment.ts`: Configures environment variables.  
  - `global-setup.ts`: Executes global setup before tests.  
  - `global-teardown.ts`: Executes global teardown after tests.

- **`data`**:  
  Contains test data.  
  - `testData.json`: Stores test data in JSON format.

- **`pages`**:  
  Implements Page Object Model (POM).  
  - `BasePage.ts`: The base class for all pages.  
  - `HomePage.ts`: Page object for the home page.

- **`utils`**:  
  Contains utility functions and tools.  
  - `commonUtils.ts`: Common utility functions.  
  - `dataReader.ts`: Utility for reading test data.  
  - `logger.ts`: Handles logging functionality.

---

### **`tests`**
- **`api`**: Contains API test files.  
- **`ui`**: Contains UI test files.  
  - `home.spec.ts`: UI tests for the home page.

---

## 📊 **Reporting**
- **HTML Reports**:  
  Test results are generated in the `playwright-report` folder in HTML format.  
  Open the `index.html` file to view detailed test reports.

---

## 🤝 **Contributing**
- Submit a **pull request** for new features or fixes.
- Open an **issue** for discussions or bug reporting.

---

## 📜 **License**
This project is licensed under the [MIT License](./LICENSE).

---

## 🗺️ **Schema Overview**

```plaintext
Project
│
├── src
│   ├── config
│   │   ├── environment.ts
│   │   ├── global-setup.ts
│   │   └── global-teardown.ts
│   ├── data
│   │   └── testData.json
│   ├── pages
│   │   ├── BasePage.ts
│   │   └── HomePage.ts
│   └── utils
│       ├── commonUtils.ts
│       ├── dataReader.ts
│       └── logger.ts
│
├── tests
│   ├── api
│   └── ui
│       └── home.spec.ts
│
├── playwright.config.ts
├── .env
├── playwright-report
│   └── index.html
└── LICENSE





# PW-TypeScriptProject

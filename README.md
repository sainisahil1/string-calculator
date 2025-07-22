# 📊 String Calculator (JavaScript)

This is a simple **String Calculator** implemented in JavaScript. It parses a string containing numbers and delimiters, then returns the sum. It includes full test coverage using **Jest**.

---

## 📁 Project Structure

```
.
├── src/
│   └── stringCalculator.js       # Main calculator logic
├── tests/
│   └── stringCalculator.test.js  # Jest test cases
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

- Node.js (v12 or higher)
- npm

To check if you have them installed:

```bash
node -v
npm -v
```

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/sainisahil1/string-calculator
cd string-calculator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests

```bash
npm test
```

---

## ✅ Features Tested

- ✅ Returns `0` for an empty string
- ✅ Returns the number itself if only one number is provided
- ✅ Returns sum for comma-separated numbers (e.g., `"1,2,3"`)
- ✅ Supports newline `\n` as a valid delimiter (e.g., `"1\n2,3"`)
- ✅ Supports custom delimiters like `"//;\n1;2"`
- ✅ Throws an error for negative numbers, listing them (e.g., `"Negatives not allowed: -2, -5"`)

---


## 👨‍💻 Author

**Sahil Saini**

Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/sahilsaini01/)

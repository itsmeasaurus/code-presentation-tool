# Code Presentation Tool

A simple and elegant tool to turn your JavaScript code files into beautiful presentations. Perfect for teaching, and technical presentations

> :warning: **This project is still in development stage**: Be very careful here!

## 🌟 Features

- **Automatic Slide Generation**: Just add your JavaScript files, and we'll create slides automatically
- **Syntax Highlighting**: Beautiful code highlighting for better readability
- **Easy Navigation**: Use arrow keys or buttons to move between slides
- **Modern Interface**: Clean, dark theme designed for code presentation
- **Real-time Updates**: Changes to your code files are reflected immediately

## 📋 Quick Start

### 1. Installation

```bash
# Clone or download the project
git clone https://github.com/itsmeasaurus/code-presentation-tool.git

# Install dependencies
npm install

# Start the presentation server
npm start
```

### 2. Adding Your Code

1. Create a `slides` folder in the project (if it doesn't exist)
2. Add your JavaScript files to the `slides` folder
3. Name your files with a number prefix for ordering:
   ```
   slides/
   ├── 01-introduction.js
   ├── 02-functions.js
   ├── 03-examples.js
   ```

### 3. Viewing Your Presentation

1. Open your browser and go to `http://localhost:3000`
2. Use the arrow keys or navigation buttons to move between slides
3. The presentation updates automatically when you modify your code files

## 🤝 Need Help?

- Check the console output for any error messages
- Verify file permissions in the `slides` directory
- Ensure all files are valid JavaScript

## 📝 Notes

- Currently supports JavaScript files only
- Files are sorted alphabetically by name
- The tool automatically refreshes when files change
- Each file becomes a separate slide in the presentation

## 🚀 Coming Soon

- Support for more programming languages
- Fully support for keyboard controls
- Presentation export options
- More and More..

---

We hope this tool helps you create engaging code presentations! Happy presenting! 🎉
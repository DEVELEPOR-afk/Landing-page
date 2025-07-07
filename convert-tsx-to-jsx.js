const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, 'src', 'components', 'ui');
const outputDir = path.join(__dirname, 'src', 'components', 'ui-jsx');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert TypeScript to JavaScript
function convertTsxToJsx(content) {
  // Remove TypeScript type annotations
  let jsxContent = content
    // Remove type imports
    .replace(/import type \{.*\} from ['"].*['"];?\n?/g, '')
    // Remove type exports
    .replace(/export type .*{.*};?\n?/g, '')
    // Remove interface definitions
    .replace(/interface \w+ \{[^}]*\}\n?/g, '')
    // Remove type annotations from function parameters
    .replace(/\w+\s*:\s*[\w\[\]{}|<>]+(\s*\?\s*)?(\s*=\s*[^,)]+)?/g, (match) => {
      // Remove type annotations but keep default values
      if (match.includes('=')) {
        return match.split(':')[0].trim() + ' =' + match.split('=').slice(1).join('=');
      }
      return match.split(':')[0].trim();
    })
    // Remove type assertions (as Type)
    .replace(/as\s+[\w\[\]{}|<>]+/g, '')
    // Remove generic type parameters
    .replace(/<[\w\s,]+>(?=\s*[({])/g, '')
    // Remove remaining type annotations in destructuring
    .replace(/\w+\s*:\s*[\w\[\]{}|<>]+/g, (match) => {
      if (!match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
        return match.split(':')[0].trim();
      }
      return match;
    });

  // Remove empty lines with only whitespace
  jsxContent = jsxContent.replace(/^\s*[\r\n]/gm, '');

  return jsxContent;
}

// Process all .tsx files in the UI directory
fs.readdir(uiDir, (err, files) => {
  if (err) {
    console.error('Error reading UI directory:', err);
    return;
  }

  const tsxFiles = files.filter(file => file.endsWith('.tsx'));
  
  tsxFiles.forEach(file => {
    const filePath = path.join(uiDir, file);
    const jsxFilePath = path.join(outputDir, file.replace(/\.tsx$/, '.jsx'));
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }
      
      const jsxContent = convertTsxToJsx(data);
      
      fs.writeFile(jsxFilePath, jsxContent, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file ${jsxFilePath}:`, err);
          return;
        }
        console.log(`Converted ${file} to ${path.basename(jsxFilePath)}`);
      });
    });
  });
});

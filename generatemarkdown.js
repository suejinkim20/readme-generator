// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license){
    return "https://img.shields.io/badge/license-" + license + "-blue.svg"
} else {
    return ""
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing Guidlines](#contributing-guidelines)
4. [Testing Instructions](#testing-instructions)
5. [License](#license)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Testing
${data.testing}

## License
${data.license}

## Questions
Have questions? Please contact me at ${data.email}
`;
}

module.exports = generateMarkdown;

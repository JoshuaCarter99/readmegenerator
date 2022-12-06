// TODO: Create a function to generate markdown for README ${renderBadge(data.license)}

const generateMarkdown = data => {
    
  return `# ${data.title}
![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)
## Description
${data.description}
  
## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Test](#test)
 * [Info](#information)
## Installation 
${data.installation}
## Usage
${data.usage}
## License
This project is licensed under ${data.license} 
## Test
${data.test}
## Info
Github: [${data.github}](https://github.com/${data.github}/)
Email: ${data.email}`;

}

module.exports = generateMarkdown;
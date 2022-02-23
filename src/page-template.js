const  { renderLicenseSection, renderLicenseBadge } = require("../utils/generateMarkdown.js");

const generateReadMe = projectArr => {
    return `![license](${renderLicenseBadge(projectArr)})

# ${projectArr.name}

## Description

${projectArr.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${projectArr.installation}

## Usage

${projectArr.usage}

${renderLicenseSection(projectArr)}

## Contributions

${projectArr.contribution}

## Tests

${projectArr.test}


## Questions?

For any further questions, you can find my github profile here: https://github.com/${projectArr.github}

Or you can contact me at ${projectArr.email}.
`;
}

module.exports = templateData => {
    return generateReadMe(templateData);
}
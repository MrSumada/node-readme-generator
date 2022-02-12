const  { renderLicenseSection, generateMarkdown } = require("../utils/generateMarkdown.js");

const generateReadMe = projectArr => {
    return `![license](${generateMarkdown(projectArr)})

# ${projectArr.name}

## DESCRIPTION

${projectArr.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)


## INSTALLATION

${projectArr.installation}

## USAGE

${projectArr.usage}

${renderLicenseSection(projectArr)}

## CONTRIBUTIONS

${projectArr.contribution}

## TESTS

${projectArr.test}


## Questions?

For any further questions, you can find my github profile here: https://github.com/${projectArr.github}

Or you can contact me at ${projectArr.email}.
`;
}

module.exports = templateData => {
    return generateReadMe(templateData);
}
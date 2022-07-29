// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  -[description] (#description)
  -[installation] (#install)
  -[usage] (#usage)
  -[guidelines] (#guidelines)
  -[test instructions] (#test)
  -[licenses] (#license)
  -[GitHub Username] (#github)
  -[GitHub Profile] (#profile)
  -[Contact Information] (#email)

  ##Description:
  ${data.description}

  ##Installation:
  ${data.install}

  ##Usage:
  ${data.usage}

  ##Guidelines:
  ${data.guidelines}

  ##Test Instructions:
  ${data.test}

  ##Profile:
  ${data.profile}

  ##Contact Information:
  ${data.github}
  ${data.profile}
  ${data.email}
`;
}

module.exports = generateMarkdown;

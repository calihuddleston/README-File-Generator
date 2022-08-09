const licenses = ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']

//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license === licenses[0]){
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
   } else if (license === licenses[1]){
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
   } else if (license === licenses[2]) {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)"
   } else if (license === licenses[3]){
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
   } else if (license === licenses[4]){
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
   } else if (license === licenses[5]){
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   } else if (license === licenses[6]){
      return "[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
   } else if (license === licenses[7]){
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
   } else {
    return " "
   }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenses[0]){
    return `[${licenses[0]}](https://www.gnu.org/licenses/agpl-3.0)`
 } else if (license === licenses[1]){
    return `[${licenses[1]}](https://www.gnu.org/licenses/gpl-3.0)`
 } else if (license === licenses[2]) {
    return `[${licenses[2]}](https://www.gnu.org/licenses/lgpl-2.1)`
 } else if (license === licenses[3]){
    return `[${licenses[3]}](https://opensource.org/licenses/MPL-2.0)`
 } else if (license === licenses[4]){
    return `[${licenses[4]}](https://opensource.org/licenses/Apache-2.0)]`
 } else if (license === licenses[5]){
    return `[${licenses[5]}](https://opensource.org/licenses/MIT)`
 } else if (license === licenses[6]){
    return `[${licenses[6]}](https://www.boost.org/LICENSE_1_0.txt)`
 } else if (license === licenses[7]){
    return `[${licenses[7]}](http://unlicense.org/)`
 } else {
  return " "
 }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenses[0]){
    return `Read more about ${licenses[0]} here:`
 } else if (license === licenses[1]){
    return `Read more about ${licenses[1]} here:`
 } else if (license === licenses[2]) {
    return `Read more about ${licenses[2]} here:`
 } else if (license === licenses[3]){
    return `Learn more about ${licenses[3]} here:`
 } else if (license === licenses[4]){
    return `Learn more about ${licenses[4]} here:`
 } else if (license === licenses[5]){
    return `Learn more about ${licenses[5]} here:`
 } else if (license === licenses[6]){
    return `Learn more about ${licenses[6]} here:`
 } else if (license === licenses[7]){
    return `Read more about ${licenses[7]} here:`
 } else {
  return " "
 }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Guidelines](#guidelines)
  - [Test-Instructions](#test)
  - [Licenses](#license)
  - [Contact-Information](#email)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.install}

  ## Usage:
  ${data.usage}

  ## Guidelines:
  ${data.guidelines}

  ## Test Instructions:
  ${data.test}

  ## License:
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contact Information:
  GitHub Username: ${data.github}
  GitHub Profile: ${data.profile}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;

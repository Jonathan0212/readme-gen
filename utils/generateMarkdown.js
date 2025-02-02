// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)"
  }
  if (license == 'MIT') {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)(https://opensource.org/licenses/MIT)"
  }
  if (license == 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license == 'MIT') {
    return "https://opensource.org/licenses/MIT"
  }
  if (license == 'Mozilla') {
    return "https://opensource.org/licenses/MPL-2.0"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'Apache') {
    return "Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License.You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. "
  }
  if (license == 'MIT') {
    return "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
  }

  if (license === 'Mozilla') {
    return "MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you make the source available under MPL."
  }
}
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.describe}


## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)


## Installation

${data.install}

## Languages Used
    
${data.create}

## Usage

Provide instructions on how the application is used. Include screenshots

Example Syntax for screenshots ![alt text](assets/images/screenshot.png)


## Credits 
Made by ${data.contribution}


## Contact Info
* 🏆 ${data.email}
* 🏆 [Github Profile](https://github.com/${data.userName})


## License 
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
    
`;
}

module.exports = generateMarkdown;
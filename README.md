# _Better Doctor_

#### _async and API project for Epicodus_, _14 Feb. 2020_

#### By _**Patrick Kille**_

## Description

_This site will allow you to search for a doctor based on their medical issue or a name and find practices near their location to provide care._

## Specifications:


| Specification | Example Input | Example Output |
|:------------- |:-------------:| -------------------:|
| Site correctly calls API or returns specific error | api call | 200OK or error message |
| User inputs a condition and recieves a list of doctors who can help | fever | doctors |
| User inputs a name of a doctor and recieves a list of doctors with that name | Dan | all doctors with "Dan" in their name |
| User inputs multiple fields to search and recieves a list of doctors | Mary, sprain | all doctors named Mary who can assist with a sprain |
| If no results are returned inform the user | Dr Acula, One Way Blood Transfusion | No results found! |

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._


#### Install this application

1. Cloning
  * _First, clone this repository to your desktop by opening your terminal and entering the prompt "cd desktop" followed by pressing the enter(return) key. Then type "git clone https://github.com/PRKille/Better-Doctor.git" and press enter(return) again._
  * _Go to the [Better Doctor website](https://developer.betterdoctor.com/) and follow the instructions to recieve an API key._
  * _Navigate to the BetterDoctor folder in either your terminal or by double clicking the folder on your desktop._
  * _Create a .env file in the directory that contains one line "API_KEY = {Your API Key}"._
  * _In your terminal (making sure you're in the Better-Doctor directory) type "nmp install", press enter, and wait for installation to complete._
  * _Then type "npm start" into your terminal and press enter, the site should load up in a browser window._

2. Download
  * _In a web browswer navigate to https://github.com/PRKille/Better-Doctor.git._
  * _Click the green "Clone or download" button and selct "Download ZIP"_
  * _Go to the [Better Doctor website](https://developer.betterdoctor.com/) and follow the instructions to recieve an API key._
  * _Navigate to the BetterDoctor folder in either your terminal or by double clicking the folder on your desktop._
  * _Create a .env file in the directory that contains one line "API_KEY = {Your API Key}"._
  * _In your terminal (making sure you're in the Better-Doctor directory) type "nmp install", press enter, and wait for installation to complete._
  * _Then type "npm start" into your terminal and press enter, the site should load up in a browser window._

Following this, you may choose to open/view one or all of the documents within to test my project.

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery, npm, webpack, Jest, BetterDoctor API_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **Patrick Kille**
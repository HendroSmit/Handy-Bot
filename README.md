# Handy Bot

![Handy Bot Logo](Handy_Bot.png)

```
A general purpose Discord bot with an expanding list of features. Handy Bot builds a solid platform for making and extending your own Discord.js bot that can be hosted for free using Heroku on a Nodejs server.
```

## Table of Contents
- [Handy Bot](#handy-bot)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Fundamental Technologies](#fundamental-technologies)
  - [Features](#features)
  - [Setup](#setup)
  - [Commands](#commands)
  - [Project Status](#project-status)
  - [Room for Improvement](#room-for-improvement)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
  - [License](#license)


## General Information
- Easily extendable bot framework.
- General purpose, suitable for professional or casual servers.
- Community based.

## Fundamental Technologies

![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)



## Features
List the ready features here:
- Dice roller
- ... [ More to come ]


## Setup
The bot should be deployable to Heroku right out of the box from the main branch. Environmental variables for your bot key will need to be set and then you are free to build your bot.

Once build succeeds and you've deployed you need to register your commands with the following command in the Heroku CLI :
```
heroku run node deploy-commands.js -a handy-bot-discord
```


## Commands
The following / commands are registered with the following syntax

```
/dice input:[dice notation] whisper:[boolean] 
```


## Project Status

![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![Issues Open](https://img.shields.io/github/issues/HendroSmit/Handy-Bot.svg)
![Issues Closed](https://img.shields.io/github/issues-closed/HendroSmit/Handy-Bot.svg)


## Room for Improvement

Room for improvement:
- Fleshing out commands
- Documentation

To do:
- Finalize feature list going forward


## Acknowledgements
- This project was based on [this tutorial](https://discordjs.guide/creating-your-bot/).


## Contact
Created by [@HendroSmit](https://github.com/HendroSmit) - feel free to contact me!

![Follow](https://img.shields.io/github/followers/HendroSmit.svg?style=social&label=Follow&maxAge=2592000)


## License
This project is open source and available under the [MIT License](https://github.com/HendroSmit/Handy-Bot/blob/main/LICENSE).

![License](https://img.shields.io/github/license/HendroSmit/Handy-Bot.svg)

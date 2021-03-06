## Introduction: Deploying Websites

- Web hosting
- Deploy using GitHub pages
- Navigate file structures

## Web hosting

### What is Hosting?

We do not buy server and set up ourself but instead we rent

#### Type of Hosting

- Shared web hosting (Share server with order people)
- Dedicated web hosting
- Cloud hosting (Data center)

#### Platforms

- GitHub Pages (good static applications)
- Heroku (Good for more complex full-stack apps)
- DigitalOcean (Full control over cloud resources)

### What is a Domain Name?

- Computer talk to each other by IP adresses but human is name and word to identify and communicate
- Domain name is use to translate the number ( IP adress ) into word for human to remember. Or we can say domain name is a way to bridge communication gap between humans computers
- When a domain name is choosen it registed and it use for website or email account ex : www.github.com

#### How does it work ?

<img src="https://github.com/Punvireakroth/Web-Development-Progress/blob/main/Deploying_Websites/images/how_domain_name_work.png" alt="domain name">

- When choosing a domain name pick the one that is simple and easy to remember

## Deploy with GitHub Pages

Video: [What is GitHub Pages](https://www.youtube.com/watch?v=2MsN8gpT6jY)

## Command Line

Command line is a text based interface that take commands and passes them on to the computer's operating system to run.

- It can run program
- Navigate filesystem
- automate common tasks
- combine simple command to handle difficult tasks.
  In command line we refer to folder as directories
  File and directories in your computer are organized into a filesystem

#### Filesystem

A filesystem organize files and directories into a tree stucture

1. The first directory in filesystem is `root directory`
2. Each Parent directory can contain one or more files or directories

#### ls

First thing you see in the terminal is $ sign it is called `shell prompt`

`$ ls` the terminal would display our current directory's file and directory

#### pwd

`pwd` stand for print working directory. It show where you are in the filesystem. (The directory you are currently in are called working directory)

#### cd I

`cd` is stand for change directory. It's change the working directory we working on. cd take one argument which is the name of the directory we wanna change to.

#### cd II

We can move further than one step by replacing the arugument by directory path

`cd vireakroth\2022`

#### mkdir

We can create directory using `mkdir` command
We can create directory without moving into that directory by specify the directory path `$ mkdir media/tv`

#### touch

We can use `touch` command to create an empty file

#### Helper command

`clear` use to clear the previous command.
we can use tab key to auto complete the name we are meant to type.
we can use up or down arrow key to go to previous command.

# Table of content

1. [Basic Git Workflow](#basic-git-workflow)
2. [Git Operations](#How-to-Backtrack)

# Basic Git Workflow

## Introduction

Git allows you to make keep track of the change in our project and also allows us to refer to the version we want.

## git init

`init` mean initialize mean we're ready to keep track changes on the project.

## Git Workflow

Git project have three parts

1. `Working directory` where you creating, editing, deleting, and organizing files
2. `Staging Area` where you making changes and ready to commit
3. `Repository` Where git permanently store those change as different versions of the project.

   Git workflow consists of editing files in the `working directory`, adding files to the `staging area`, and saving changes to a Git `repository`.

## git status

When you making change in a file you can check it with `git status`

Note: when you see `untracked files` it mean Git see the file but has not stated tracking changes yet.

## git add

As I Mention above untracked files are files that git doesn't tracking yet so to make git track those file we need to use `git add "filename"`

## git diff

After we added files to the staging area. But we have typed and make changes after that so if we wanna know the difference between the working directory and staging area we can use `git diff filename`

## git commit

When we use `git commit` we finally store the files in staging area to the repository. it mean we save change a version we satisfy with.

## git log

we can refer back to the earlier version of a project by using `git log`

the output would display

Characters code, called a SHA, that uniquely identifies the commit. This appears in orange text.
The commit author (you!)
The date and time of the commit
The commit message

# How to Backtrack

## Intro

Git have features that allow us to undo mistakes when working on project.

## head commit

the commit your currently on or recently made commit is called `HEAD`

```
git show HEAD
```

## git checkout

```
git checkout HEAD filename
```

It's will restore your file in working directory.

## more git add

You can add more than one file to the staging area

```
git add file1 file2
```

## git reset I

# GitHub Repository Display (`grd`)

> A small library to get a GitHub user's top 100 repositories

## Table of Contents

- [GitHub Repository Display (`grd`)](#github-repository-display-grd)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [How to Install](#how-to-install)
    - [Dependencies](#dependencies)
    - [Installation steps](#installation-steps)
  - [How to Run](#how-to-run)
  - [Example Usage](#example-usage)

## About

`grd` is a small repository to return the top 100 repositories of a GitHub repo.

This `js` library is my first small attempt at trying to work with and use `js`
for web development.

This is honestly more of a test than anything formal.

## How to Install

`grd` is written with zero dependencies, and has been tested to work on Firefox
web browsers.

### Dependencies

- None

### Installation steps

1. Add this to the `<head>` of your `.html` file:
   `<script type="text/javascript" src="https://raw.githubusercontent.com/NicholasSynovic/web_grd_archive/main/grd.js" />`

## How to Run

The usable component of the library is the `grd(githubUsername, amount = 100)`
function.

Here is the documentation for this function:

```js
/*
    Return the top 100 repositories of a GitHub user
        githubUsername: string = A valid GitHub username
        amount: integer (min 0, max 100) = The number of repositories to return
*/
function grd(githubUsername, amount = 100) {...}
```

## Example Usage

**NOTE**: This won't render properly in the GitHub Markdown viewer. To see the
example visit this
[repo's GitHub page](https://nicholassynovic.github.io/web_grd_archive/).

The following args were passed into `grd`:

- `grd("NicholasSynovic", 5)`

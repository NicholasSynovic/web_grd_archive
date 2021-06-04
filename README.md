# GitHub Repository Displayer

[![](https://img.shields.io/badge/Language-JS-yellow)]()

## About

This is a simple JS tools to:

1. Go to the `[GitHub Repository REST API](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)` for a specific user
2. Get all of the public repositories for that user from the response JSON
3. Display them in a very basic webpage

## Use Case

This is simple JS code to make sure that anyone can incorporate a list of their GitHub repositories on their website.

## How to Use

1. Import the `grd.js` into your HTML by utilizing this `script` tag in the `<head>` element of your HTML:

- `<script type="text/javascript" src="https://raw.githubusercontent.com/NicholasSynovic/GitHub-Repository-Displayer/main/grd.js"></script>`

2. Call `grd(USERNAME)` where `USERNAME` is the username of a GitHub user.
3. Parse the returned `array` to get data.

### Note

Every index within the returned `array` is an `array` and is formatted as:

- `[REPOSITORY_NAME, URL, DESCRIPTION]`

## How to Contribute

There are several ways that you can contribue:

1. Report issues [here](https://github.com/NicholasSynovic/GitHub-Repository-Displayer/issues)
2. Fork the code and improve it!

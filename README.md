# Daily MD

Daily MD is a very lightweight VS Code Extension that generates Markdown files for notetaking.

## Summary

- [Daily MD](#daily-md)
  - [Summary](#summary)
  - [Repository](#repository)
  - [Features](#features)
  - [Extension Settings](#extension-settings)
  - [Known Issues](#known-issues)
  - [Changelog](#changelog)
  - [Built With](#built-with)
  - [License](#license)

## Repository

Daily MD is available on [Github](https://github.com/garonfok/daily-md) under the MIT license

## Features

- Quickly creates a preformatted Markdown file with sections for note taking, task managing, and questions
- Automatically titles each file in ISO 8601 format for simple organization (YYYY-MM-DD)
- Has options of either generating notes in current workspace directory or in preset default location, configured upon initial setup

## Extension Settings

Daily MD has the following configurable settings:

```JSON
//File naming schema, default follows ISO 8601 date format
"daily-md.defaultNoteName": "{YYYY}-{MM}-{DD}.md"

// Default file path
"daily-md.defaultNotePath": ""
```

## Known Issues

- Currently, updating daily-md.defaultNoteName in settings does not affect title naming schema

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

## Built With

- [Contributor Covenant](https://www.contributor-covenant.org/) - Used for the Code of Conduct
- [MIT](https://opensource.org/licenses/MIT) - Used to choose the license

## License

This project is licensed under the [MIT](LICENSE)
License.

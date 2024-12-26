# ScrapegraphAI Documentation

Official documentation for ScrapegraphAI - an intelligent web scraping and graph analysis tool.

<p align="center">
  <img src="img/logo_authors.png" alt="ScrapegraphAI Authors">
</p>

## Quick Links 🔗

- [Official API](https://scrapegraphai.com)
- [Documentation](https://docs.scrapegraphai.com)

## Development Setup

This documentation site is built with [Docusaurus](https://docusaurus.io/).

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This starts a local development server at `http://localhost:3000`. The site will automatically reload if you make changes to the source files.

### Building for Production

```bash
yarn build
```

This generates static content in the `build` directory, ready for deployment to any static hosting service.

## Deployment

### Using SSH

```bash
USE_SSH=true yarn deploy
```

### Without SSH

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

These commands will build the website and deploy it to the `gh-pages` branch. For GitHub Pages hosting, this is all you need to publish your site.

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

[License details to be added]

## Authors

This project is maintained by the ScrapegraphAI team. See the [Authors](AUTHORS.md) file for more information.

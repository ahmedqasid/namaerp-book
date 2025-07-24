# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What should claude do?
- The main usage of claude in this project is to apply minor formatting changes when requested to make the documentation files more appealing.
- Claude should keep the phrasing as close to original as possible, just add few formatting changes to make it look better but keep the original phrasing and structure.

## Project Overview

This is a VuePress-based documentation site for Nama ERP Book (namaerp-book), written primarily in Arabic. It contains comprehensive documentation for an ERP system with modules covering accounting, fixed assets, supply chain, and system introduction.

## Development Commands

### Documentation Development
- `npm run docs:dev` - Start development server on port 6789
- `npm run docs:clean-dev` - Start development server with clean cache
- `npm run docs:build` - Build documentation for production
- `npm run docs:update-package` - Update VuePress packages

### Deployment
- `./build-and-deploy.sh` - Production build and deployment script (Linux/server)

## Project Structure

```
docs/
├── README.md                    # Home page with navigation links
├── introduction/                # System introduction and general concepts
│   ├── introduction.md         # Main introduction file
│   └── *.png                   # Screenshot images
├── accounting/                  # Accounting system documentation
│   ├── accounting.md           # Main accounting documentation
│   └── acc-*.png              # Accounting screenshots
├── fixed-assets/               # Fixed assets module
│   ├── fixed-assets.md        # Fixed assets documentation
│   └── fixedassets-*.png      # Fixed assets screenshots
├── supply-chain/               # Supply chain module
│   ├── items.md               # Items/inventory documentation
│   └── sc-*.png               # Supply chain screenshots
└── titles-and-order-of-files.json # Navigation structure configuration
```

## Technical Architecture

### VuePress Configuration
- Uses VuePress 2.0 with Vite bundler
- Configured for Arabic RTL content
- Includes SEO, sitemap, and search plugins
- Uses Typesense for search indexing via `scripts/typesense-index.js`

### Content Management
- Documentation files are in Markdown format with frontmatter
- Images are stored alongside their respective documentation files
- Navigation structure is defined in `titles-and-order-of-files.json`
- Content is primarily in Arabic with RTL support

### Search Integration
- Typesense search integration for full-text search
- Search indexing script processes all Markdown files
- Extracts frontmatter and content for indexing

## Development Notes

### Content Guidelines
- All documentation is in Arabic and follows RTL layout
- Screenshots and images should be placed in the same directory as their corresponding Markdown files
- Use descriptive filenames for images (e.g., `acc-1.png`, `intro-search.png`)

### VuePress Specifics
- Home page uses VuePress frontmatter configuration
- Custom container plugins available for enhanced content presentation
- Theme uses default VuePress theme with customizations

### Deployment Process
The `build-and-deploy.sh` script handles:
1. Git operations (reset, checkout, pull)
2. NPM package installation  
3. Production build via `npm run docs:build`
4. File deployment to `/var/www/book/`
5. Permission management for web server

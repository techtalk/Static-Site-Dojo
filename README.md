# Training Catalog Website

A multilingual training catalog website built with [Eleventy (11ty)](https://www.11ty.dev/) static site generator. The website supports English and German languages and features a catalog of training courses organized by categories.

## Features

- ✅ **Static Site Generation** with Eleventy (11ty)
- 🌍 **Internationalization (i18n)** - English and German support
- 📚 **Training Categories** - Organize trainings into multiple categories
- ⭐ **Featured Trainings** - Highlight important trainings on the homepage
- 🔗 **Category Filtering** - Trainings can belong to multiple categories
- 📝 **Detailed Training Pages** - Each training has a dedicated page with full information
- 📋 **Sign-up Forms** - Each training page includes a registration form pointing to an external API
- 🎨 **Responsive Design** - Mobile-friendly layout with modern CSS
- 🔄 **Language Switcher** - Easy switching between English and German

## Project Structure

```
Static-Site-Dojo/
├── .eleventy.js              # Eleventy configuration
├── package.json              # Node.js dependencies
├── src/                      # Source files
│   ├── _data/               # Data files
│   │   ├── trainings.js     # Training data (EDIT THIS TO ADD TRAININGS)
│   │   ├── categories.js    # Category definitions
│   │   └── i18n.js          # Translations
│   ├── _includes/           # Layout templates
│   │   └── layout.njk       # Base layout
│   ├── css/                 # Stylesheets
│   │   └── style.css        # Main stylesheet
│   ├── en/                  # English pages
│   │   ├── index.njk        # English homepage
│   │   ├── trainings.njk    # Training detail pages
│   │   ├── categories.njk   # Category pages
│   │   └── categories-overview.njk
│   ├── de/                  # German pages
│   │   ├── index.njk        # German homepage
│   │   ├── trainings.njk    # Training detail pages
│   │   ├── categories.njk   # Category pages
│   │   └── categories-overview.njk
│   └── index.html           # Root redirect page
└── _site/                   # Generated site (gitignored)
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/techtalk/Static-Site-Dojo.git
cd Static-Site-Dojo
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with live reload:
```bash
npm start
```

The site will be available at `http://localhost:8080/`

### Build

Build the static site for production:
```bash
npm run build
```

The generated site will be in the `_site/` directory.

### Clean

Remove the generated site:
```bash
npm run clean
```

## How to Add a New Training

Adding a new training is simple - you only need to edit **one file**: `src/_data/trainings.js`

### Step-by-Step Guide

1. Open `src/_data/trainings.js` in your editor

2. Add a new training object to the array. Copy this template:

```javascript
{
  id: "your-training-id",           // Unique identifier (lowercase, use hyphens)
  featured: false,                  // Set to true to show on homepage
  title: {
    en: "Your Training Title",      // English title
    de: "Ihr Schulungstitel"        // German title
  },
  description: {
    en: "Training description in English...",
    de: "Schulungsbeschreibung auf Deutsch..."
  },
  categories: ["category-id-1", "category-id-2"], // One or more category IDs
  duration: {
    en: "3 days",
    de: "3 Tage"
  },
  level: {
    en: "Beginner",                 // Beginner, Intermediate, or Advanced
    de: "Anfänger"                  // Anfänger, Fortgeschritten, or Experte
  },
  prerequisites: {
    en: "What students need to know before taking this training",
    de: "Was Teilnehmer vor dieser Schulung wissen müssen"
  },
  learningOutcomes: {
    en: [
      "First learning outcome",
      "Second learning outcome",
      "Third learning outcome"
    ],
    de: [
      "Erstes Lernergebnis",
      "Zweites Lernergebnis",
      "Drittes Lernergebnis"
    ]
  },
  instructor: {
    en: "Instructor Name",
    de: "Dozent Name"
  }
}
```

3. Save the file

4. Rebuild the site:
```bash
npm run build
```

That's it! Your new training will automatically appear:
- On the homepage (if `featured: true`)
- On relevant category pages
- With its own detail page at `/en/trainings/your-training-id/` and `/de/trainings/your-training-id/`

### Available Categories

Current category IDs (defined in `src/_data/categories.js`):
- `web-development` - Web Development / Webentwicklung
- `cloud-computing` - Cloud Computing
- `devops` - DevOps
- `data-science` - Data Science / Datenwissenschaft
- `security` - Security / Sicherheit

### Example: Adding a New Training

```javascript
{
  id: "typescript-advanced",
  featured: true,
  title: {
    en: "Advanced TypeScript",
    de: "Fortgeschrittenes TypeScript"
  },
  description: {
    en: "Master advanced TypeScript features including generics, decorators, and advanced types.",
    de: "Meistern Sie fortgeschrittene TypeScript-Funktionen einschließlich Generics, Decorators und fortgeschrittene Typen."
  },
  categories: ["web-development"],
  duration: {
    en: "2 days",
    de: "2 Tage"
  },
  level: {
    en: "Advanced",
    de: "Experte"
  },
  prerequisites: {
    en: "Good knowledge of JavaScript and basic TypeScript",
    de: "Gute Kenntnisse in JavaScript und grundlegendes TypeScript"
  },
  learningOutcomes: {
    en: [
      "Master TypeScript generics",
      "Understand advanced type manipulation",
      "Use decorators effectively",
      "Implement design patterns in TypeScript"
    ],
    de: [
      "TypeScript-Generics beherrschen",
      "Fortgeschrittene Typmanipulation verstehen",
      "Decorators effektiv einsetzen",
      "Entwurfsmuster in TypeScript implementieren"
    ]
  },
  instructor: {
    en: "Jane Smith",
    de: "Jane Smith"
  }
}
```

## Adding a New Category

If you need to add a new training category, edit `src/_data/categories.js`:

```javascript
{
  id: "new-category-id",
  name: {
    en: "Category Name",
    de: "Kategoriename"
  },
  description: {
    en: "Category description in English",
    de: "Kategoriebeschreibung auf Deutsch"
  }
}
```

## Sign-up Form Configuration

Each training detail page includes a sign-up form that submits to an external API. The form is configured in the training detail templates (`src/en/trainings.njk` and `src/de/trainings.njk`).

Current configuration:
- **Action URL**: `https://api.example.com/register`
- **Method**: POST
- **Hidden fields**: `training_id`, `language`
- **User fields**: `name`, `email`, `company`, `phone`

To change the API endpoint, edit the `action` attribute in both template files:
```html
<form action="https://your-api.example.com/register" method="POST">
```

## Customization

### Styling

Edit `src/css/style.css` to customize the appearance of the website. The current design uses:
- A purple gradient header
- Card-based layouts for trainings and categories
- Responsive grid layouts
- Modern, clean typography

### Translations

Add or modify translations in `src/_data/i18n.js`. Each key should have both `en` and `de` values.

### Adding More Languages

1. Create a new language directory in `src/` (e.g., `src/fr/` for French)
2. Copy the page templates from `src/en/` or `src/de/`
3. Update the `lang` frontmatter in each template
4. Add translations to `src/_data/i18n.js`
5. Add language data to trainings and categories
6. Update the language switcher in `src/_includes/layout.njk`

## Deployment

The generated static site in `_site/` can be deployed to any static hosting service:

- **GitHub Pages**: Enable Pages in repository settings
- **Netlify**: Connect your repository and set build command to `npm run build`
- **Vercel**: Import project and set build command to `npm run build`
- **AWS S3**: Upload the `_site/` directory contents
- **Any web server**: Upload `_site/` contents to your web root

## Technology Stack

- **Eleventy 2.0.1** - Static site generator
- **Nunjucks** - Template engine
- **Vanilla CSS** - No frameworks, pure CSS
- **Node.js** - JavaScript runtime

## Browser Support

The website works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build (`npm run build`)
5. Submit a pull request

## Support

For questions or issues, please open an issue in the GitHub repository.

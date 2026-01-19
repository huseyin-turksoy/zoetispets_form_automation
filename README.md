# Zoetis Pets Form Automation

## Project Overview

This is an automated testing project for Zoetis Pets form submissions. It uses Playwright to automate and validate form filling across multiple pet health assessment questionnaires in various locales and languages. The project ensures consistent functionality and user experience across different regions and language versions.

## Used Techniques

- **Playwright**: End-to-end testing framework for browser automation
  - Cross-browser support (Firefox configured as default)
  - Video and screenshot capture on test failures
  - HTML reporting for test results
  
- **JavaScript (CommonJS)**: Test automation scripting
- **Automated Form Interaction**: 
  - Cookie/consent banner handling
  - Checkbox selection
  - Pop-up dismissal
  - Dynamic element waiting

## Covered Locales

The automation covers the following locales and language combinations:

- **en-gb** - English (United Kingdom)
- **en-au** - English (Australia)
- **en-ca** - English (Canada)
- **de-de** - German (Germany)
- **es-es** - Spanish (Spain)
- **fr-fr** - French (France)
- **it-it** - Italian (Italy)
- **pl-pl** - Polish (Poland)
- **fr-ca** - French (Canada)

## Form Names

The project automates testing for the following pet health assessment forms:

1. **Cat Arthritis Form** (`cat_arthritis_form.spec.js`)
   - Covers cat arthritis assessments across all supported locales

2. **Dog Arthritis Form** (`dog_arthritis_form.spec.js`)
   - Covers dog arthritis assessments

3. **Dog Dermatology Form** (`dog_derm_form.spec.js`)
   - Covers dog dermatology (skin health) assessments

4. **Knowledge Builder** (`knowledge_bilder.spec.js`)
   - Covers pet knowledge/educational content

5. **Newsletter Form** (`newsletter_form.spec.js`)
   - Covers newsletter subscription automation

6. **Pets Reminder Form** (`pets_reminder_form.spec.js`)
   - Covers pet reminder/notification setup

## Configuration

- **Browser**: Firefox (headless mode)
- **Viewport**: 1280 x 720
- **Timeout**: 70 seconds per test
- **Expect Timeout**: 7 seconds
- **Reporter**: HTML report (automatically generated in `playwright-report/`)
- **Video**: Captured only on test failure
- **Screenshots**: Captured only on test failure

## Project Structure

```
├── tests/                          # Test specification files
│   ├── cat_arthritis_form.spec.js
│   ├── dog_arthritis_form.spec.js
│   ├── dog_derm_form.spec.js
│   ├── knowledge_bilder.spec.js
│   ├── newsletter_form.spec.js
│   └── pets_reminder_form.spec.js
├── playwright-report/              # Generated HTML test reports
├── test-results/                   # Test result artifacts
├── package.json                    # Project dependencies
├── playwright.config.js            # Playwright configuration
└── README.md                       # This file
```

## Dependencies

- `@playwright/test`: ^1.57.0
- `@types/node`: ^25.0.3

## License

ISC

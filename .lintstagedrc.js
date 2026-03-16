export default {
  "*.{js,jsx,ts,tsx}": [
    "npm run lint-files-fix",
    "npm run type-check",
    "npm run format",
  ],
  "*.{json,md}": ["npm run format"],
  "*.html": ["npm run format"],
};

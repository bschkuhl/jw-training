# Mechanical Engineering & Additive Manufacturing Training Frontend

This project is a Vue 3 frontend application built with Vite, showcasing training programs related to Mechanical Engineering, 3D Printing, and Additive Manufacturing (AM).

## Features

*   **Modern Layout:** Based on an initial HTML/CSS example, featuring sections for Hero, Features/Courses, Media Showcase, Contact Form, and Footer.
*   **Grid Layout:** Uses CSS Grid for responsive arrangement, including a main content area and a sidebar.
*   **Parallax Effect:** Implements a CSS-based parallax background effect using a shared image (`monkey.webp`) across multiple sections.
*   **Internationalization (i18n):** Uses `vue-i18n` for multi-language support. Currently supports English (en), German (de), and Vietnamese (vi).
*   **Component-Based:** Structured using Vue 3 Composition API (`<script setup>`) and single-file components.
*   **Styling:** Uses global CSS (`src/style.css`) including Font Awesome icons (via CDN).

## Technologies Used

*   [Vue 3](https://vuejs.org/) (Composition API)
*   [Vite](https://vitejs.dev/)
*   [vue-i18n](https://vue-i18n.intlify.dev/) (v9+ for Composition API)
*   [Font Awesome](https://fontawesome.com/) (via CDN)
*   CSS (including Flexbox, Grid, Parallax techniques)

## Project Setup

1.  **Clone the repository (if applicable).**
2.  **Navigate to the project directory:**
    ```bash
    cd vue-i18n-frontend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Place Images:** Ensure `logo.webp` and `monkey.webp` are placed inside the `public/` directory.

## Running the Development Server

```bash
npm run dev
```

This will start the Vite development server, typically available at `http://localhost:5173` (the port may vary).

## Building for Production

```bash
npm run build
```

This compiles the application for production into the `dist/` directory.

## Internationalization (i18n)

*   **Locale Files:** Language translations are stored in JSON files within the `src/locales/` directory (e.g., `en.json`, `de.json`, `vi.json`).
*   **Adding/Modifying Translations:** Edit the relevant `.json` file to update text for a specific language. Keys should match across all files.
*   **Adding New Languages:**
    1.  Create a new `[lang-code].json` file in `src/locales/`.
    2.  Import and add the new messages object to the `messages` configuration within `src/main.js`.
    3.  Add a button for the new language in the language switcher component (`src/App.vue`).
    4.  Update the `localStorage` check in `src/App.vue` to include the new language code.
*   **Default Language:** The default language is set to German (`'de'`) in `src/main.js`.

## Notes

*   The LinkedIn feed and Calendar in the sidebar are currently static placeholders within `src/components/Sidebar.vue`.
*   The contact form in `src/components/ContactForm.vue` includes basic validation and logs data to the console; it does not currently submit data to a backend.
*   Placeholder content (text in square brackets `[...]`, image/video URLs) should be replaced with actual project content.

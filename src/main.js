import './style.css' // Import the global styles

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// Import locale messages
import en from './locales/en.json'
import de from './locales/de.json'
import vi from './locales/vi.json' // Import Vietnamese messages

// Function to detect browser language or default (still useful for potential future logic or preference detection)
const getBrowserLocale = () => {
  const navigatorLocale = navigator.language || navigator.userLanguage;
  const lang = navigatorLocale.split('-')[0];
  if (lang === 'de') return 'de';
  if (lang === 'vi') return 'vi'; // Check for Vietnamese
  return 'en'; // Default to 'en'
};

// Setup i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'de', // Set default locale to German
  fallbackLocale: 'en', // Fallback locale remains English
  messages: {
    en,
    de,
    vi // Include Vietnamese messages
  }
});

const app = createApp(App);

app.use(i18n); // Use i18n plugin
app.mount('#app');

// Note: The localStorage logic in App.vue will still override
// this default if the user has previously selected a different language.

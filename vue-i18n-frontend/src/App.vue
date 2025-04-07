<script setup>
import { onMounted, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import MediaSection from './components/MediaSection.vue';
import ContactForm from './components/ContactForm.vue';
import AppFooter from './components/AppFooter.vue';

const { locale } = useI18n();

function setLocale(lang) {
  locale.value = lang;
  // Optionally, save preference to localStorage
  localStorage.setItem('user-locale', lang);
}

// Load preference on app start
const savedLocale = localStorage.getItem('user-locale');
if (savedLocale && (savedLocale === 'en' || savedLocale === 'de' || savedLocale === 'vi')) {
  locale.value = savedLocale;
}

// Watch for locale changes and update the HTML lang attribute
watchEffect(() => {
  document.documentElement.lang = locale.value;
});

// Add smooth scrolling logic on component mount
onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // Check if it's just '#' or an invalid selector
            if (!targetId || targetId === '#') return; 
            
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' 
                    });
                }
            } catch (error) {
                console.error("Error finding or scrolling to element:", targetId, error);
            }
        });
    });
});

</script>

<template>
  <div id="app-wrapper">
    <AppHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <MediaSection />
      <ContactForm />
    </main>
    <AppFooter />

    <!-- Simple Language Switcher -->
    <div class="language-switcher">
      <button @click="setLocale('en')" :class="{ active: locale === 'en' }">EN</button>
      <button @click="setLocale('de')" :class="{ active: locale === 'de' }">DE</button>
      <button @click="setLocale('vi')" :class="{ active: locale === 'vi' }">VI</button>
    </div>
  </div>
</template>

<style scoped>
/* Add some basic styling for the language switcher */
.language-switcher {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px;
  border-radius: 5px;
  z-index: 101; /* Above header */
}

.language-switcher button {
  background: none;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  opacity: 0.7;
}

.language-switcher button.active {
  font-weight: bold;
  opacity: 1;
  text-decoration: underline;
}

.language-switcher button:hover {
    opacity: 1;
}

/* Ensure main content area respects the fixed header */
main {
  /* padding-top should match the header's height + padding if needed,
     but global body padding-top might be sufficient */
}
</style>

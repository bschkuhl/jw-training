<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const currentYear = computed(() => new Date().getFullYear());

// Example social links - replace with your actual links
const socialLinks = [
  { href: '#', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: '#', icon: 'fab fa-twitter', label: 'Twitter' },
  { href: '#', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: '#', icon: 'fab fa-youtube', label: 'YouTube' },
];

</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3>{{ t('footer.brandTitle') }}</h3>
          <p>{{ t('footer.tagline') }}</p>
          <div class="social-links">
            <a v-for="link in socialLinks" :key="link.label" :href="link.href" :aria-label="link.label">
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
        <div class="footer-column">
          <h3>{{ t('footer.contactTitle') }}</h3>
          <!-- Use v-html carefully for address if it contains <br> -->
          <p v-html="t('footer.address')"></p>
          <p>{{ t('footer.email') }}<br>{{ t('footer.phone') }}</p>
        </div>
        <div class="footer-column">
          <h3>{{ t('footer.linksTitle') }}</h3>
          <ul class="footer-links">
            <li><a href="#home">{{ t('header.nav.home') }}</a></li>
            <li><a href="#features">{{ t('header.nav.features') }}</a></li>
            <li><a href="#media">{{ t('header.nav.media') }}</a></li>
            <li><a href="#contact">{{ t('header.nav.contact') }}</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
         <!-- Using parameter binding for the year -->
        <p>{{ t('footer.copyright', { year: currentYear }) }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer-specific styles can go here if needed */
p {
  /* Ensure correct styling within footer columns */
   color: var(--color-secondary);
}
.footer-column h3 {
   color: white;
}
</style> 
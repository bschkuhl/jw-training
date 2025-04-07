<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <header>
        <div class="container header-container">
            <div class="logo">
                 <!-- Add a wrapper div for backdrop -->
                 <div class="logo-backdrop">
                     <img src="/logo.webp" alt="Company Logo" class="header-logo-img">
                 </div>
                 <div class="logo-text">{{ t('header.brand') }}</div>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">{{ t('header.nav.home') }}</a></li>
                    <li><a href="#features">{{ t('header.nav.features') }}</a></li>
                    <li><a href="#media">{{ t('header.nav.media') }}</a></li>
                    <li><a href="#contact">{{ t('header.nav.contact') }}</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
/* Style the backdrop */
.logo-backdrop {
    background-color: white; /* Or a light grey like #f0f0f0 */
    padding: 5px; /* Adjust padding as needed */
    border-radius: 4px; /* Optional: match other border-radius */
    margin-right: 15px;
    display: flex; /* To contain the image */
    align-items: center;
    justify-content: center;
}

/* Style the logo image within the backdrop */
.logo .logo-backdrop .header-logo-img { /* Increased specificity */
    display: block;
    /* Set height to 50px (50px + 2*5px padding = 60px total height) */
    height: 50px; 
    min-height: 50px;
    width: auto;
    /* No margin needed as backdrop has margin */
}

.logo {
    display: flex;
    align-items: center;
}

/* Removed styles for the old placeholder div/icon */
</style> 
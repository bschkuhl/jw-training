<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section id="home" class="hero">
        <div class="container">
            <h1>{{ t('hero.title') }}</h1>
            <p>{{ t('hero.subtitle') }}</p>
            <div class="hero-buttons">
                <a href="#features" class="btn btn-primary">{{ t('hero.button1') }}</a>
                <a href="#contact" class="btn btn-secondary">{{ t('hero.button2') }}</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Hero-specific styles can go here if needed */
</style> 
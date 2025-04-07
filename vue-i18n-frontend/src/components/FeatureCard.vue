<script setup>
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  titleKey: {
    type: String,
    required: true,
  },
  descriptionKey: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="feature-card">
    <div class="feature-icon">
      <i :class="['fas', iconClass]"></i>
    </div>
    <h3>{{ t(titleKey) }}</h3>
    <p>{{ t(descriptionKey) }}</p>
  </div>
</template>

<style scoped>
/* FeatureCard-specific styles can go here if needed */
</style> 
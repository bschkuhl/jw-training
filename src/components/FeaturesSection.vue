<script setup>
import { useI18n } from 'vue-i18n';
import FeatureCard from './FeatureCard.vue';

const { t } = useI18n();

const features = [
  {
    icon: 'fa-lightbulb',
    titleKey: 'features.feature1.title',
    descriptionKey: 'features.feature1.description',
  },
  {
    icon: 'fa-layer-group',
    titleKey: 'features.feature2.title',
    descriptionKey: 'features.feature2.description',
  },
  {
    icon: 'fa-users-gear',
    titleKey: 'features.feature3.title',
    descriptionKey: 'features.feature3.description',
  },
];
</script>

<template>
  <section id="features" class="section features">
    <div class="container">
      <div class="section-title">
        <h2>{{ t('features.title') }}</h2>
      </div>
      <div class="features-grid">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :icon-class="feature.icon"
          :title-key="feature.titleKey"
          :description-key="feature.descriptionKey"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* FeaturesSection-specific styles can go here if needed */
</style> 
<script setup>
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  mediaType: { // 'image' or 'video'
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: '',
  },
  videoPoster: {
      type: String,
      default: '',
  },
  videoSrc: { // Add actual video sources here or pass via props
      type: String,
      default: '',
  },
  titleKey: {
    type: String,
    required: true,
  },
  descriptionKey: {
    type: String,
    required: true,
  },
  buttonKey: {
    type: String,
    required: true,
  },
  buttonLink: {
    type: String,
    default: '#',
  },
});

</script>

<template>
  <div class="media-card">
    <div v-if="mediaType === 'image'" class="media-image" :style="{ backgroundImage: `url(${imageSrc})` }"></div>
    <div v-else-if="mediaType === 'video'" class="media-video">
        <video controls width="100%" :poster="videoPoster">
            <source v-if="videoSrc" :src="videoSrc" type="video/mp4"> 
            <!-- Add other source types if needed -->
            {{ t('media.video.browserSupport') || 'Your browser does not support the video tag.' }}
        </video>
    </div>
    <div class="media-content">
      <h3>{{ t(titleKey) }}</h3>
      <p>{{ t(descriptionKey) }}</p>
      <a :href="buttonLink" class="btn btn-secondary">{{ t(buttonKey) }}</a>
    </div>
  </div>
</template>

<style scoped>
/* MediaCard-specific styles can go here if needed */
.media-image {
    min-height: 240px; /* Ensure div has height even if bg image fails */
}
</style> 
<script setup>
import { useI18n } from 'vue-i18n';
import MediaCard from './MediaCard.vue';
import Sidebar from './Sidebar.vue';

const { t } = useI18n();

// Placeholder data - replace with actual data or props
const mediaItems = [
  {
    type: 'image',
    src: 'https://placehold.co/800x500/00A676/white?text=Image+1',
    titleKey: 'media.image1.title',
    descriptionKey: 'media.image1.description',
    buttonKey: 'media.image1.button',
    link: '#'
  },
  {
    type: 'video',
    poster: 'https://placehold.co/800x500/F26A1B/white?text=Video+Placeholder',
    // videoSrc: 'path/to/your-video.mp4', // Add your actual video source
    titleKey: 'media.video.title',
    descriptionKey: 'media.video.description',
    buttonKey: 'media.video.button',
    link: '#'
  },
  {
    type: 'image',
    src: 'https://placehold.co/800x500/1E2A38/white?text=Image+2',
    titleKey: 'media.image2.title',
    descriptionKey: 'media.image2.description',
    buttonKey: 'media.image2.button',
    link: '#'
  },
];

</script>

<template>
  <section id="media" class="section content-section">
    <div class="container">
      <div class="section-title">
        <h2>{{ t('media.title') }}</h2>
      </div>
      <div class="grid grid-2-1">
        <!-- Main Content - Media -->
        <div class="main-content">
          <MediaCard
            v-for="(item, index) in mediaItems"
            :key="index"
            :media-type="item.type"
            :image-src="item.src"
            :video-poster="item.poster"
            :video-src="item.videoSrc" 
            :title-key="item.titleKey"
            :description-key="item.descriptionKey"
            :button-key="item.buttonKey"
            :button-link="item.link"
          />
        </div>

        <!-- Sidebar -->
        <Sidebar />

      </div>
    </div>
  </section>
</template>

<style scoped>
/* MediaSection-specific styles can go here if needed */
</style> 
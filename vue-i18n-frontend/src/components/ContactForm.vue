<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const handleSubmit = () => {
  // Handle form submission logic here
  // e.g., send data to an API
  console.log('Form submitted:', formData.value);
  alert('Form submitted (check console)!'); // Placeholder feedback
  // Reset form after submission (optional)
  // formData.value = { name: '', email: '', subject: '', message: '' };
};
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="section-title">
        <h2>{{ t('contact.title') }}</h2>
      </div>
      <div class="contact-form">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input 
              type="text" 
              class="form-control" 
              :placeholder="t('contact.form.namePlaceholder')" 
              v-model="formData.name" 
              required
            >
          </div>
          <div class="form-group">
            <input 
              type="email" 
              class="form-control" 
              :placeholder="t('contact.form.emailPlaceholder')" 
              v-model="formData.email" 
              required
            >
          </div>
          <div class="form-group">
            <input 
              type="text" 
              class="form-control" 
              :placeholder="t('contact.form.subjectPlaceholder')" 
              v-model="formData.subject"
            >
          </div>
          <div class="form-group">
            <textarea 
              class="form-control" 
              :placeholder="t('contact.form.messagePlaceholder')" 
              v-model="formData.message" 
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">{{ t('contact.form.submitButton') }}</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ContactForm-specific styles can go here if needed */
</style> 
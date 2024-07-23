<template>
  <div
    class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
  >
    <h3 class="text-xl font-semibold mb-4 text-primary-600">{{ name }}</h3>
    <p class="text-accent-500 mb-2 font-medium">{{ achievement }}</p>
    <p class="text-neutral-700 italic">"{{ testimonial }}"</p>
    <div class="mt-4 flex justify-between items-center">
      <span class="text-sm text-neutral-500">{{ institution }}</span>
      <a
        :href="profileLink"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary-600 hover:text-primary-700 transition-colors duration-200"
      >
        View Profile
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  achievement: String,
  testimonial: String,
  institution: String,
  profileLink: String,
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>

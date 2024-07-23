<template>
  <div
    class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
  >
    <img
      :src="avatar"
      :alt="name"
      class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-500"
    />
    <h3 class="text-xl font-semibold text-center mb-2 text-primary-600">
      {{ name }}
    </h3>
    <p class="text-accent-500 text-center mb-4">{{ title }}</p>
    <p class="text-neutral-700">{{ bio }}</p>
  </div>
</template>

<script setup>
defineProps({
  avatar: String,
  name: String,
  title: String,
  bio: String,
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

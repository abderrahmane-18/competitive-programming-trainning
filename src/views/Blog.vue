<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-6xl font-bold text-primary-600 mb-4 animate-pulse">Blog</h1>
    <p class="text-4xl font-semibold text-accent-500 animate-fadeIn">
      Coming Soon!
    </p>
  </div>
</template>

<script setup>
// No script needed for this version
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

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

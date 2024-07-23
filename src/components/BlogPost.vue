<template>
  <article
    class="bg-white rounded-lg shadow-xl p-6 mb-8 border border-neutral-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
  >
    <h2
      class="text-3xl font-bold mb-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
    >
      {{ title }}
    </h2>
    <p class="text-neutral-500 mb-4">{{ formatDate(date) }}</p>
    <div class="prose max-w-none text-neutral-700" v-html="content"></div>
    <div class="mt-6 flex justify-between items-center">
      <router-link
        :to="'/blog/' + slug"
        class="text-accent-500 hover:text-accent-600 transition-colors duration-200 font-medium"
        >Read more</router-link
      >
      <div class="flex space-x-4">
        <button
          @click="like"
          class="flex items-center text-neutral-600 hover:text-accent-500 transition-colors duration-200"
        >
          <svg
            class="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
            ></path>
          </svg>
          {{ likes }}
        </button>
        <button
          @click="share"
          class="flex items-center text-neutral-600 hover:text-accent-500 transition-colors duration-200"
        >
          <svg
            class="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
            ></path>
          </svg>
          Share
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  date: String,
  content: String,
  slug: String,
});

const likes = ref(0);

const like = () => {
  likes.value++;
};

const share = () => {
  // Implement share functionality
  alert("Sharing functionality to be implemented");
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
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

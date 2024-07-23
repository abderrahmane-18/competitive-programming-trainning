<template>
  <div>
    <section class="text-center mb-16 animate-fadeIn">
      <h1 class="text-5xl font-bold mb-6 text-primary-600 leading-tight">
        Welcome to Competitive Programming Training
      </h1>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-neutral-600">
        Enhance your problem-solving skills and prepare for coding competitions
        with our expert-led training program.
      </p>
      <router-link
        to="/roadmap"
        class="bg-accent-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl inline-block transform hover:scale-105"
      >
        Start Your Journey
      </router-link>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        class="bg-white rounded-lg shadow-xl p-6 border border-neutral-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
        style="animation-delay: 0.2s"
      >
        <h2 class="text-2xl font-semibold mb-4 text-primary-600">
          Upcoming Events
        </h2>
        <EventCalendar />
      </div>
      <div
        class="bg-white rounded-lg shadow-xl p-6 border border-neutral-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
        style="animation-delay: 0.4s"
      >
        <h2 class="text-2xl font-semibold mb-4 text-primary-600">
          Latest News
        </h2>
        <ul>
          <li
            v-for="news in latestNews"
            :key="news.id"
            class="mb-4 pb-4 border-b border-neutral-200 last:border-b-0"
          >
            <h3
              class="text-lg font-semibold mb-1 text-neutral-800 hover:text-primary-600 transition-colors duration-200"
            >
              {{ news.title }}
            </h3>
            <p class="text-neutral-600">{{ news.excerpt }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EventCalendar from "../components/EventCalendar.vue";

const latestNews = ref([
  {
    id: 1,
    title: "New Advanced Algorithms Course",
    excerpt:
      "Starting next month, dive deep into advanced algorithmic concepts.",
  },
  {
    id: 2,
    title: "Regional Contest Victory",
    excerpt:
      "Our team secured first place in the annual regional programming contest.",
  },
  {
    id: 3,
    title: "Interview with Top Competitor",
    excerpt:
      "Read our exclusive interview with the world's #1 ranked competitive programmer.",
  },
]);
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

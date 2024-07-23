<template>
  <div
    class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <h3 class="text-xl font-semibold mb-4 text-primary-600">Upcoming Events</h3>
    <ul>
      <li
        v-for="event in events"
        :key="event.id"
        class="mb-2 animate-fadeIn"
        :style="{ animationDelay: `${event.id * 0.1}s` }"
      >
        <span class="font-semibold text-accent-500"
          >{{ formatDate(event.date) }}:</span
        >
        <span class="text-neutral-700">{{ event.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
  {
    id: 1,
    date: "2024-07-27",
    title: "Introduction to Competitive Programming",
  },
  {
    id: 2,
    date: "2024-08-03",
    title: "Advanced Graph Algorithms (Coming Soon)",
  },
  {
    id: 3,
    date: "2024-08-10",
    title: "Dynamic Programming Techniques (Coming Soon)",
  },
]);

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
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

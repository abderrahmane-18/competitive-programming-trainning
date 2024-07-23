<template>
  <div>
    <h1 class="text-4xl font-bold mb-6 text-primary-600 animate-fadeIn">
      Training Roadmap
    </h1>
    <div
      v-for="(level, index) in levels"
      :key="level.id"
      class="mb-8 animate-fadeIn"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <h2 class="text-2xl font-semibold mb-4 text-primary-600">
        {{ level.name }}
      </h2>
      <p class="mb-4 text-neutral-700">{{ level.description }}</p>
      <h3 class="text-xl font-semibold mb-2 text-accent-500">Topics:</h3>
      <ul
        v-if="!level.comingSoon"
        class="list-disc list-inside text-neutral-700"
      >
        <li v-for="topic in level.topics" :key="topic">{{ topic }}</li>
      </ul>
      <p v-else class="text-lg font-semibold text-accent-500 animate-pulse">
        Coming Soon!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const levels = ref([
  {
    id: 1,
    name: "Level 1: Fundamentals",
    description: "Build a strong foundation in competitive programming basics.",
    topics: [
      "Bruteforce / Greedy",
      "STL Data structures",
      "Frequency Array / Cumulative sum",
      "Two pointers / Complete Search / Binary Search",
      "Bit Masks",
      "Introduction to DP (Dynamic Programming)",
      "Introduction to Graphs",
    ],
    comingSoon: false,
  },
  {
    id: 2,
    name: "Level 2: Intermediate",
    description: "Deepen your understanding and tackle more complex problems.",
    topics: [],
    comingSoon: true,
  },
  {
    id: 3,
    name: "Level 3: Advanced",
    description:
      "Master advanced techniques and prepare for top-tier competitions.",
    topics: [],
    comingSoon: true,
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

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

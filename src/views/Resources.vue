<template>
  <div>
    <h1 class="text-4xl font-bold mb-6 text-primary-600 animate-fadeIn">
      Resources
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="animate-fadeIn" style="animation-delay: 0.2s">
        <h2 class="text-2xl font-semibold mb-4 text-primary-600">
          Online Judges
        </h2>
        <ul class="list-disc list-inside text-neutral-700">
          <li v-for="judge in onlineJudges" :key="judge.name">
            <a
              :href="judge.url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary-600 transition-colors duration-200"
            >
              {{ judge.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="animate-fadeIn" style="animation-delay: 0.4s">
        <h2 class="text-2xl font-semibold mb-4 text-primary-600">
          Learning Materials
        </h2>
        <ul class="list-disc list-inside text-neutral-700">
          <li v-for="material in learningMaterials" :key="material.title">
            <a
              :href="material.url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary-600 transition-colors duration-200"
            >
              {{ material.title }}
            </a>
            <span class="text-neutral-500"> by {{ material.author }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const onlineJudges = ref([
  { name: "Codeforces", url: "https://codeforces.com/problemset" },
  { name: "Cses", url: "https://cses.fi/problemset/" },
  { name: "LeetCode", url: "https://leetcode.com/accounts/login/" },
]);

const learningMaterials = ref([
  {
    title: "Competitive Programmer's Handbook",
    author: "Antti Laaksonen",
    url: "https://cses.fi/book/index.php",
  },
  {
    title: "Algorithms for Competitive Programming",
    author: "E-Maxx",
    url: "https://cp-algorithms.com/",
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

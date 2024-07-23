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
          <li v-for="judge in onlineJudges" :key="judge">{{ judge }}</li>
        </ul>
      </div>
      <div class="animate-fadeIn" style="animation-delay: 0.4s">
        <h2 class="text-2xl font-semibold mb-4 text-primary-600">
          Learning Materials
        </h2>
        <ul class="list-disc list-inside text-neutral-700">
          <li v-for="material in learningMaterials" :key="material">
            {{ material }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const onlineJudges = ref([
  "Codeforces",
  "AtCoder",
  "LeetCode",
  "HackerRank",
  "SPOJ",
]);

const learningMaterials = ref([
  "Introduction to Algorithms by CLRS",
  "Competitive Programming 3 by Steven Halim",
  "Algorithms course on Coursera",
  "Competitive Programmer's Handbook by Antti Laaksonen",
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

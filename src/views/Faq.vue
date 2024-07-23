<template>
  <div>
    <h1 class="text-4xl font-bold mb-6 text-primary-600 animate-fadeIn">
      Frequently Asked Questions
    </h1>
    <div
      v-for="(faq, index) in faqs"
      :key="faq.id"
      class="mb-6 animate-fadeIn"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <h2 class="text-2xl font-semibold mb-2 text-primary-600">
        {{ faq.question }}
      </h2>
      <p class="text-neutral-700">{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    id: 1,
    question: "What is competitive programming?",
    answer:
      "Competitive programming is a mind sport where participants solve algorithmic problems within a given time limit. It combines problem-solving skills with programming proficiency.",
  },
  {
    id: 2,
    question: "How can I get started with competitive programming?",
    answer:
      "Start by learning a programming language (like C++ or Python), practice basic algorithms and data structures, and then participate in online contests on platforms like Codeforces or AtCoder.",
  },
  {
    id: 3,
    question: "What are the benefits of competitive programming?",
    answer:
      "Benefits include improved problem-solving skills, faster coding abilities, better algorithmic thinking, preparation for technical interviews, and networking opportunities with like-minded individuals.",
  },
  {
    id: 4,
    question: "How often are training sessions held?",
    answer:
      "We typically hold training sessions weekly. Check our event calendar for the most up-to-date schedule.",
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

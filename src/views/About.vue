<template>
  <div>
    <h1 class="text-4xl font-bold mb-6 text-primary-600 animate-fadeIn">
      About Competitive Programming
    </h1>
    <p
      class="mb-6 text-lg text-neutral-700 animate-fadeIn"
      style="animation-delay: 0.2s"
    >
      Competitive programming is a mind sport that challenges participants to
      solve complex algorithmic problems within strict time constraints. It's an
      excellent way to improve problem-solving skills, coding efficiency, and
      algorithmic thinking.
    </p>
    <h2
      class="text-2xl font-semibold mb-4 text-primary-600 animate-fadeIn"
      style="animation-delay: 0.4s"
    >
      Benefits
    </h2>
    <ul
      class="list-disc list-inside mb-6 text-neutral-700 animate-fadeIn"
      style="animation-delay: 0.6s"
    >
      <li>Enhances problem-solving abilities</li>
      <li>Improves coding speed and efficiency</li>
      <li>Develops strong algorithmic thinking</li>
      <li>Prepares for technical interviews</li>
      <li>Builds a global network of like-minded individuals</li>
    </ul>
    <h2
      class="text-2xl font-semibold mb-4 text-primary-600 animate-fadeIn"
      style="animation-delay: 0.8s"
    >
      Success Stories
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StudentShowcase
        v-for="student in successStories"
        :key="student.id"
        :name="student.name"
        :achievement="student.achievement"
        :testimonial="student.testimonial"
        :style="{ animationDelay: `${1 + student.id * 0.2}s` }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import StudentShowcase from "../components/StudentShowcase.vue";

const successStories = ref([
  {
    id: 1,
    name: "Alice Johnson",
    achievement: "Secured a job at Google",
    testimonial:
      "Competitive programming gave me the skills and confidence to ace my technical interviews.",
  },
  {
    id: 2,
    name: "Bob Smith",
    achievement: "Won the International Collegiate Programming Contest",
    testimonial:
      "The training I received here was instrumental in my success at international competitions.",
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

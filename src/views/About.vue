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
  </div>
</template>

<script setup>
import { ref } from "vue";
import MentorProfile from "../components/MentorProfile.vue";

const mentors = ref([
  {
    id: 1,
    name: "Dr. Alice Johnson",
    title: "Lead Instructor",
    bio: "Dr. Johnson has over 10 years of experience in competitive programming and has coached multiple teams to international victories.",
    avatar: "/images/alice-johnson.jpg",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/alicejohnson",
        icon: "fab fa-linkedin",
      },
      {
        platform: "github",
        url: "https://github.com/alicejohnson",
        icon: "fab fa-github",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "Algorithm Specialist",
    bio: "Bob is a former ACM ICPC world finalist and specializes in graph algorithms and dynamic programming.",
    avatar: "/images/bob-smith.jpg",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/bobsmith",
        icon: "fab fa-linkedin",
      },
      {
        platform: "github",
        url: "https://github.com/bobsmith",
        icon: "fab fa-github",
      },
    ],
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

<template>
  <div>
    <h1 class="text-4xl font-bold mb-6 text-primary-600 animate-fadeIn">
      Blog
    </h1>
    <BlogPost
      v-for="(post, index) in blogPosts"
      :key="post.id"
      :title="post.title"
      :date="post.date"
      :content="post.content"
      :slug="post.slug"
      :style="{ animationDelay: `${index * 0.2}s` }"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlogPost from "../components/BlogPost.vue";

const blogPosts = ref([
  {
    id: 1,
    title: "Getting Started with Competitive Programming",
    date: "2024-07-15",
    content:
      "<p>In this post, we'll cover the basics of getting started with competitive programming...</p>",
    slug: "getting-started-with-competitive-programming",
  },
  {
    id: 2,
    title: "Advanced Dynamic Programming Techniques",
    date: "2024-07-10",
    content:
      "<p>Learn about advanced dynamic programming techniques used in competitive programming...</p>",
    slug: "advanced-dynamic-programming-techniques",
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

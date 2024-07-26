<template>
  <footer class="bg-neutral-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">CP Training</h3>
          <p class="text-neutral-400">
            Enhancing problem-solving skills through competitive programming.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item.path">
              <router-link
                :to="item.path"
                class="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Connect</h4>
          <ul class="space-y-2">
            <li v-for="item in socialLinks" :key="item.name">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Resources</h4>
          <ul class="space-y-2">
            <li v-for="item in resources" :key="item.url">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-8 pt-8 border-t border-neutral-700 text-center text-neutral-400"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} CP Training. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Roadmap", path: "/roadmap" },
  { name: "Blog", path: "/blog" },
  { name: "Resources", path: "/resources" },
];

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/abderrahmane.tech/" },
  { name: "Telegram", url: "https://t.me/+yBBHC-6Jnw0xZDZk" },
];

const resources = ref([
  { name: "Codeforces", url: "https://codeforces.com/problemset" },
  { name: "CSES", url: "https://cses.fi/problemset/" },
  { name: "LeetCode", url: "https://leetcode.com/accounts/login/" },
  { name: "Book cses", url: "https://cses.fi/book/book.pdf" },
]);
</script>

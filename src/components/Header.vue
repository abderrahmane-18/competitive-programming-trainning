<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <router-link
          to="/"
          class="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200"
        >
          CP Training
        </router-link>
        <ul class="hidden md:flex space-x-6">
          <li v-for="item in navItems" :key="item.path">
            <router-link
              :to="item.path"
              class="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-neutral-600 hover:text-primary-600 transition-colors duration-200"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
    <transition name="slide">
      <ul v-if="mobileMenuOpen" class="md:hidden bg-white py-2 shadow-lg">
        <li v-for="item in navItems" :key="item.path" class="px-4 py-2">
          <router-link
            :to="item.path"
            class="block text-neutral-600 hover:text-primary-600 transition-colors duration-200"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const navItems = [
  { name: "About", path: "/about" },
  { name: "Roadmap", path: "/roadmap" },
  { name: "Blog", path: "/blog" },
  { name: "Resources", path: "/resources" },
  { name: "Community", path: "/community" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>

<template>
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
      <h2 class="text-2xl font-bold mb-4 text-primary-600">
        Welcome to CP Training!
      </h2>
      <p class="mb-4 text-neutral-700">
        Please enter your Codeforces account to get started:
      </p>
      <input
        v-model="codeforcesAccount"
        type="text"
        placeholder="Codeforces account"
        class="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
      <button
        @click="submitAccount"
        class="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors duration-200"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(true);
const codeforcesAccount = ref("");

const submitAccount = () => {
  // Here you would typically send the Codeforces account to your email
  console.log("Codeforces account submitted:", codeforcesAccount.value);
  // In a real application, you'd use an API to send this information to your email
  alert("Thank you for submitting your Codeforces account!");
  showModal.value = false;
};
</script>

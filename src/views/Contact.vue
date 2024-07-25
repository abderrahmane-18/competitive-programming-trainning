<template>
  <div>
    <h1 class="text-4xl font-bold mb-6 text-primary-600 animate-fadeIn">
      Contact Us
    </h1>
    <p
      class="mb-6 text-lg text-neutral-700 animate-fadeIn"
      style="animation-delay: 0.2s"
    >
      Have questions or feedback? We'd love to hear from you!
    </p>
    <form
      @submit.prevent="submitForm"
      class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeIn"
      style="animation-delay: 0.4s"
    >
      <div class="mb-4">
        <label for="name" class="block mb-2 text-neutral-700">Name:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-neutral-700">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block mb-2 text-neutral-700"
          >Message:</label
        >
        <textarea
          id="message"
          v-model="form.message"
          required
          class="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = async () => {
  const response = await fetch("https://formspree.io/f/xpwaqeje", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form.value),
  });

  if (response.ok) {
    alert("Thank you for your message! We will get back to you soon.");
    form.value = { name: "", email: "", message: "" };
  } else {
    alert("There was an error sending your message. Please try again later.");
  }
};
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

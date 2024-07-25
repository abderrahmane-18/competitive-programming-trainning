<template>
  <div>
    <h1 class="text-4xl font-bold mb-6 text-primary-600 animate-fadeIn">
      Community
    </h1>
    <p
      class="mb-6 text-lg text-neutral-700 animate-fadeIn"
      style="animation-delay: 0.2s"
    >
      Join our vibrant community of competitive programmers!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="animate-fadeIn" style="animation-delay: 0.4s">
        <h2 class="text-2xl font-semibold mb-4 text-primary-600">
          Join Our Program
        </h2>
        <p class="mb-4 text-neutral-700">
          Interested in joining our training program? Fill out the form below:
        </p>
        <form
          @submit.prevent="submitForm"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          action="https://formspree.io/f/your-form-id"
          method="POST"
        >
          <div class="mb-4">
            <label for="name" class="block mb-2 text-neutral-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="form.name"
              required
              class="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-2 text-neutral-700"
              >Email:</label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              required
              class="w-full p-2 border rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button
            type="submit"
            class="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="animate-fadeIn" style="animation-delay: 0.6s">
        <h2 class="text-2xl font-semibold mb-4 text-primary-600">
          Community Guidelines
        </h2>
        <ul class="list-disc list-inside text-neutral-700">
          <li>Be respectful to all members</li>
          <li>Share knowledge and help others</li>
          <li>No plagiarism or cheating</li>
          <li>Participate actively in discussions and events</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
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
    alert("Thank you for your interest! We will contact you soon.");
    form.value = { name: "", email: "" };
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

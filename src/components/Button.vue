<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200',
      variantClasses[variant],
      sizeClasses[size],
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "accent", "outline"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const variantClasses = computed(() => ({
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
  secondary:
    "bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500",
  accent: "bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500",
  outline:
    "bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 focus:ring-primary-500",
}));

const sizeClasses = computed(() => ({
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}));
</script>

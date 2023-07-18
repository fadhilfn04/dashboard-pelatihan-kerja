<template>
  <button :class="buttonClass">
    <font-awesome-icon :icon="['fas', 'filter']" />
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "type"],
  computed: {
    buttonClass() {
      return { [this.type]: true };
    },
  },
};
</script>

<style scoped>
button {
  @apply p-3 font-medium;
}

.primary {
  @apply rounded border-0 bg-white text-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:text-white;
}
</style>

<template>
  <a-button @click="resetMap" type="primary">
    Reset
  </a-button>
</template>

<script>
export default {
  name: "ButtonReset",
  methods: {
    resetMap() {
      window.location.reload();
    },
  },
};
</script>

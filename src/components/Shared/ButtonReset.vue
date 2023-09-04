<template>
    <a-button @click="resetMap" type="primary" style="background-color: blue; border-color: blue; color: white;">
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

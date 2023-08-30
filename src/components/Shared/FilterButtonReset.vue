<template>
  <button @click="resetMap" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
    Reset
  </button>
</template>

<script>
export default {
  name: "FilterButtonReset",
  methods: {
    resetMap() {
      window.location.reload();
      this.center = [-0.884123, 116.038462];
      this.zoom = 5;
    },
  },
};
</script>

<template>
  <!-- <a-button @click="resetMap" type="primary">
    Reset
  </a-button> -->

  <button @click="resetMap" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
    Reset
  </button>
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

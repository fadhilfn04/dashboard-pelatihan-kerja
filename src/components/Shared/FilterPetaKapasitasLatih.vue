<script setup>
import { onMounted, ref } from "vue";
import { Dropdown } from "flowbite";
import axios from "axios";
</script>

<template>
  <a-form-item class="kapasitasLatih">
    <a-select placeholder="Semua Kapasitas Latih" @change="emitEvent">
      <a-select-option value="kurang_500">Kurang dari 500</a-select-option>
      <a-select-option value="lebih_500">Lebih dari 500</a-select-option>
      <a-select-option value="kurang_1000">Kurang dari 1000</a-select-option>
      <a-select-option value="lebih_1000">Lebih dari 1000</a-select-option>
    </a-select>
  </a-form-item>
</template>

<style>
  .kapasitasLatih {
    flex: 1;
    margin: 0px !important;
  }
</style>

<script>
export default {
  name: "FilterPetakapasitasLatih",
  props: {
    tipe: {
      type: String,
      default: null,
    },
  },
  methods: {
    emitEvent(selectedValue) {
      const data = {
        value: selectedValue
      };

      this.$emit("petaKapasitasLatihChanged", data);
    },
  },
};
</script>
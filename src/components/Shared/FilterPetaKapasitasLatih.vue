<script setup>
import { onMounted, ref } from "vue";
import { Dropdown } from "flowbite";
import axios from "axios";

const kapasitasLatihList = ref([]);

onMounted(async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      import.meta.env.VITE_API_URL + '/list-kapasitas-latih',
      {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      }
    );

    if (response.data.success) {
      kapasitasLatihList.value = response.data.data;
    }
  } catch (error) {}
});
</script>

<template>
  <!-- <a-form-item class="kapasitasLatih">
    <a-select
      placeholder="Semua Kapasitas Latih"
      @change="emitEvent($event.target.value)"
    >
      <a-select-option
        v-for="kapasitasLatih in kapasitasLatihList"
        :key="kapasitasLatih.id"
        :value="kapasitasLatih.id"
        >{{ kapasitasLatih.kapasitas_latih }}</a-select-option
      >
    </a-select>
  </a-form-item> -->

  <select
    id="dropdownKapasitasLatih"
    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm"
    @change="emitEvent($event.target.value)"
  >
    <option value="" disabled selected>Semua Kapasitas Latih</option>
    <option v-for="kapasitasLatih in kapasitasLatihList" :key="kapasitasLatih.id" :value="kapasitasLatih.id">
      {{ kapasitasLatih.kapasitas_latih }}
    </option>
  </select>
</template>

<style>
  .kapasitasLatih {
    flex: 1;
    margin-right: 10px !important;
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
    emitEvent(id) {
      const data = {
        tipe: this.tipe,
        id: id,
      };
      this.$emit("kapasitasLatihChanged", data);
    },
  },
};
</script>
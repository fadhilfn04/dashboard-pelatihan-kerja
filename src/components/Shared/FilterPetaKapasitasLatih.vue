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
  <a-form-item class="kapasitasLatih">
    <a-select placeholder="Semua Kapasitas Latih" show-search @change="emitEvent($event.target.value)">
      <a-select-option v-for="kapasitasLatih in kapasitasLatihList" :key="kapasitasLatih.id" :value="kapasitasLatih.id">
        {{ kapasitasLatih.kapasitas_latih }}
        </a-select-option>
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
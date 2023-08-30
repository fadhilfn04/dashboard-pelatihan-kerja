<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const tipeLembagaList = ref([]);

onMounted(async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      import.meta.env.VITE_API_URL + '/list-tipe-lembaga',
      {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      }
    );

    if (response.data.success) {
      tipeLembagaList.value = response.data.data;
    }
  } catch (error) {}
});
</script>

<template>
  <!-- <a-form-item class="tipeLembaga">
    <a-select placeholder="Semua Tipe Lembaga" @change="emitEvent($event.target.value)">
      <a-select-option v-for="tipeLembaga in tipeLembagaList" :key="tipeLembaga.id" :value="tipeLembaga.id">
        {{ tipeLembaga.nama_tipe_lembaga }}
      </a-select-option>
    </a-select>
  </a-form-item> -->

  <select
    id="dropdownTipeLembaga"
    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm"
    @change="emitEvent($event.target.value)"
  >
    <option value="" disabled selected>Semua Tipe Lembaga</option>
    <option v-for="tipeLembaga in tipeLembagaList" :key="tipeLembaga.id" :value="tipeLembaga.id">
      {{ tipeLembaga.nama_tipe_lembaga }}
    </option>
  </select>
</template>

<style>
  .tipeLembaga {
    flex: 1;
    margin-right: 10px !important;
  }
</style>

<script>
export default {
  name: "FilterPetaTipeLembaga",
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
      this.$emit("tipeLembagaChanged", data);
    },
  },
};
</script>
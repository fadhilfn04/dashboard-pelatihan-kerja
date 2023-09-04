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
  <a-form-item class="tipeLembaga">
    <a-select placeholder="Semua Tipe Lembaga" show-search @change="emitEvent($event)">
      <a-select-option v-for="tipeLembaga in tipeLembagaList" :key="tipeLembaga.id" :value="tipeLembaga.nama_tipe_lembaga">
        {{ tipeLembaga.nama_tipe_lembaga }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<style>
  .tipeLembaga {
    flex: 1;
    margin: 0px !important;
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
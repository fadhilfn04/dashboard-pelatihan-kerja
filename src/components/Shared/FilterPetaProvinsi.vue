<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const provinsiList = ref([]);

onMounted(async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      import.meta.env.VITE_API_URL + '/list-provinsi',
      {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      }
    );

    if (response.data.success) {
      provinsiList.value = response.data.data;
    }
  } catch (error) {}
});
</script>

<template>
  <a-form-item class="provinsi">
    <a-select placeholder="Semua Provinsi/Wilayah" @change="emitEvent" show-search>
      <a-select-option v-for="provinsi in provinsiList" :key="provinsi.id" :value="provinsi.nama_provinsi" :id="provinsi.id">
        {{ provinsi.nama_provinsi }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
export default {
  name: "FilterPetaProvinsi",
  props: {
    tipe: {
      type: String,
      default: null,
    },
  },
  methods: {
    emitEvent(id) {
      this.$emit("petaProvinsiChanged", id);
    },
  },
};
</script>

<style>
  .provinsi {
    flex: 1;
    margin: 0px !important;
  }
</style>
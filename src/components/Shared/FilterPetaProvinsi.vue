<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const provinsiList = ref([]);

onMounted(async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      import.meta.env.VITE_API_URL + '/list-provinsi-wilayah',
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
  <!-- <a-form-item class="provinsi">
    <a-select placeholder="Semua Provinsi/Wilayah" @change="emitEvent($event.target.value)">
      <a-select-option v-for="provinsi in provinsiList" :key="provinsi.id" :value="provinsi.id">
        {{ provinsi.nama_provinsi }}
      </a-select-option>
    </a-select>
  </a-form-item> -->

  <select
    id="dropdownProvinsi"
    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm"
    @change="emitEvent($event.target.value)"
  >
    <option value="" disabled selected>Semua Provinsi/Wilayah</option>
    <option v-for="provinsi in provinsiList" :key="provinsi.id" :value="provinsi.id">
      {{ provinsi.nama_provinsi }}
    </option>
  </select>
</template>

<style>
  .provinsi {
    flex: 1;
    margin-right: 10px !important;
  }
</style>

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
      const data = {
        tipe: this.tipe,
        id: id,
      };
      this.$emit("PetaProvinsiChanged", data);
    },
  },
};
</script>
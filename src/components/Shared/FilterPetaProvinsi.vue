<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
// import $ from "jquery"; // Import jQuery
// import "select2/dist/css/select2.min.css"; // Import Select2 styles
// import "select2"; // Import Select2 library

const provinsiList = ref([]);
const select2Provinsi = ref(null);  

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

// Initialize Select2
// onMounted(() => {
//   $(select2Provinsi.value).select2();
// });
</script>

<template>
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
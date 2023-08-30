<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";

const kotaList = ref([]);

// Props
const props = defineProps({
  selectedProvinsi: String,
});

onMounted(async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      import.meta.env.VITE_API_URL + '/list-kab-kota',
      {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      }
    );

    if (response.data.success) {
      kotaList.value = response.data.data;
    }
  } catch (error) {}
});

const filteredKotaList = computed(() => {
  return kotaList.value.filter((kota) => {
    return props.selectedProvinsi ? kota.id_provinsi === props.selectedProvinsi : true;
  });
});
</script>

<template>
  <!-- <a-form-item class="kota">
    <a-select placeholder="Semua Kabupaten/Kota" @change="emitEvent($event)">
      <a-select-option v-for="kabKota in filteredKotaList" :key="kabKota.id_provinsi" :value="kabKota.id_provinsi">
        {{ kabKota.nama_kabupaten_kota }}
      </a-select-option>
    </a-select>
  </a-form-item> -->

  <select
    id="dropdownKota"
    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm"
    @change="emitEvent($event.target.value)"
  >
    <option value="" disabled selected>Semua Kabupaten/Kota</option>
    <option
      v-for="kabKota in filteredKotaList"
      :key="kabKota.id_provinsi"
      :value="kabKota.id_provinsi"
    >
      {{ kabKota.nama_kabupaten_kota }}
    </option>
  </select>
</template>

<style>
  .kota {
    flex: 1;
    margin-right: 10px !important;
    height: 5px !important;
  }
</style>

<script>

export default {
  name: "FilterPetaKota",
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
      this.$emit("PetaKotaChanged", data);
    },
  },
};
</script>
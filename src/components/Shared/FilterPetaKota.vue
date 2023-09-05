<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";

const kotaList = ref([]);
const isDisabled = ref(true); // Initialize as disabled

// Props
const props = defineProps({
  selectedProvinsi: String,
});

const onProvinsiChanged = (id) => {
  isDisabled.value = false; // Enable the component when a selection is made
}

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
  <a-form-item class="kota">
    <a-select placeholder="Semua Kabupaten/Kota" show-search @change="emitEvent($event)" :disabled="isDisabled">
      <a-select-option v-for="kabKota in filteredKotaList" :key="kabKota.id" :value="kabKota.nama_kabupaten_kota" :id_provinsi="kabKota.id_provinsi">
        {{ kabKota.nama_kabupaten_kota }}
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<style>
  .kota {
    flex: 1;
    margin: 0px !important;
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
    filter: {
      type: String,
      default: "/provinsi",
    },
  },
  setup() {
    return {
      isDisabled,
      onProvinsiChanged,
    };
  },
  watch: {
    filter() {
      this.loadData();
    },
  },
  methods: {
    emitEvent(id) {
      const data = {
        id: id,
      };

      this.$emit("PetaKotaChanged", data);
    },
  },
};
</script>
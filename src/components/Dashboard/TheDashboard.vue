<template>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Pelatihan Kerja Indonesia
      </h5>
      <div class="flex justify-between pb-2">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm">
          <option>Sebaran Peserta Pelatihan</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm">
          <option>Peserta Berbasis Kompetensi</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm">
          <option>Kompetensi Teknis</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mr-3 text-sm">
          <option>Semua Provinsi/Wilayah</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
          Tampilkan 
        </button>
      </div>
      <PetaPersebaranGis />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
      <div class="p-5">
        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Jumlah Lembaga Pelatihan Kerja
        </h5>
        <JumlahLembagaPelatihanKerja />
      </div>
    </div>
    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between pb-2">
            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
              Tingkat Akreditasi Lembaga Pelatihan Kerja
            </h5>
          </div>

          <TingkatAkreditasiLembagaPelatihanKerja />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-8">
    <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
      <div class="p-5">
          <div class="flex justify-between pb-2">
            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
              Kapasitas LPK
            </h5>
            <select class="block appearance-none bg-blue-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm text-blue-600">
              <option>Sebaran Peserta Pelatihan</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        <KapasitasLPK />
      </div>
    </div>

    <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
      <div class="p-5">
          <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
            Kapasitas Terhadap Peserta Terdaftar
          </h5>
          <div class="flex justify-between pb-2">
            <div class="relative w-32">
              <VueDatePicker v-model="year" year-picker />
            </div>
            <select class="block appearance-none bg-blue-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm text-blue-600">
              <option>Sebaran Peserta Pelatihan</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        <KapasitasTerhadapPesertaTerdaftar />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between pb-2">
              <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                Tren Jumlah Peserta Pelatihan
              </h5>
              <div class="relative w-32">
                <VueDatePicker v-model="year" year-picker />
              </div>
            </div>
          <TrenJumlahPesertaPelatihan />
        </div>
      </div>
    </div>

    <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
      <div class="p-5">
            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
              Produktifitas Tenaga Kerja
            </h5>
            <div class="flex justify-start pb-2">
              <div class="relative w-32">
              <VueDatePicker v-model="year" year-picker />
            </div>
            </div>
        <ProduktifitasTenagaKerja />
      </div>
    </div>
  </div>
</template>

<script>
import PetaPersebaran from "./PetaPersebaran.vue";
import JumlahTenagaKerjaByGaji from "./JumlahTenagaKerjaByGaji.vue";
import KapasitasTerhadapPesertaTerdaftar from "./KapasitasTerhadapPesertaTerdaftar.vue";
import TingkatAkreditasiLembagaPelatihanKerja from "./TingkatAkreditasiLembagaPelatihanKerja.vue";
import KapasitasLPK from "./KapasitasLPK.vue";
import JumlahTenagaKerjaJabatanTerbanyak from "./JumlahTenagaKerjaJabatanTerbanyak.vue";
import TrenJumlahPesertaPelatihan from "./TrenJumlahPesertaPelatihan.vue";
import DemografiTenagaKerja from "./DemografiTenagaKerja.vue";
import JumlahLembagaPelatihanKerja from "./JumlahLembagaPelatihanKerja.vue";
import ProduktifitasTenagaKerja from "./ProduktifitasTenagaKerja.vue";
import PetaPersebaranGis from "./PetaPersebaranGis.vue";
import { Modal } from "flowbite-vue";
import { ref } from "vue";

import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'

import FilterProvinsi from "../Shared/FilterProvinsi.vue";

export default {
  name: "TheDashboard",
  components: {
    PetaPersebaran,
    PetaPersebaranGis,
    JumlahTenagaKerjaByGaji,
    KapasitasTerhadapPesertaTerdaftar,
    TingkatAkreditasiLembagaPelatihanKerja,
    KapasitasLPK,
    JumlahLembagaPelatihanKerja,
    ProduktifitasTenagaKerja,
    JumlahTenagaKerjaJabatanTerbanyak,
    TrenJumlahPesertaPelatihan,
    DemografiTenagaKerja,
    FilterProvinsi,
    Modal,
    VueDatePicker,
  },
  data() {
    return {
      filterSektor: "/sektor",
      filterPendidikan: 0,
      filterPekerjaan: 0,
      filterPelatihan: 0,
      filterBansos: 0,
      filterKewirausahaan: 0,
      year: 2023,
    };
  },

  methods: {
  },
};
</script>

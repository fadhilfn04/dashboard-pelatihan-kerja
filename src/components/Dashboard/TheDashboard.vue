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
      <!-- <PetaPersebaranGis /> -->
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
            Jumlah Lembaga Pelatihan Kerja
          </h5>
          <JumlahLembagaPelatihanKerja />
        </div>
      </div>
    </div>
    <div class="col-span-1">
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
            Persentase LPK Terhadap Pencari Kerja
          </h5>
        </div>

        <PersentaseLPKTerhadapPencariKerja />
      </div>
    </div>
    
    <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
      <div class="p-5">
          <div class="flex justify-between pb-2">
            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
              Kapasitas Lembaga Pelatihan Kerja
            </h5>
            <FilterProvinsi
              @provinsiChanged="handleProvinsiChanged"
              tipe="provinsi"
            />
          </div>
        <KapasitasLPK :filter="filterProvinsi"/>
      </div>
    </div>

    <!-- <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
      <div class="p-5">
          <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
            Kapasitas Terhadap Peserta Terdaftar
          </h5>
          <div class="flex justify-between pb-2">
            <div class="relative w-32">
              <VueDatePicker v-model="year" year-picker />
            </div>
            <select class="block appearance-none bg-blue-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm text-blue-600">
              <option>Provinsi</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        <KapasitasTerhadapPesertaTerdaftar />
      </div>
    </div> -->
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
                <VueDatePicker 
                  v-model="year" year-picker mode-height="120" :action-row="{ showNow: false, showPreview: false }" locale="id" cancelText="Batal" selectText="Pilih" menu-class-name="dp-theme-light"
                />
              </div>
            </div>
          <TrenJumlahPesertaPelatihan />
        </div>
      </div>
    </div>

    <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
      <div class="p-5">
        <div class="flex justify-between pb-2">
          <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
            Produktifitas Tenaga Kerja
          </h5>
          <div class="relative w-32">
            <VueDatePicker v-model="year" year-picker mode-height="120" :action-row="{ showNow: false, showPreview: false }" locale="id" cancelText="Batal" selectText="Pilih" menu-class-name="dp-theme-light" />
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
  import PersentaseLPKTerhadapPencariKerja from "./PersentaseLPKTerhadapPencariKerja.vue";
  import KapasitasLPK from "./KapasitasLPK.vue";
  import JumlahTenagaKerjaJabatanTerbanyak from "./JumlahTenagaKerjaJabatanTerbanyak.vue";
  import TrenJumlahPesertaPelatihan from "./TrenJumlahPesertaPelatihan.vue";
  import DemografiTenagaKerja from "./DemografiTenagaKerja.vue";
  import JumlahLembagaPelatihanKerja from "./JumlahLembagaPelatihanKerja.vue";
  import ProduktifitasTenagaKerja from "./ProduktifitasTenagaKerja.vue";
  import PetaPersebaranGis from "./PetaPersebaranGis.vue";
  import { Modal } from "flowbite-vue";

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
      PersentaseLPKTerhadapPencariKerja,
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
        filterProvinsi: "/rekap-kapasitas-lpk",
        filterTahunTren: "/rekap-tren-jumlah-peserta-pelatihan",
        filterTahunProduktifitas: "/rekap-produktifitas-tenaga-kerja",
        year: 2023,
      };
    },

    methods: {
      handleProvinsiChanged(data) {
        switch (data.tipe) {
          case "provinsi":
            if (data.id != 0) {
              this.filterProvinsi = "/rekap-kapasitas-lpk-provinsi/" + data.id;
            } else {
              this.filterProvinsi = "/rekap-kapasitas-lpk";
            }
            break;

          default:
            break;
        }
      },
    },
  };
</script>

<style lang="css">
  .dp-custom-menu {
    box-shadow: 0 0 6px #1976d2;
  }

  .dp-theme-light {
    --dp-background-color: #ffffff;
    --dp-text-color: #212121;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #1976d2;
    --dp-primary-text-color: #212121;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #ddd;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
    --dp-highlight-color: rgba(25, 118, 210, 0.1);
  }
</style>

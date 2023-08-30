<script setup>
const updateSelectedProvinsi = (data) => {
  selectedProvinsi.value = data.id;
};
</script>

<template>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Pelatihan Kerja Indonesia
      </h5>
      <div class="flex justify-between pb-2">
        <FilterPetaProvinsi
          @PetaProvinsiChanged="handleProvinsiChanged"
        />
        <FilterPetaKota
          @PetaKotaChanged="handleKotaChanged"
        />
        <FilterPetaTipeLembaga/>
        <FilterPetaKapasitasLatih/>
        <ButtonReset/>
      </div>
      <PetaPersebaranGis
        :filter="filterPetaProvinsi"
        :selectedProvinsi="selectedProvinsi"
      />
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
              @provinsiChanged="handleKapasitasLPKProvinsiChanged"
              tipe="provinsi"
            />
          </div>
        <KapasitasLPK :filter="filterProvinsi"/>
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
                <DatePicker picker="year" id="datepicker_tren"
                  v-model="selectedDate"
                  @change="handleTrenJumlahChanged"  
                />
              </div>
            </div>
          <TrenJumlahPesertaPelatihan :filter="filterTrenJumlah"/>
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
            <DatePicker picker="year" id="datepicker_produktifitas"
              v-model="selectedDate"
              @change="handleProduktifitasChanged"  
            />
          </div>
        </div>
          <ProduktifitasTenagaKerja :filter="filterProduktifitas"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
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
  import { DatePicker } from 'ant-design-vue';
  import FilterProvinsi from "../Shared/FilterProvinsi.vue";
  import FilterPetaProvinsi from "../Shared/FilterPetaProvinsi.vue";
  import FilterPetaKota from "../Shared/FilterPetaKota.vue";
  import FilterPetaTipeLembaga from "../Shared/FilterPetaTipeLembaga.vue";
  import FilterPetaKapasitasLatih from "../Shared/FilterPetaKapasitasLatih.vue";
  import ButtonReset from "../Shared/ButtonReset.vue";

  const selectedProvinsi = ref(null);

  export default {
    name: "TheDashboard",
    components: {
      PetaPersebaranGis,
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
      DatePicker,
      FilterPetaProvinsi,
      FilterPetaKota,
      FilterPetaTipeLembaga,
      FilterPetaKapasitasLatih,
      ButtonReset
    },
    data() {
      return {
        filterProvinsi: "/rekap-kapasitas-lpk",
        filterTrenJumlah: "/rekap-tren-jumlah-peserta-pelatihan",
        filterProduktifitas: "/rekap-produktifitas-tenaga-kerja",
        filterPetaProvinsi: "/provinsi",
        selectedDate: null,
        selectedYear: null,
        selectedProvinsi: null,
      };
    },

    methods: {
      handleKapasitasLPKProvinsiChanged(data) {
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

      handleKotaChanged(data) {
        // Handle Kota change event here
        console.log("Kota changed:", data);
        // Add your logic here based on the selected Kota
      },

      handleTrenJumlahChanged(date) {

        if (date.$y != 0) {
          this.filterTrenJumlah = "/rekap-tren-jumlah-peserta-pelatihan-tahun/" + date.$y;
        } else {
          this.filterTrenJumlah = "/rekap-tren-jumlah-peserta-pelatihan";
        }
      },

      handleProduktifitasChanged(date) {

        if (date.$y != 0) {
          this.filterProduktifitas = "/rekap-produktifitas-tenaga-kerja-tahun/" + date.$y;
        } else {
          this.filterProduktifitas = "/rekap-produktifitas-tenaga-kerja";
        }
      },

      handleProvinsiChanged(data) {
        console.log(data);
        this.filterPetaProvinsi = data.id !== 0 ? `/provinsiFilter/${data.id}` : "/provinsi";
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

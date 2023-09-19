<template>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Pelatihan Kerja Indonesia
      </h5>
      <a-form class="filter-form">
        <a-form-item class="provinsi">
          <a-select placeholder="Semua Provinsi/Wilayah" @change="onProvinceChange" show-search>
            <a-select-option v-for="provinsi in provinsiList" :key="provinsi.id" :value="provinsi.id" :id="provinsi.id">
              {{ provinsi.nama_provinsi }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="kota">
          <a-select placeholder="Semua Kabupaten/Kota" :disabled="isKotaDisabled" show-search>
            <a-select-option v-for="kabKota in kotaList" :key="kabKota.id" :value="kabKota.id" :id_provinsi="kabKota.id_provinsi">
              {{ kabKota.nama_kabupaten_kota }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="tipeLembaga">
          <a-select placeholder="Semua Tipe Lembaga" show-search>
            <a-select-option v-for="tipeLembaga in tipeLembagaList" :key="tipeLembaga.id" :value="tipeLembaga.nama_tipe_lembaga">
              {{ tipeLembaga.nama_tipe_lembaga }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="kapasitasLatih">
          <a-select placeholder="Semua Kapasitas Latih">
            <a-select-option value="kurang_500">Kurang dari 500</a-select-option>
            <a-select-option value="lebih_500">Lebih dari 500</a-select-option>
            <a-select-option value="kurang_1000">Kurang dari 1000</a-select-option>
            <a-select-option value="lebih_1000">Lebih dari 1000</a-select-option>
          </a-select>
        </a-form-item>
          <a-button @click="resetMap" type="primary" style="background-color: blue; border-color: blue; color: white;">
            Reset
          </a-button>
      </a-form>
      <PetaPersebaranGis 
      :filter="filterPetaProvinsi"
      :key="componentKey"
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
            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
              Tingkat Akreditasi Lembaga Pelatihan Kerja
            </h5>
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
  import axios from "axios";
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
  import { DatePicker } from 'ant-design-vue';
  import FilterProvinsi from "../Shared/FilterProvinsi.vue";
  import ButtonReset from "../Shared/ButtonReset.vue";

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
      DatePicker,
      ButtonReset
    },
    data() {
      return {
        filterProvinsi            : "/rekap-kapasitas-lpk",
        filterTrenJumlah          : "/rekap-tren-jumlah-peserta-pelatihan",
        filterProduktifitas       : "/rekap-produktifitas-tenaga-kerja",
        filterPetaProvinsi        : "/kabKota",
        filterPetaTipeLembaga     : "/tipeLembaga",
        filterPetaKapasitasLatih  : "/kapasitasLatih",
        selectedDate              : null,
        selectedYear              : null,
        selectedProvinceId        : null,
        provinsiList              : [],
        kotaList                  : [],
        tipeLembagaList           : [],
        isKotaDisabled            : true,
        componentKey              : 0
      };
    },

    async created() {
      await this.fetchProvinsiList();
      await this.getTipeLembaga();
    },

    methods: {
      async fetchProvinsiList() {
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
          if(response.data.success){
            this.provinsiList = response.data.data;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      onProvinceChange(value) {
        this.isKotaDisabled = false;
        this.getKota(value);
        this.componentKey += 1;

        if (value != 0) {
          this.filterPetaProvinsi = "/kabKotaFilter/" + value;
        } else {
          this.filterPetaProvinsi = "/kabKota";
        }
      },
      async getKota(value) {
        try {
          const token = JSON.parse(localStorage.getItem("token"));
          const response = await axios.get(
            import.meta.env.VITE_API_URL + '/list-kab-kota/' + value,
            {
              headers: {
                Authorization: "Bearer " + token.value,
              },
            }
          );
          if(response.data.success){
            this.kotaList = response.data.data;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },

      async getTipeLembaga() {
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
          if(response.data.success){
            this.tipeLembagaList = response.data.data;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      resetMap() {
        window.location.reload();
      },
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
      handleProvinsiChanged(id) {
        if (id != 0) {
          console.log(id);
          this.filterPetaProvinsi = "/provinsiFilter/" + id;
        } else {
          this.filterPetaProvinsi = "/provinsi";
        }
      },
      handleTipeLembagaChanged(id) {
        if (id != 0) {
          this.filterPetaTipeLembaga = "/tipeLembagaFilter/" + id;
        } else {
          this.filterPetaTipeLembaga = "/tipeLembaga";
        }
      },
      handleKapasitasLatihChanged(id) {
        if (id != 0) {
          this.filterPetaKapasitasLatih = "/kapasitasLatihFilter/" + id;
        } else {
          this.filterPetaKapasitasLatih = "/kapasitasLatih";
        }
      },
    },
  };
</script>

<style lang="css">
  .filter-form {
    display: flex;
    gap: 10px;
    padding: 10px;
  }
  .provinsi {
    flex: 1;
    margin: 0px !important;
  }
  .kota {
    flex: 1;
    margin: 0px !important;
  }
  .tipeLembaga {
    flex: 1;
    margin: 0px !important;
  }
  .kapasitasLatih {
    flex: 1;
    margin: 0px !important;
  }
</style>

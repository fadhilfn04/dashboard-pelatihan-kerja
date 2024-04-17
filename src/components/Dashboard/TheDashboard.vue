<template>
  <LoadingSpinner v-if="isLoading" />
  <!-- <particles></particles> -->
  <div class="text-end mb-3">
    <!-- <a-button type="primary" style="background-color: blue; border-color: blue; color: white;" @click="handleOpen(true)">Mulai tur aplikasi</a-button> -->
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <div class="flex justify-between">
        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Peta Persebaran Lembaga Pelatihan Kerja Terverifikasi Berdasarkan Provinsi di Indonesia s.d Tahun {{ selectedYearPersebaranLPKTerverifikasi }}
        </h5>
      </div>
    <PetaPersebaranLembagaPelatihanKerja />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div ref="tour4" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Jumlah Lembaga Pelatihan Kerja Terverifikasi di Indonesia Menurut Tipe Lembaga s.d Tahun {{ selectedYear }}
            </h5>
            <div class="relative">
              <DatePicker picker="year" id="datepicker_tren"
                v-model="selectedYear"
                @change="handleJumlahLPKTerverifikasiYearChanged"
              />
            </div>
          </div>
          <JumlahLembagaPelatihanKerja :filter="filterJumlahLPKTerverifikasi"/>
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <div class="flex justify-between">
        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Jumlah Lembaga Pelatihan Kerja Yang Sudah dan Belum Terakreditasi di Indonesia s.d Tahun {{ selectedYearJumlahLPKBelumTerakreditasi }}
        </h5>
        <div class="relative">
          <DatePicker picker="year" id="datepicker_tren"
            @change="handleJumlahLPKBelumTerakreditasiYearChanged"
          />
        </div>
      </div>
    <PetaPersebaranLPKTerakreditasi :selectedYearJumlahLPKBelumTerakreditasi="selectedYearJumlahLPKBelumTerakreditasi" />
    </div>
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <div class="flex justify-between">
        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Persebaran Kapasitas Latih di Indonesia s.d Tahun {{ selectedYearSebaranKapasitasLatih }}
        </h5>
        <div class="relative">
          <DatePicker picker="year" id="datepicker_tren"
            @change="handlePersebaranKapasitasLatihYearChanged"
          />
        </div>
      </div>
    <PetaPersebaranKapasitasLatih :selectedYearSebaranKapasitasLatih="selectedYearSebaranKapasitasLatih" @loading-complete="handleLoadingComplete" />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div ref="tour7" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              10 Kejuruan Pelatihan Dengan Peminat Terbesar
            </h5>
          </div>
          <PersentasePeminatProgramPelatihanKejuruan />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div ref="tour8" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Persentase Lulusan Pelatihan yang Bekerja s.d Tahun {{ selectedYearPersentaseTingkatPencariKerja }}
            </h5>
            <div class="relative">
              <DatePicker picker="year" id="datepicker_tren"
                v-model="selectedYear"
                @change="handlePersentaseLulusanPelatihanYearChanged"
              />
            </div>
          </div>
          <PersentaseTingkatPencariKerjaPadaLPK :filter="filterPersentaseLulusanPelatihan"/>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-8">
    <div class="col-span-2">
      <div ref="tour11" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Tren Jumlah Peserta Pemagangan Dalam Negeri
            </h5>
            <div class="relative">
              <div class="flex">
                <DatePicker picker="year" id="datepicker_tren_dagri"
                  v-model="selectedYear"
                  @change="handleTrenJumlahPesertaPemaganganDagriYearChanged"  
                />
              </div>
            </div>
          </div>
          <TrenJumlahPesertaPemaganganDalamNegeri
            :filter="filterTrenJumlahPesertaPemaganganDagri"
          />
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <div ref="tour11" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Tren Jumlah Peserta Pemagangan Luar Negeri
              </h5>
              <div class="relative">
                <div class="flex">
                  <DatePicker picker="year" id="datepicker_tren_lugri"
                    v-model="selectedYear"
                    @change="handleTrenJumlahPesertaPemaganganLugriYearChanged"
                  />
                </div>
              </div>
            </div>
            <TrenJumlahPesertaPemaganganLuarNegeri 
              :filter="filterTrenJumlahPesertaPemaganganLugri" 
            />
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <div class="flex justify-between">
        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Persentase Sebaran Instruktur Menurut Kategori di Indonesia s.d Tahun {{ selectedYearSebaranInstruktur }}
        </h5>
        <div class="relative">
          <DatePicker picker="year" id="datepicker_tren"
            @change="handlePersentaseSebaranInstrukturYearChanged"
          />
        </div>
      </div>
      <PetaPersebaranKategoriInstruktur :selectedYearSebaranInstruktur="selectedYearSebaranInstruktur" />
    </div>
  </div>

  <!-- <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <div class="flex justify-between">
        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Persentase Sebaran Tenaga Pelatihan Menurut Kategori di Indonesia s.d Tahun {{ selectedYearSebaranTenagaPelatihan }}
        </h5>
        <div class="relative">
          <DatePicker picker="year" id="datepicker_sebaran_tenaga_pelatihan"
            v-model="selectedYearSebaranTenagaPelatihan"
            @change="handlePersentaseSebaranTenagaPelatihanYearChanged"
          />
        </div>
      </div>
      <PetaPersebaranTenagaPelatihan :selectedYearSebaranTenagaPelatihan="selectedYearSebaranTenagaPelatihan"  @loading-complete="handleLoadingComplete" />
    </div>
  </div> -->

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div ref="tour15" class="mt-8  w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Masa Tunggu Lulus ke Bekerja
            </h5>
          </div>
          <TableMasaTungguLulus />
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <div class="flex justify-between">
        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Tren Produktifitas Tenaga Kerja Berdasarkan Provinsi Tahun {{ selectedYearTrenProduktifitasTenagaKerja }}
        </h5>
        <div class="relative">
          <DatePicker 
            picker="year" 
            id="datepicker_sebaran_tren_produktifitas_tenaga_kerja"
            v-model="selectedYearTrenProduktifitasTenagaKerja"
            :disabled-date="disabledDate"
            @change="handleTrenProduktifitasTenagaKerjaYearChanged"
          />
        </div>
      </div>
    <ProduktifitasNasional :selectedYearTrenProduktifitasTenagaKerja="selectedYearTrenProduktifitasTenagaKerja" />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div ref="tour19" class="mt-8 mb-5 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Tren Produktifitas Tenaga Kerja Berdasarkan Lapangan Usaha
              </h5>
            </div>
          <ProduktifitasLapanganUsaha />
        </div>
      </div>
    </div>
  </div>

  <!-- <a-tour v-model:current="current" :open="open" :steps="steps" @close="handleOpen(false)" /> -->
</template>

<style>
.dashboard-container #map {
  height: 75vh;
}

.title {
  font-weight: bold;
  margin-bottom: 5px;
}

.info {
  margin-bottom: 15px;
}

.province,
.city,
.institutionType,
.trainingCapacity {
  flex: 1;
  margin: 0px !important;
}
</style>

<script>
import axios from "axios";
import { ref } from 'vue';
import * as L from "leaflet";
import KapasitasPPK from "./KapasitasPPK.vue";
import Particles from '../Shared/Particles.vue';
import { SyncOutlined } from '@ant-design/icons-vue';
import MasaTungguLulusBar from "./MasaTungguLulusBar.vue";
import MasaTungguLulusPie from "./MasaTungguLulusPie.vue";
import TableMasaTungguLulus from "./TableMasaTungguLulus.vue";
import ProduktifitasNasional from "./ProduktifitasNasional.vue";
import { DatePicker, notification, message } from 'ant-design-vue';
import LoadingSpinner from '@/components/Shared/LoadingSpinner.vue';
import LulusanPelatihanBekerja from "./LulusanPelatihanBekerja.vue";
import ProduktifitasLapanganUsaha from "./ProduktifitasLapanganUsaha.vue";
import TingkatPenyerapanLulusanBar from "./TingkatPenyerapanLulusanBar.vue";
import TingkatPenyerapanLulusanPie from "./TingkatPenyerapanLulusanPie.vue";
import JumlahLembagaPelatihanKerja from "./JumlahLembagaPelatihanKerja.vue";
import TrenJumlahPesertaPemagangan from "./TrenJumlahPesertaPemagangan.vue";
import PersentaseKategoriInstruktur from "./PersentaseKategoriInstruktur.vue";
import PetaPersebaranKapasitasLatih from "./PetaPersebaranKapasitasLatih.vue";
import PetaPersebaranTenagaPelatihan from "./PetaPersebaranTenagaPelatihan.vue";
import ProgramPelatihanBanyakDiminati from "./ProgramPelatihanBanyakDiminati.vue";
import FilterKapasitasPPKProvinsi from "../Shared/FilterKapasitasPPKProvinsi.vue";
import PetaPersebaranLPKTerakreditasi from "./PetaPersebaranLPKTerakreditasi.vue";
import PetaPersebaranKategoriInstruktur from "./PetaPersebaranKategoriInstruktur.vue";
import PersentaseKategoriTenagaPelatihan from "./PersentaseKategoriTenagaPelatihan.vue";
import TrenJumlahKategoriProgramPelatihan from "./TrenJumlahKategoriProgramPelatihan.vue";
import FilterProgramPelatihanProvinsi from "../Shared/FilterProgramPelatihanProvinsi.vue";
import PetaPersebaranLembagaPelatihanKerja from "./PetaPersebaranLembagaPelatihanKerja.vue";
import PersentaseTingkatPencariKerjaPadaLPK from "./PersentaseTingkatPencariKerjaPadaLPK.vue";
import TrenJumlahPesertaPemaganganLuarNegeri from "./TrenJumlahPesertaPemaganganLuarNegeri.vue";
import TingkatAkreditasiLembagaPelatihanKerja from "./TingkatAkreditasiLembagaPelatihanKerja.vue";
import TrenJumlahPesertaPemaganganDalamNegeri from "./TrenJumlahPesertaPemaganganDalamNegeri.vue";
import PersentasePeminatProgramPelatihanKejuruan from "./PersentasePeminatProgramPelatihanKejuruan.vue";
import FilterMasaTungguLulusProgramPelatihan from "../Shared/FilterMasaTungguLulusProgramPelatihan.vue";
import FilterTingkatPenyerapanLulusProgramPelatihan from "../Shared/FilterTingkatPenyerapanLulusProgramPelatihan.vue";
import FilterTrenJumlahPesertaPemaganganDagriProvinsi from "../Shared/FilterTrenJumlahPesertaPemaganganDagriProvinsi.vue";
import FilterTrenJumlahPesertaPemaganganLugriProvinsi from "../Shared/FilterTrenJumlahPesertaPemaganganLugriProvinsi.vue";
import { 
  COffcanvas, 
  COffcanvasHeader, 
  COffcanvasTitle, 
  COffcanvasBody } from '@coreui/vue';
export default {
  name: "TheDashboard",
  components: {
    Particles,
    DatePicker,
    COffcanvas,
    KapasitasPPK,
    SyncOutlined,
    COffcanvasBody,
    LoadingSpinner,
    COffcanvasTitle,
    COffcanvasHeader,
    MasaTungguLulusPie,
    MasaTungguLulusBar,
    TableMasaTungguLulus,
    ProduktifitasNasional,
    LulusanPelatihanBekerja,
    TingkatPenyerapanLulusanBar,
    TingkatPenyerapanLulusanPie,
    FilterKapasitasPPKProvinsi,
    JumlahLembagaPelatihanKerja,
    ProduktifitasLapanganUsaha,
    TrenJumlahPesertaPemagangan,
    PersentaseKategoriInstruktur,
    PetaPersebaranKapasitasLatih,
    PetaPersebaranTenagaPelatihan,
    ProgramPelatihanBanyakDiminati,
    FilterProgramPelatihanProvinsi,
    PetaPersebaranLPKTerakreditasi,
    PetaPersebaranKategoriInstruktur,
    PersentaseKategoriTenagaPelatihan,
    TrenJumlahKategoriProgramPelatihan,
    PetaPersebaranLembagaPelatihanKerja,
    PersentaseTingkatPencariKerjaPadaLPK,
    FilterMasaTungguLulusProgramPelatihan,
    TrenJumlahPesertaPemaganganLuarNegeri,
    TrenJumlahPesertaPemaganganDalamNegeri,
    TingkatAkreditasiLembagaPelatihanKerja,
    PersentasePeminatProgramPelatihanKejuruan,
    FilterTingkatPenyerapanLulusProgramPelatihan,
    FilterTrenJumlahPesertaPemaganganDagriProvinsi,
    FilterTrenJumlahPesertaPemaganganLugriProvinsi,
  },

  // setup() {
  //   const open = ref(false);
  //   const current = ref(0);

  //   const tour1 = ref(null);
  //   const tour2 = ref(null);
  //   const tour3 = ref(null);
  //   const tour4 = ref(null);
  //   const tour5 = ref(null);
  //   const tour6 = ref(null);
  //   const tour7 = ref(null);
  //   const tour8 = ref(null);
  //   const tour9 = ref(null);
  //   const tour10 = ref(null);
  //   const tour11 = ref(null);
  //   const tour12 = ref(null);
  //   const tour13 = ref(null);
  //   const tour14 = ref(null);
  //   const tour15 = ref(null);
  //   const tour16 = ref(null);
  //   const tour17 = ref(null);
  //   const tour18 = ref(null);
  //   const tour19 = ref(null);

  //   const steps = [
  //     {
  //       title: 'Filter Provinsi',
  //       description: 'Berfungsi untuk melakukan Filter Provinsi pada Peta Persebaran.',
  //       target: () => tour1.value.$el,
  //     },
  //     {
  //       title: 'Filter Kota',
  //       description: 'Berfungsi untuk melakukan Filter Kota pada Peta Persebaran.',
  //       target: () => tour2.value.$el,
  //     },
  //     {
  //       title: 'Peta Persebaran Lembaga Pelatihan Kerja Indonesia',
  //       description: 'Menampilkan Peta Persebaran Lembaga Pelatihan Kerja Indonesia.',
  //       target: () => tour3.value,
  //     },
  //     {
  //       title: 'Jumlah Lembaga Pelatihan Kerja',
  //       description: 'Menampilkan grafik Jumlah Lembaga Pelatihan Kerja.',
  //       target: () => tour4.value,
  //     },
  //     {
  //       title: 'Tingkat Akreditasi Lembaga Pelatihan Kerja',
  //       description: 'Menampilkan grafik Tingkat Akreditasi Lembaga Pelatihan Kerja.',
  //       target: () => tour5.value,
  //     },
  //     {
  //       title: 'Kapasitas Lembaga Pelatihan Kerja',
  //       description: 'Menampilkan grafik Kapasitas Lembaga Pelatihan Kerja.',
  //       target: () => tour6.value,
  //     },
  //     {
  //       title: 'Persentase Peminat Program Pelatihan Berdasarkan Kejuruan',
  //       description: 'Menampilkan grafik Persentase Peminat Program Pelatihan Berdasarkan Kejuruan.',
  //       target: () => tour7.value,
  //     },
  //     {
  //       title: 'Persentase Tingkat Pencari Kerja pada Lembaga Pelatihan Kerja',
  //       description: 'Menampilkan grafik Persentase Tingkat Pencari Kerja pada Lembaga Pelatihan Kerja.',
  //       target: () => tour8.value,
  //     },
  //     {
  //       title: 'Tren Jumlah Kategori Program Pelatihan',
  //       description: 'Menampilkan grafik Tren Jumlah Kategori Program Pelatihan.',
  //       target: () => tour9.value,
  //     },
  //     {
  //       title: 'Program Pelatihan Yang Banyak Diminati',
  //       description: 'Menampilkan grafik Program Pelatihan Yang Banyak Diminati.',
  //       target: () => tour10.value,
  //     },
  //     {
  //       title: 'Tren Jumlah Peserta Pemagangan',
  //       description: 'Menampilkan grafik Tren Jumlah Peserta Pemagangan.',
  //       target: () => tour11.value,
  //     },
  //     {
  //       title: 'Lulusan Pelatihan ke Bekerja',
  //       description: 'Menampilkan grafik Lulusan Pelatihan ke Bekerja.',
  //       target: () => tour12.value,
  //     },
  //     {
  //       title: 'Jumlah Persentase Kategori Instruktur',
  //       description: 'Menampilkan grafik Jumlah Persentase Kategori Instruktur.',
  //       target: () => tour13.value,
  //     },
  //     {
  //       title: 'Jumlah Persentase Kategori Tenaga Pelatihan',
  //       description: 'Menampilkan grafik Jumlah Persentase Kategori Tenaga Pelatihan.',
  //       target: () => tour14.value,
  //     },
  //     {
  //       title: 'Masa Tunggu Lulus ke Bekerja',
  //       description: 'Menampilkan grafik Masa Tunggu Lulus ke Bekerja.',
  //       target: () => tour15.value,
  //     },
  //     {
  //       title: 'Masa Tunggu Lulus ke Bekerja',
  //       description: 'Menampilkan grafik Masa Tunggu Lulus ke Bekerja.',
  //       target: () => tour16.value,
  //     },
  //     {
  //       title: 'Tingkat Penyerapan Lulusan',
  //       description: 'Menampilkan grafik Tingkat Penyerapan Lulusan.',
  //       target: () => tour17.value,
  //     },
  //     {
  //       title: 'Tingkat Penyerapan Lulusan',
  //       description: 'Menampilkan grafik Tingkat Penyerapan Lulusan.',
  //       target: () => tour18.value,
  //     },
  //     {
  //       title: 'Produktifitas Tenaga Kerja Berdasarkan Lapangan Usaha',
  //       description: 'Menampilkan grafik Produktifitas Tenaga Kerja Berdasarkan Lapangan Usaha.',
  //       target: () => tour19.value,
  //     },
  //   ];

  //   const handleOpen = (val) => {
  //     open.value = val;
  //   };

  //   return { open, current, steps, tour1, tour2, tour3, tour4, tour5, tour6, tour7, tour8, tour9, tour10, tour11, tour12, tour13, tour14, tour15, tour16, tour17, tour18, tour19, handleOpen };
  // },

  data() {
    const currentYear = new Date().getFullYear() - 1;
    return {
      provinceId: '',
      cityId: '',
      institutionId: '',
      trainingCapacityValue: '',
      key: '',
      limitData: 100,
      isDisable: true,
      isMaker: null,
      networkNodes: [],
      provinceContents: [],
      trainingContents: [],
      cityContents: [],
      institutionContents: [],
      institutionTypeContents: [],
      entityTypeContents: [],
      isOpenDetail: false,
      visible: false,
      allRepo: [],
      isLoading: true,
      useSecondComponent: false,

      filterPetaPersebaranLPKTerverifikasi              : "/repositories",
      filterJumlahLPKTerverifikasi                      : "/total-recap-lpk",
      filterJumlahLPKBelumTerakreditasi                 : "/accreditation-level-recap-lpk",
      filterPersebaranKapasitasLatih                    : "/recap-capacity-ppk",
      filterPersentaseLulusanPelatihan                  : "/recap-percentage-job-seekers-lpk",
      filterPersentaseSebaranInstruktur                 : "/recap-instructor-category-percentage",
      filterPersentaseSebaranTenagaPelatihan            : "/recap-training-personnel-category-percentage",
      filterKapasitasPPKProvinsi                        : "/recap-capacity-ppk",
      filterTrenJumlahKategoriProgramPelatihan          : "/recap-trends-number-training-program-categories",
      filterProgramPelatihanProvinsi                    : "/recap-training-programs-high-demand",
      filterTrenJumlahPesertaPemaganganDagri            : "/recap-trends-number-apprentices-dagri",
      filterTrenJumlahPesertaPemaganganDagriProvinsi    : "/recap-trends-number-apprentices-dagri",
      filterTrenJumlahPesertaPemaganganLugri            : "/recap-trends-number-apprentices-lugri",
      filterTrenJumlahPesertaPemaganganLugriProvinsi    : "/recap-trends-number-apprentices-dagri",
      filterProduktifitas                               : "/recap-labor-productivity",
      filterInstruktur                                  : "/recap-instructor-category-percentage",
      filterTenagaPelatihan                             : "/recap-training-personnel-category-percentage",
      filterMasaTunggu                                  : "/recap-waiting-period-graduate-pie",
      filterTingkatPenyerapan                           : "/recap-graduate-absorption-rate-pie",
      selectedDate                                      : null,
      selectedYear                                      : currentYear,
      selectedYearPersebaranLPKTerverifikasi            : currentYear,
      selectedYearJumlahLPKBelumTerakreditasi           : currentYear,
      selectedYearSebaranKapasitasLatih                 : currentYear,
      selectedYearPersentaseTingkatPencariKerja         : currentYear,
      selectedYearSebaranInstruktur                     : currentYear,
      selectedYearSebaranTenagaPelatihan                : currentYear,
      selectedYearTrenProduktifitasTenagaKerja          : 2022,
    }
  },

  async created() {
    await this.getProvince();
    await this.getTraining();
  },
  methods: {
    disabledDate(current) {
      const year = current.year();
      const minYear = 2011;
      const maxYear = 2022;
      return year < minYear || year > maxYear;
    },
    filterOption(input, option) {
      return (
        option.children.text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
    },
    async getTraining() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.cityContents = await fetch(
        import.meta.env.VITE_API_URL + '/training-list',
        {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.data)
    },
    async getProvince() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.provinceContents = await fetch(
        import.meta.env.VITE_API_URL + '/province-list',
        {
          headers: {
              Authorization: "Bearer " + token.value,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.data)

      this.institutionTypeContents = await fetch(
        import.meta.env.VITE_API_URL + '/institutions-type-list',
        {
          headers: {
              Authorization: "Bearer " + token.value,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.data)
    },
    onProvinceChange(value) {
      this.provinceId = value
      if (this.isDisable == false) {
        this.cityId = ''
        this.institutionId = ''
        this.filterProvince()
        this.getCity(value)
        return false
      }
      this.filterProvince()
      this.isDisable = false
      this.getCity(value)
    },
    async resetRepositories() {
      window.location.reload();
    },
    onCityChange(value) {
      this.cityId = value
      this.filterCity()
    },
    onInstitutionTypeChange(value) {
      this.institutionId = value
      this.filterInstitution()
    },
    onTrainingCapacityChange(value) {
      this.trainingCapacityValue = value
      this.filterTrainingCapacity()
    },
    checkNull(text, isParagraf) {
      if (text == null || text == '') {
        return '-'
      } else {
        if (isParagraf == true) {
          return this.escapeString(text)
        } else {
          return text
        }
      }
    },
    escapeString(escape) {
      return escape.replaceAll('\\n', '<br>')
    },
    alert() {
      message.open({
        type: 'loading',
        content: 'Sedang dilakukan pengambilan data. Jika tetap tidak muncul maka tidak ditemukan data Lembaga Pelatihan disini. Silahkan diklik kembali...',
        duration: 0,
      });
      setTimeout(message.destroy, 5000);
    },
    onMapClick(event) {
      const markerId = event.target.options.id
      const url = import.meta.env.VITE_API_URL + "/training-institutions/" + markerId
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      axios.get(url, config).then((response) => {
        if (response.data && response.data.length > 0) {
          this.detailLembaga = []
          this.isOpenDetail = true
          this.visible = true
          this.detailLembaga.nama_lembaga = response.data[0].nama_lembaga ? response.data[0].nama_lembaga : '-';
          this.detailLembaga.no_vin = response.data[0].no_vin ? response.data[0].no_vin : '-';
          this.detailLembaga.tipe_lembaga = response.data[0].tipe_lembaga ? response.data[0].tipe_lembaga : '-';
          this.detailLembaga.email = response.data[0].email ? response.data[0].email : '-';
          this.detailLembaga.no_telp = response.data[0].no_telp ? response.data[0].no_telp : '-';
          this.detailLembaga.provinsi = response.data[0].provinsi ? response.data[0].provinsi : '-';
          this.detailLembaga.kab_kota = response.data[0].kab_kota ? response.data[0].kab_kota : '-';
          this.detailLembaga.alamat = response.data[0].alamat ? response.data[0].alamat : '-';
          this.detailLembaga.status_akreditasi = response.data[0].status_akreditasi ? response.data[0].status_akreditasi : '-';
          this.detailLembaga.kapasitas_latih = response.data[0].kapasitas_latih ? response.data[0].kapasitas_latih : '-';
        } else {
          this.alert();
        }
      });
    },
    closeDetail() {
      this.isOpenDetail = false
    },
    handlePetaPersebaranLPKTerverifikasiYearChanged(date) {
      if (date.$y !== 0) {
        this.selectedYearPersebaranLPKTerverifikasi = date.$y;
      } else {
        this.selectedYearPersebaranLPKTerverifikasi = null;
      }
    },
    handleJumlahLPKTerverifikasiYearChanged(date) {
      if (date.$y != 0) {
        this.selectedYear = date.$y;
        this.filterJumlahLPKTerverifikasi = "/total-recap-lpk-year/" + date.$y;
      } else {
        this.filterJumlahLPKTerverifikasi = "/total-recap-lpk";
      }
    },
    handleJumlahLPKBelumTerakreditasiYearChanged(date) {
      if (date.$y !== 0) {
        this.selectedYearJumlahLPKBelumTerakreditasi = date.$y;
      } else {
        this.selectedYearJumlahLPKBelumTerakreditasi = null;
      }
    },
    handlePersebaranKapasitasLatihYearChanged(date) {
      if (date.$y !== 0) {
        this.selectedYearSebaranKapasitasLatih = date.$y;
      } else {
        this.selectedYearSebaranKapasitasLatih = null;
      }
    },
    handlePersentaseLulusanPelatihanDateChanged(date) {
      const start_year = date[0].$y;
      const start_month = date[0].$M;
      const start_date = date[0].$D;

      const end_year = date[0].$y;
      const end_month = date[0].$M;
      const end_date = date[0].$D;
      
      if (date.$y != 0) {
        this.selectedYear = date.$y;
        this.filterPersentaseLulusanPelatihan = "/recap-percentage-job-seekers-lpk-year/" + date.$y;
      } else {
        this.filterPersentaseLulusanPelatihan = "/recap-percentage-job-seekers-lpk";
      }
    },
    handlePersentaseLulusanPelatihanYearChanged(date) {
      if (date.$y != 0) {
        this.selectedYear = date.$y;
        this.filterPersentaseLulusanPelatihan = "/recap-percentage-job-seekers-lpk-year/" + date.$y;
      } else {
        this.filterPersentaseLulusanPelatihan = "/recap-percentage-job-seekers-lpk";
      }
    },
    handlePersentaseSebaranInstrukturYearChanged(date) {
      if (date.$y !== 0) {
        this.selectedYearSebaranInstruktur = date.$y;
      } else {
        this.selectedYearSebaranInstruktur = null;
      }
    },
    handlePersentaseSebaranTenagaPelatihanYearChanged(date) {
      if (date.$y !== 0) {
        this.selectedYearSebaranTenagaPelatihan = date.$y;
      } else {
        this.selectedYearSebaranTenagaPelatihan = null;
      }
    },
    handleTrenProduktifitasTenagaKerjaYearChanged(date) {
      if (date.$y !== 0) {
        this.selectedYearTrenProduktifitasTenagaKerja = date.$y;
      } else {
        this.selectedYearTrenProduktifitasTenagaKerja = null;
      }
    },
    handleKapasitasPPKProvinsiChanged(data) {
      switch (data.tipe) {
        case "provinsi":
          if (data.id != 0) {
            this.filterKapasitasPPKProvinsi = "/recap-capacity-province-ppk/" + data.id;
          } else {
            this.filterKapasitasPPKProvinsi = "/recap-capacity-ppk";
          }
          break;

        default:
          break;
      }
    },
    handleTrenJumlahKategoriProgramPelatihanChanged(date) {
      if (date.$y != 0) {
        this.filterTrenJumlahKategoriProgramPelatihan = "/recap-trends-number-training-program-categories-year/" + date.$y;
      } else {
        this.filterTrenJumlahKategoriProgramPelatihan = "/recap-trends-number-training-program-categories";
      }
    },
    handleProgramPelatihanProvinsiChanged(data) {
      switch (data.tipe) {
        case "provinsi":
          if (data.id != 0) {
            this.filterProgramPelatihanProvinsi = "/recap-training-programs-high-demand-province/" + data.id;
          } else {
            this.filterProgramPelatihanProvinsi = "/recap-training-programs-high-demand";
          }
          break;

        default:
          break;
      }
    },
    handleTrenJumlahPesertaPemaganganDagriYearChanged(date) {
      if (date.$y != 0) {
        this.filterTrenJumlahPesertaPemaganganDagri = "/recap-trends-number-apprentices-dagri-year/" + date.$y;
      } else {
        this.filterTrenJumlahPesertaPemaganganDagri = "/recap-trends-number-apprentices-dagri";
      }
    },
    handleTrenJumlahPesertaPemaganganDagriProvinsiChanged(data) {
      switch (data.tipe) {
        case "provinsi":
          if (data.id != 0) {
            this.filterTrenJumlahPesertaPemaganganDagriProvinsi = "/recap-trends-number-apprentices-dagri-province/" + data.id;
          } else {
            this.filterTrenJumlahPesertaPemaganganDagriProvinsi = "/recap-trends-number-apprentices-dagri";
          }
          break;

        default:
          break;
      }
    },
    handleTrenJumlahPesertaPemaganganLugriYearChanged(date) {
      if (date.$y != 0) {
        this.filterTrenJumlahPesertaPemaganganLugri = "/recap-trends-number-apprentices-lugri-year/" + date.$y;
      } else {
        this.filterTrenJumlahPesertaPemaganganLugri = "/recap-trends-number-apprentices-lugri";
      }
    },
    handleTrenJumlahPesertaPemaganganLugriProvinsiChanged(data) {
      switch (data.tipe) {
        case "provinsi":
          if (data.id != 0) {
            this.filterTrenJumlahPesertaPemaganganLugriProvinsi = "/recap-trends-number-apprentices-dagri-province/" + data.id;
          } else {
            this.filterTrenJumlahPesertaPemaganganLugriProvinsi = "/recap-trends-number-apprentices-dagri";
          }
          break;

        default:
          break;
      }
    },
    handleProduktifitasChanged(date) {
      if (date.$y != 0) {
        this.filterProduktifitas = "/recap-labor-productivity-year/" + date.$y;
      } else {
        this.filterProduktifitas = "/recap-labor-productivity";
      }
    },
    handleProgramPelatihanMasaTungguLulusChanged(data) {
      switch (data.tipe) {
        case "programPelatihMasaTunggu":
          if (data.uniq_id != 0) {
            this.filterMasaTunggu = "/recap-waiting-period-graduate-pie-training/" + data.uniq_id;
          } else {
            this.filterMasaTunggu = "/recap-waiting-period-graduate-pie";
          }
          break;

        default:
          break;
      }
    },
    handleProgramPelatihanTingkatPenyerapanLulusChanged(data) {
      switch (data.tipe) {
        case "programPelatihanTingkatPenyerapan":
          if (data.uniq_id != 0) {
            this.filterTingkatPenyerapan = "/recap-graduate-absorption-rate-pie-training/" + data.uniq_id;
          } else {
            this.filterTingkatPenyerapan = "/recap-graduate-absorption-rate-pie";
          }
          break;

        default:
          break;
      }
    },
    handleLoadingComplete(isLoading) {
      console.log('mantep', isLoading)
      this.isLoading = false;
    },
  },
}
</script>

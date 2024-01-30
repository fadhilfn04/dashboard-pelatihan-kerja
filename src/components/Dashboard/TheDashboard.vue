<template>
  <LoadingSpinner v-if="isLoading" />
  <particles></particles>
  <div class="text-end mb-3">
    <!-- <a-button type="primary" @click="handleOpen(true)">Begin Tour</a-button> -->
    <a-button type="primary" style="background-color: blue; border-color: blue; color: white;" @click="handleOpen(true)">Mulai tur aplikasi</a-button>
  </div>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Lembaga Pelatihan Kerja Terverifikasi di Indonesia s.d Bulan Desember Tahun 2024
      </h5>
      <div class="dashboard-container">
        <a-form class="filter-form">
          <a-form-item ref="tour1" class="province">
            <a-select
              placeholder="Semua Provinsi/Wilayah"
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="onProvinceChange($event)"
            >
              <a-select-option
                v-for="(provinceContent, index) in provinceContents"
                :key="index"
                :value="provinceContent.id"
                >{{ provinceContent.name }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-tooltip title="Pilih provinsi/wilayah terlebih dahulu">
            <a-form-item ref="tour2" class="city">
              <a-select
                placeholder="Semua Kabupaten/Kota"
                :getPopupContainer="(triggerNode) => triggerNode.parentNode"
                option-filter-prop="children"
                :filter-option="filterOption"
                @change="onCityChange($event)"
                :disabled="isDisable"
              >
                <a-select-option
                  v-for="(cityContent, index) in cityContents"
                  :key="index"
                  :value="cityContent.id"
                  >{{ cityContent.name }}</a-select-option
                >
              </a-select>
            </a-form-item>
          </a-tooltip>
          <!-- <a-form-item class="institutionType">
            <a-select
              placeholder="Semua Tipe Lembaga"
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="onInstitutionTypeChange($event)"
            >
              <a-select-option
                v-for="(institutionTypeContent, index) in institutionTypeContents"
                :key="index"
                :value="institutionTypeContent.id"
                >{{ institutionTypeContent.nama_tipe_lembaga }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item class="trainingCapacity">
            <a-select 
              placeholder="Semua Kapasitas Latih"
              :filter-option="filterOption"
              @change="onTrainingCapacityChange($event)"
            >
              <a-select-option value="kurang_500">Kurang dari 500</a-select-option>
              <a-select-option value="lebih_500">Lebih dari 500</a-select-option>
              <a-select-option value="kurang_1000">Kurang dari 1000</a-select-option>
              <a-select-option value="lebih_1000">Lebih dari 1000</a-select-option>
            </a-select>
          </a-form-item> -->
          <a-tooltip title="Klik untuk reset">
            <a-button @click="resetRepositories" type="primary" style="background-color: blue; border-color: blue; color: white;">
              <template #icon>
                <a-space>
                  <SyncOutlined spin style="vertical-align: middle;"/>
                </a-space>
              </template>
            </a-button>
          </a-tooltip>
        </a-form>
        <div ref="tour3" id="map">
        </div>
        <div v-if="isOpenDetail">
          <COffcanvas placement="start" :visible="visible" @hide="() => { visible = !visible }">
            <COffcanvasHeader>
              <COffcanvasTitle>
                <div class="title">
                  {{ detailLembaga.kab_kota ? detailLembaga.kab_kota : '-' }}
                </div>
              </COffcanvasTitle>
            </COffcanvasHeader>
            <COffcanvasBody>
              <div class="title">Nama Lembaga</div>
              <div class="info">{{ detailLembaga.nama_lembaga ? detailLembaga.nama_lembaga : '-' }}</div>
              <div class="title">No. VIN</div>
              <div class="info">{{ detailLembaga.no_vin ? detailLembaga.no_vin : '-' }}</div>
              <!-- <div class="title">Tipe Lembaga</div>
              <div class="info">{{ detailLembaga.tipe_lembaga ? detailLembaga.tipe_lembaga : '-' }}</div> -->
              <div class="title">Email</div>
              <div class="info">{{ detailLembaga.email ? detailLembaga.email : '-' }}</div>
              <div class="title">Nomor Telepon</div>
              <div class="info">{{ detailLembaga.no_telp ? detailLembaga.no_telp : '-' }}</div>
              <div class="title">Provinsi</div>
              <div class="info">{{ detailLembaga.provinsi ? detailLembaga.provinsi : '-' }}</div>
              <div class="title">Kota/Kabupaten</div>
              <div class="info">{{ detailLembaga.kabupaten_kota ? detailLembaga.kabupaten_kota : '-' }}</div>
              <div class="title">Alamat</div>
              <div class="info">{{ detailLembaga.alamat ? detailLembaga.alamat : '-' }}</div>
              <div class="title">Status Akreditasi</div>
              <div class="info">{{ detailLembaga.status_akreditasi ? detailLembaga.status_akreditasi : '-' }}</div>
              <!-- <div class="title">Kapasitas Latih</div>
              <div class="info">{{ detailLembaga.kapasitas_latih ? detailLembaga.kapasitas_latih : '-' }}</div> -->
            </COffcanvasBody>
          </COffcanvas>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div ref="tour4" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
            Jumlah Lembaga Pelatihan Kerja Terverifikasi di Indonesia Menurut Tipe Lembaga s.d Bulan Desember Tahun 2024
          </h5>
          <JumlahLembagaPelatihanKerja />
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Jumlah Lembaga Pelatihan Kerja Yang Sudah dan Belum Terakreditasi di Indonesia s.d Bulan Desember Tahun 2024
      </h5>
    <!-- <PetaPersebaranLPKTerakreditasi /> -->
    </div>
  </div>

  <!-- <div class="grid grid-cols-3 gap-8">
    <div class="col-span-1">
      <div ref="tour5" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-start">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Tingkat Akreditasi Lembaga Pelatihan Kerja
            </h5>
          </div>
          <TingkatAkreditasiLembagaPelatihanKerja />
        </div>
      </div>
    </div>
    
    <div class="col-span-3">
      <div ref="tour6" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Kapasitas Program Pelatihan Kerja
              </h5>
              <FilterKapasitasPPKProvinsi
                @provinsiKapasitasPPKChanged="handleKapasitasPPKProvinsiChanged"
                tipe="provinsi"
              />
            </div>
          <KapasitasPPK :filter="filterKapasitasPPKProvinsi"/>
        </div>
      </div>
    </div>
  </div> -->

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Persebaran Kapasitas Latih di Indonesia s.d Bulan Desember Tahun 2024
      </h5>
    <PetaPersebaranKapasitasLatih />
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
              Persentase Lulusan Pelatihan yang Bekerja s.d Bulan Desember Tahun 2024
            </h5>
          </div>
          <PersentaseTingkatPencariKerjaPadaLPK />
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="grid grid-cols-4 gap-8">
    <div class="col-span-2">
      <div ref="tour9" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Tren Jumlah Kategori Program Pelatihan
              </h5>
              <div class="relative w-32">
                <DatePicker picker="year" id="datepicker_tren"
                  v-model="selectedDate"
                  @change="handleTrenJumlahKategoriProgramPelatihanChanged"  
                />
              </div>
            </div>
          <TrenJumlahKategoriProgramPelatihan :filter="filterTrenJumlahKategoriProgramPelatihan"/>
        </div>
      </div>
    </div>

    <div class="col-span-4">
      <div ref="tour10" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Program Pelatihan Yang Banyak Diminati
              </h5>
            </div>
          <ProgramPelatihanBanyakDiminati :filter="filterProgramPelatihanProvinsi"/>
        </div>
      </div>
    </div>
  </div> -->

  <div class="grid grid-cols-4 gap-8">
    <div class="col-span-2">
      <div ref="tour11" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Tren Jumlah Peserta Pemagangan Dalam Negeri
              </h5>
              <!-- <div class="relative w-32">
                <DatePicker picker="year" id="datepicker_tren"
                  v-model="selectedDate"
                  @change="handleTrenJumlahPesertaPemaganganChanged"  
                />
              </div> -->
            </div>
            <TrenJumlahPesertaPemaganganDalamNegeri />
          <!-- <TrenJumlahPesertaPemagangan :filter="filterTrenJumlahPesertaPemagangan"/> -->
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
              <!-- <div class="relative w-32">
                <DatePicker picker="year" id="datepicker_tren"
                  v-model="selectedDate"
                  @change="handleTrenJumlahPesertaPemaganganChanged"  
                />
              </div> -->
            </div>
            <TrenJumlahPesertaPemaganganLuarNegeri />
          <!-- <TrenJumlahPesertaPemagangan :filter="filterTrenJumlahPesertaPemagangan"/> -->
        </div>
      </div>
    </div>

    <!-- <div class="col-span-1">
      <div ref="tour12" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Lulusan Pelatihan ke Bekerja
            </h5>
            <div class="relative w-32">
              <DatePicker picker="year" id="datepicker_produktifitas"
                v-model="selectedDate"
                @change="handleProduktifitasChanged"  
              />
            </div>
          </div>
          <LulusanPelatihanBekerja :filter="filterProduktifitas" @loading-complete="handleLoadingComplete" />
        </div>
      </div>
    </div> -->
  </div>

  <!-- <div class="grid grid-cols-4 gap-8">
    <div class="col-span-2">
      <div ref="tour13" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Jumlah Persentase Kategori Instruktur
            </h5>
            </div>
            <PersentaseKategoriInstruktur :filter="filterInstruktur"/>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div ref="tour14" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Jumlah Persentase Kategori Tenaga Pelatihan
            </h5>
            </div>
            <PersentaseKategoriTenagaPelatihan :filter="filterTenagaPelatihan"/>
        </div>
      </div>
    </div>
  </div> -->

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Persentase Kategori Instruktur s.d Bulan Desember Tahun 2024
      </h5>
    <PetaPersebaranKategoriInstruktur />
    </div>
  </div>

  <div
    class="w-full rounded-lg border border-gray-200 bg-white shadow mt-8"
    data-aos="zoom-in"
  >
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Persentase Kategori Tenaga Pelatihan s.d Bulan Desember Tahun 2024
      </h5>
    <PetaPersebaranTenagaPelatihan />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div ref="tour15" class="mt-8  w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Masa Tunggu Lulus ke Bekerja
            </h5>
          </div>
          <MasaTungguLulusBar />
        </div>
      </div>
    </div>
    <!-- <div class="col-span-1">
      <div ref="tour16" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Masa Tunggu Lulus ke Bekerja
            </h5>
            <FilterMasaTungguLulusProgramPelatihan
              @programPelatihanMasaTungguLulusChanged="handleProgramPelatihanMasaTungguLulusChanged"
              tipe="programPelatihanMasaTunggu"
            />
          </div>
          <MasaTungguLulusPie :filter="filterMasaTunggu"/>
        </div>
      </div>
    </div> -->
  </div>

  <!-- <div class="grid grid-cols-3 gap-8">
    <div class="col-span-2">
      <div ref="tour17" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Tingkat Penyerapan Lulusan
            </h5>
          </div>
          <TingkatPenyerapanLulusanBar />
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <div ref="tour18" class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Tingkat Penyerapan Lulusan
            </h5>
            <FilterTingkatPenyerapanLulusProgramPelatihan
              @programPelatihanTingkatPenyerapanLulusChanged="handleProgramPelatihanTingkatPenyerapanLulusChanged"
              tipe="programPelatihanTingkatPenyerapan"
            />
          </div>
          <TingkatPenyerapanLulusanPie :filter="filterTingkatPenyerapan"/>
        </div>
      </div>
    </div>
  </div> -->

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

  <a-tour v-model:current="current" :open="open" :steps="steps" @close="handleOpen(false)" />
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

.filter-form {
  display: flex;
  gap: 10px;
  padding: 10px;
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
import PersentaseTingkatPencariKerjaPadaLPK from "./PersentaseTingkatPencariKerjaPadaLPK.vue";
import TrenJumlahPesertaPemaganganLuarNegeri from "./TrenJumlahPesertaPemaganganLuarNegeri.vue";
import TingkatAkreditasiLembagaPelatihanKerja from "./TingkatAkreditasiLembagaPelatihanKerja.vue";
import TrenJumlahPesertaPemaganganDalamNegeri from "./TrenJumlahPesertaPemaganganDalamNegeri.vue";
import PersentasePeminatProgramPelatihanKejuruan from "./PersentasePeminatProgramPelatihanKejuruan.vue";
import FilterMasaTungguLulusProgramPelatihan from "../Shared/FilterMasaTungguLulusProgramPelatihan.vue";
import FilterTingkatPenyerapanLulusProgramPelatihan from "../Shared/FilterTingkatPenyerapanLulusProgramPelatihan.vue";
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
    MasaTungguLulusBar,
    MasaTungguLulusPie,
    COffcanvasTitle,
    COffcanvasHeader,
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
    PersentaseTingkatPencariKerjaPadaLPK,
    FilterMasaTungguLulusProgramPelatihan,
    TrenJumlahPesertaPemaganganLuarNegeri,
    TrenJumlahPesertaPemaganganDalamNegeri,
    TingkatAkreditasiLembagaPelatihanKerja,
    PersentasePeminatProgramPelatihanKejuruan,
    FilterTingkatPenyerapanLulusProgramPelatihan
  },

  setup() {
    const open = ref(false);
    const current = ref(0);

    const tour1 = ref(null);
    const tour2 = ref(null);
    const tour3 = ref(null);
    const tour4 = ref(null);
    const tour5 = ref(null);
    const tour6 = ref(null);
    const tour7 = ref(null);
    const tour8 = ref(null);
    const tour9 = ref(null);
    const tour10 = ref(null);
    const tour11 = ref(null);
    const tour12 = ref(null);
    const tour13 = ref(null);
    const tour14 = ref(null);
    const tour15 = ref(null);
    const tour16 = ref(null);
    const tour17 = ref(null);
    const tour18 = ref(null);
    const tour19 = ref(null);

    const steps = [
      {
        title: 'Filter Provinsi',
        description: 'Berfungsi untuk melakukan Filter Provinsi pada Peta Persebaran.',
        target: () => tour1.value.$el,
      },
      {
        title: 'Filter Kota',
        description: 'Berfungsi untuk melakukan Filter Kota pada Peta Persebaran.',
        target: () => tour2.value.$el,
      },
      {
        title: 'Peta Persebaran Lembaga Pelatihan Kerja Indonesia',
        description: 'Menampilkan Peta Persebaran Lembaga Pelatihan Kerja Indonesia.',
        target: () => tour3.value,
      },
      {
        title: 'Jumlah Lembaga Pelatihan Kerja',
        description: 'Menampilkan grafik Jumlah Lembaga Pelatihan Kerja.',
        target: () => tour4.value,
      },
      {
        title: 'Tingkat Akreditasi Lembaga Pelatihan Kerja',
        description: 'Menampilkan grafik Tingkat Akreditasi Lembaga Pelatihan Kerja.',
        target: () => tour5.value,
      },
      {
        title: 'Kapasitas Lembaga Pelatihan Kerja',
        description: 'Menampilkan grafik Kapasitas Lembaga Pelatihan Kerja.',
        target: () => tour6.value,
      },
      {
        title: 'Persentase Peminat Program Pelatihan Berdasarkan Kejuruan',
        description: 'Menampilkan grafik Persentase Peminat Program Pelatihan Berdasarkan Kejuruan.',
        target: () => tour7.value,
      },
      {
        title: 'Persentase Tingkat Pencari Kerja pada Lembaga Pelatihan Kerja',
        description: 'Menampilkan grafik Persentase Tingkat Pencari Kerja pada Lembaga Pelatihan Kerja.',
        target: () => tour8.value,
      },
      {
        title: 'Tren Jumlah Kategori Program Pelatihan',
        description: 'Menampilkan grafik Tren Jumlah Kategori Program Pelatihan.',
        target: () => tour9.value,
      },
      {
        title: 'Program Pelatihan Yang Banyak Diminati',
        description: 'Menampilkan grafik Program Pelatihan Yang Banyak Diminati.',
        target: () => tour10.value,
      },
      {
        title: 'Tren Jumlah Peserta Pemagangan',
        description: 'Menampilkan grafik Tren Jumlah Peserta Pemagangan.',
        target: () => tour11.value,
      },
      {
        title: 'Lulusan Pelatihan ke Bekerja',
        description: 'Menampilkan grafik Lulusan Pelatihan ke Bekerja.',
        target: () => tour12.value,
      },
      {
        title: 'Jumlah Persentase Kategori Instruktur',
        description: 'Menampilkan grafik Jumlah Persentase Kategori Instruktur.',
        target: () => tour13.value,
      },
      {
        title: 'Jumlah Persentase Kategori Tenaga Pelatihan',
        description: 'Menampilkan grafik Jumlah Persentase Kategori Tenaga Pelatihan.',
        target: () => tour14.value,
      },
      {
        title: 'Masa Tunggu Lulus ke Bekerja',
        description: 'Menampilkan grafik Masa Tunggu Lulus ke Bekerja.',
        target: () => tour15.value,
      },
      {
        title: 'Masa Tunggu Lulus ke Bekerja',
        description: 'Menampilkan grafik Masa Tunggu Lulus ke Bekerja.',
        target: () => tour16.value,
      },
      {
        title: 'Tingkat Penyerapan Lulusan',
        description: 'Menampilkan grafik Tingkat Penyerapan Lulusan.',
        target: () => tour17.value,
      },
      {
        title: 'Tingkat Penyerapan Lulusan',
        description: 'Menampilkan grafik Tingkat Penyerapan Lulusan.',
        target: () => tour18.value,
      },
      {
        title: 'Produktifitas Tenaga Kerja Berdasarkan Lapangan Usaha',
        description: 'Menampilkan grafik Produktifitas Tenaga Kerja Berdasarkan Lapangan Usaha.',
        target: () => tour19.value,
      },
    ];

    const handleOpen = (val) => {
      open.value = val;
    };

    return { open, current, steps, tour1, tour2, tour3, tour4, tour5, tour6, tour7, tour8, tour9, tour10, tour11, tour12, tour13, tour14, tour15, tour16, tour17, tour18, tour19, handleOpen };
  },

  data() {
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

      filterKapasitasPPKProvinsi                        : "/recap-capacity-ppk",
      filterTrenJumlahKategoriProgramPelatihan          : "/recap-trends-number-training-program-categories",
      filterProgramPelatihanProvinsi                    : "/recap-training-programs-high-demand",
      filterTrenJumlahPesertaPemagangan                 : "/recap-trends-number-apprentices",
      filterProduktifitas                               : "/recap-labor-productivity",
      filterInstruktur                                  : "/recap-instructor-category-percentage",
      filterTenagaPelatihan                             : "/recap-training-personnel-category-percentage",
      filterMasaTunggu                                  : "/recap-waiting-period-graduate-pie",
      filterTingkatPenyerapan                           : "/recap-graduate-absorption-rate-pie",
      selectedDate                                      : null,
      selectedYear                                      : null,
    }
  },

  async created() {
    await this.getProvince();
    await this.getTraining();
  },

  methods: {
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

    // async resetRepositories() {
    //   const token = JSON.parse(localStorage.getItem("token"));
    //   await fetch(
    //     import.meta.env.VITE_API_URL + '/repositories',
    //     {
    //       headers: {
    //           Authorization: "Bearer " + token.value,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return res.json();
    //   })
    //   .then((data) => data.features);

    //   this.institutionContents = await fetch(
    //     import.meta.env.VITE_API_URL + '/repositories',
    //     {
    //       headers: {
    //           Authorization: "Bearer " + token.value,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return res.json();
    //   })
    //   .then((data) => data.features);
    //   this.provinceId = ''
    //   this.cityId = ''
    //   this.institutionId = ''
    //   this.trainingCapacityValue = ''
    //   this.isDisable = true
    //   // this.form.resetFields()
    //   this.initMap(true)
    // },

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

    async getCity(value) {
      const token = JSON.parse(localStorage.getItem("token"));
      this.cityContents = await fetch(
        import.meta.env.VITE_API_URL + '/district-list/' + value,
        {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.data)
    },

    async filterProvince() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.institutionContents = await fetch(
        import.meta.env.VITE_API_URL + '/provinceFilter/' + this.provinceId,
          {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => data.features);
      this.initMap(true)
    },

    async filterCity() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.institutionContents = await fetch(
        import.meta.env.VITE_API_URL + '/cityFilter/' + this.cityId,
          {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => data.features);
      this.initMap(true)
    },

    async filterInstitution() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.institutionContents = await fetch(
        import.meta.env.VITE_API_URL + '/institutionFilter/' + this.institutionId,
          {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => data.features);
      this.initMap(true)
    },

    async filterTrainingCapacity() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.institutionContents = await fetch(
        import.meta.env.VITE_API_URL + '/trainingCapacityFilter/' + this.trainingCapacityValue,
          {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => data.features);
      this.initMap(true)
    },

    async getInstitution() {
      const token = JSON.parse(localStorage.getItem("token"));
      var allRepo = await fetch(
        import.meta.env.VITE_API_URL + '/repositories',
        {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
      .then((res) => res.json())
      .then((data) => data.features)

      var b = await fetch(
        import.meta.env.VITE_API_URL + '/repositories',
        {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.features)
        this.isLoading = false;
      return b
    },

    async initMap(value) {
      if (value != true) {
        var map = L.map('map', {
          zoomControl: false,
        }).setView([-3, 122], 5)

        L.control.fullscreen({
          position: 'topright',
        }).addTo(map)
      } else {
        this.isMaker.clearLayers()
        if (this.institutionContents && this.institutionContents.length > 0) {
          this.institutionContents.forEach((item) => {
            {
              var name_search = item.name,
              latitude = item.geometry.coordinates[0],
              longitude = item.geometry.coordinates[1]
              let marker = L.marker(new L.latLng(latitude, longitude), {
                id: item.properties.ID,
              })
              this.isMaker.addLayer(marker) //CLUSTER
              marker.on('click', this.onMapClick)
            }
          })
        }
        return false
      }
      this.institutionContents = await this.getInstitution()

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 5,
        maxZoom: 12,
        attribution: '© OpenStreetMap',
      }).addTo(map)

      L.control
        .zoom({
          position: 'topright',
        })
      .addTo(map)

      var legend = L.control({ position: "bottomleft" });

      legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "legend");
        div.innerHTML += "<h4>Keterangan Warna :</h4>";
        div.innerHTML += '<i style="background: #477AC2"></i><span>Merah: Jumlah LPK Sedikit</span><br>';
        div.innerHTML += '<i style="background: #477AC2"></i><span>Hijau: Jumlah LPK Banyak</span><br>';
        
        

        return div;
      };

      legend.addTo(map);

      var markers = L.markerClusterGroup()
      this.isMaker = markers

      if (this.institutionContents && this.institutionContents.length > 0) {
        this.institutionContents.forEach((item) => {
          {
            var name_search = item.name,
            latitude = item.geometry.coordinates[0],
            longitude = item.geometry.coordinates[1]
            let marker = L.marker(new L.latLng(latitude, longitude), {
              id: item.properties.ID,
            })
            markers.addLayer(marker)
            map.addLayer(markers)
            marker.on('click', this.onMapClick)
          }
        })
      }
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
    handleTrenJumlahPesertaPemaganganChanged(date) {
      if (date.$y != 0) {
        this.filterTrenJumlahPesertaPemagangan = "/recap-trends-number-apprentices-year/" + date.$y;
      } else {
        this.filterTrenJumlahPesertaPemagangan = "/recap-trends-number-apprentices";
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
      this.isLoading = isLoading;
    },
  },
  mounted() {
    this.initMap()
  },
}
</script>

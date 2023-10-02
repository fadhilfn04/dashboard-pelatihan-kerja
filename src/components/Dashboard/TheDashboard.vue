<template>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Pelatihan Kerja Indonesia
      </h5>
      <div class="dashboard-container">
        <a-form class="filter-form">
          <a-form-item class="province">
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
            <a-form-item class="city">
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
          <a-form-item class="institutionType">
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
          </a-form-item>
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
        <div id="map">
        </div>
        <div v-if="isOpenDetail">
          <COffcanvas placement="start" :visible="visible" @hide="() => { visible = !visible }">
            <COffcanvasHeader>
              <COffcanvasTitle>
                <div class="title">
                  {{ detailLembaga.kabupaten_kota }}
                </div>
              </COffcanvasTitle>
            </COffcanvasHeader>
            <COffcanvasBody>
              <div class="title">Nama Lembaga</div>
              <div class="info">{{ detailLembaga.nama_lembaga }}</div>
              <div class="title">No. VIN</div>
              <div class="info">{{ detailLembaga.no_vin }}</div>
              <div class="title">Tipe Lembaga</div>
              <div class="info">{{ detailLembaga.tipe_lembaga }}</div>
              <div class="title">Email</div>
              <div class="info">{{ detailLembaga.email }}</div>
              <div class="title">Nomor Telepon</div>
              <div class="info">{{ detailLembaga.no_telp }}</div>
              <div class="title">Provinsi</div>
              <div class="info">{{ detailLembaga.provinsi }}</div>
              <div class="title">Kota/Kabupaten</div>
              <div class="info">{{ detailLembaga.kabupaten_kota }}</div>
              <div class="title">Alamat</div>
              <div class="info">{{ detailLembaga.alamat }}</div>
              <div class="title">Status Akreditasi</div>
              <div class="info">{{ detailLembaga.status_akreditasi }}</div>
              <div class="title">Kapasitas Latih</div>
              <div class="info">{{ detailLembaga.kapasitas_latih }}</div>
            </COffcanvasBody>
          </COffcanvas>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
            Jumlah Lembaga Pelatihan Kerja
          </h5>
          <JumlahLembagaPelatihanKerja />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-1">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
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
    
    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Kapasitas Lembaga Pelatihan Kerja
              </h5>
              <FilterKapasitasLPKProvinsi
                @provinsiKapasitasLPKChanged="handleKapasitasLPKProvinsiChanged"
                tipe="provinsi"
              />
            </div>
          <KapasitasLPK :filter="filterKapasitasLPKProvinsi"/>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-3">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
          <div class="flex justify-between">
            <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
              Persentase Tingkat Pencari Kerja pada LPK
            </h5>
          </div>
  
          <PersentaseTingkatPencariKerjaPadaLPK />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-8">
    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
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

    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Program Pelatihan Yang Banyak Diminati
              </h5>
              <!-- <FilterProgramPelatihanProvinsi
                @provinsiProgramPelatihanChanged="handleProgramPelatihanProvinsiChanged"
                tipe="provinsiProgramPelatihan"
              /> -->
            </div>
          <ProgramPelatihanBanyakDiminati :filter="filterProgramPelatihanProvinsi"/>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Tren Jumlah Peserta Pemagangan
              </h5>
              <div class="relative w-32">
                <DatePicker picker="year" id="datepicker_tren"
                  v-model="selectedDate"
                  @change="handleTrenJumlahPesertaPemaganganChanged"  
                />
              </div>
            </div>
          <TrenJumlahPesertaPemagangan :filter="filterTrenJumlahPesertaPemagangan"/>
        </div>
      </div>
    </div>

    <div class="col-span-1">
      <div class="mt-8 mb-5 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-5">
            <div class="flex justify-between">
              <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
                Produktifitas Tenaga Kerja
              </h5>
              <div class="relative w-32">
                <DatePicker picker="year" id="datepicker_produktifitas"
                  v-model="selectedDate"
                  @change="handleProduktifitasChanged"  
                  />
                </div>
              </div>
              <a-tooltip title="Data nya belum dari WLKP">
                <ProduktifitasTenagaKerja :filter="filterProduktifitas"/>
              </a-tooltip>
          </div>
        </div>
      </div>
  </div>
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
import JumlahLembagaPelatihanKerja from "./JumlahLembagaPelatihanKerja.vue";
import TingkatAkreditasiLembagaPelatihanKerja from "./TingkatAkreditasiLembagaPelatihanKerja.vue";
import PersentaseTingkatPencariKerjaPadaLPK from "./PersentaseTingkatPencariKerjaPadaLPK.vue";
import KapasitasLPK from "./KapasitasLPK.vue";
import TrenJumlahKategoriProgramPelatihan from "./TrenJumlahKategoriProgramPelatihan.vue";
import ProgramPelatihanBanyakDiminati from "./ProgramPelatihanBanyakDiminati.vue";
import TrenJumlahPesertaPemagangan from "./TrenJumlahPesertaPemagangan.vue";
import ProduktifitasTenagaKerja from "./ProduktifitasTenagaKerja.vue";
import FilterKapasitasLPKProvinsi from "../Shared/FilterKapasitasLPKProvinsi.vue";
import FilterProgramPelatihanProvinsi from "../Shared/FilterProgramPelatihanProvinsi.vue";
import { DatePicker } from 'ant-design-vue';
import { SyncOutlined } from '@ant-design/icons-vue';
import { 
  COffcanvas, 
  COffcanvasHeader, 
  COffcanvasTitle, 
  COffcanvasBody } from '@coreui/vue';
export default {
  name: "TheDashboard",
    components: {
      TingkatAkreditasiLembagaPelatihanKerja,
      PersentaseTingkatPencariKerjaPadaLPK,
      KapasitasLPK,
      JumlahLembagaPelatihanKerja,
      ProduktifitasTenagaKerja,
      TrenJumlahKategoriProgramPelatihan,
      ProgramPelatihanBanyakDiminati,
      TrenJumlahPesertaPemagangan,
      FilterKapasitasLPKProvinsi,
      FilterProgramPelatihanProvinsi,
      DatePicker,
      COffcanvas,
      COffcanvasBody,
      COffcanvasTitle,
      COffcanvasHeader,
      SyncOutlined
    },

  data() {
    return {
      provinceId: '',
      cityId: '',
      institutionId: '',
      trainingCapacityValue: '',
      key: '',
      limitData: 100,
      isLoading: true,
      isDisable: true,
      isMaker: null,
      networkNodes: [],
      provinceContents: [],
      cityContents: [],
      institutionContents: [],
      institutionTypeContents: [],
      entityTypeContents: [],
      isOpenDetail: false,
      visible: false,
      allRepo: [],

      filterKapasitasLPKProvinsi                        : "/recap-capacity-lpk",
      filterTrenJumlahKategoriProgramPelatihan          : "/recap-trends-number-training-program-categories",
      filterProgramPelatihanProvinsi                    : "/recap-training-programs-high-demand",
      filterTrenJumlahPesertaPemagangan                 : "/recap-trends-number-apprentices",
      filterProduktifitas                               : "/recap-labor-productivity",
      selectedDate                                      : null,
      selectedYear                                      : null,
    }
  },

  async created() {
    await this.getProvince()
  },

  methods: {
    filterOption(input, option) {
      return (
        option.children.text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
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

      this.isLoading = false
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
      console.log(this.trainingCapacityValue)
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

    // async filterRepositories() {
    //   const token = JSON.parse(localStorage.getItem("token"));
    //   this.institutionContents = await fetch(
    //     import.meta.env.VITE_API_URL + 
    //         '/repositories?institutionId=' + 
    //         this.institutionId + 
    //         '&provinceId=' + 
    //         this.provinceId + 
    //         '&cityId=' + 
    //         this.cityId,
    //       {
    //       headers: {
    //         Authorization: "Bearer " + token.value,
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
    //   this.initMap(true)
    // },

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
          this.visible = !this.visible
          this.detailLembaga.nama_lembaga = response.data[0].nama_lembaga;
          this.detailLembaga.no_vin = response.data[0].no_vin;
          this.detailLembaga.tipe_lembaga = response.data[0].tipe_lembaga;
          this.detailLembaga.email = response.data[0].email;
          this.detailLembaga.no_telp = response.data[0].no_telp;
          this.detailLembaga.provinsi = response.data[0].provinsi;
          this.detailLembaga.kabupaten_kota = response.data[0].kabupaten_kota;
          this.detailLembaga.alamat = response.data[0].alamat;
          this.detailLembaga.status_akreditasi = response.data[0].status_akreditasi;
          this.detailLembaga.kapasitas_latih = response.data[0].kapasitas_latih;
        } else {
          console.log('empty data!')
        }
      });
    },

    closeDetail() {
      this.isOpenDetail = false
    },

    handleKapasitasLPKProvinsiChanged(data) {
      switch (data.tipe) {
        case "provinsi":
          if (data.id != 0) {
            this.filterKapasitasLPKProvinsi = "/recap-capacity-province-lpk/" + data.id;
          } else {
            this.filterKapasitasLPKProvinsi = "/recap-capacity-lpk";
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
  },
  mounted() {
    this.initMap()
  },
}
</script>

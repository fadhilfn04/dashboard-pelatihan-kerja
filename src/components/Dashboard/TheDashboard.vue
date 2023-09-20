<template>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Pelatihan Kerja Indonesia
      </h5>
      <div class="network-node-container">
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
                >{{ provinceContent.nama_provinsi }}</a-select-option
              >
            </a-select>
          </a-form-item>
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
                >{{ cityContent.nama_kabupaten_kota }}</a-select-option
              >
            </a-select>
          </a-form-item>
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
          <a-button @click="resetRepositories" type="primary" style="background-color: blue; border-color: blue; color: white;">
            Reset
          </a-button>
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
              <div id="detail-container-name" class="display: none">
                <div class="title">Nama Lembaga</div>
                <div class="info">{{ detailLembaga.nama_lembaga }}</div>
              </div>
              <div id="detail-container-id">
                <div class="title">No. VIN</div>
                <div class="info">{{ detailLembaga.no_vin }}</div>
              </div>
              <div id="detail-container-tipe">
                <div class="title">Tipe Lembaga</div>
                <div class="info">{{ detailLembaga.tipe_lembaga }}</div>
              </div>
              <div id="detail-container-email">
                <div class="title">Email</div>
                <div class="info">{{ detailLembaga.email }}</div>
              </div>
              <div id="detail-container-telp">
                <div class="title">Nomor Telepon</div>
                <div class="info">{{ detailLembaga.no_telp }}</div>
              </div>
              <div id="detail-container-province">
                <div class="title">Provinsi</div>
                <div class="info">{{ detailLembaga.provinsi }}</div>
              </div>
              <div id="detail-container-city">
                <div class="title">Kota/Kabupaten</div>
                <div class="info">{{ detailLembaga.kabupaten_kota }}</div>
              </div>
              <div id="detail-container-address">
                <div class="title">Alamat</div>
                <div class="info">{{ detailLembaga.alamat }}</div>
              </div>
              <div id="detail-container-time">
                <div class="title">Status Akreditasi</div>
                <div class="info">{{ detailLembaga.status_akreditasi }}</div>
              </div>
              <div id="detail-container-amount">
                <div class="title">Kapasitas Latih</div>
                <div class="info">{{ detailLembaga.kapasitas_latih }}</div>
              </div>
            </COffcanvasBody>
          </COffcanvas>
        </div>
      </div>
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

<style>
@media only screen and (max-width: 600px) {
  .network-node-container .detail-container {
    width: 100% !important;
  }

  #name {
    display: none;
  }
  #detail-container-name {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    border-top: 1px solid rgba(227, 227, 227, 1);
    padding-top: 35px;
  }
  #detail-container-id {
    font-size: 15px;
  }
  #detail-container-address {
    font-size: 15px;
  }

  #detail-container-tipe {
    display: none;
  }
  #detail-container-email {
    display: none;
  }
  #detail-container-telp {
    display: none;
  }
  #detail-container-province {
    display: none;
  }
  #detail-container-city {
    display: none;
  }
  #detail-container-time {
    display: none;
  }
  #detail-container-amount {
    display: none;
  }
  .network-node-container .detail-container .detail-button {
    box-sizing: content-box;
    height: 35px !important;
  }
}

.network-node-container #map {
  height: 75vh;
}

.network-node-container .detail-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background: white;
  z-index: 999999;
  width: 325px;
  display: flex;
  flex-direction: column;
  padding: 10px 25px;
  overflow: auto;
}

/* width */
.network-node-container ::-webkit-scrollbar {
  width: 14px;
}

/* Track */
.network-node-container ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.network-node-container ::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.network-node-container ::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.network-node-container .detail-container img {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 25px;
}

.network-node-container .detail-container .name {
  font-weight: bolder;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(227, 227, 227, 1);
  margin-bottom: 25px;
}

.network-node-container .detail-container .title {
  font-weight: bold;
  margin-bottom: 5px;
}

.network-node-container .detail-container .info {
  margin-bottom: 15px;
}

.network-node-container .detail-container .detail-button {
  background: #2a66d4;
  color: white;
  border: 0;
  height: auto;
  padding: 10px 25px;
  font-weight: bold;
  margin-top: 25px;
}

.network-node-container .detail-container .close-container {
  position: absolute;
  top: 20px;
  right: 5%;
  background: rgba(0, 0, 0, 0.5);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  z-index: 100;
}

.network-node-container .detail-container .close {
  color: white;
  font-size: 16px;
}

.network-node-container .detail-container .close:hover {
  cursor: pointer;
}

.network-node-container .filter-form {
  display: flex;
  gap: 10px;
  padding: 10px;
}

.network-node-container .filter-form .province,
.network-node-container .filter-form .city,
.network-node-container .filter-form .institutionType,
.network-node-container .filter-form .trainingCapacity {
  flex: 1;
  margin: 0px !important;
}
/*Legend specific*/
.legend {
  padding: 10px 10px;
  font: 14px Arial, Helvetica, sans-serif;
  line-height: 24px;
  color: #555;
}
.legend .ant-select-selection {
  display: block;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1.02px solid #d9d9d9;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 100%;
}
</style>

<script>
import axios from "axios";
import JumlahLembagaPelatihanKerja from "./JumlahLembagaPelatihanKerja.vue";
import TingkatAkreditasiLembagaPelatihanKerja from "./TingkatAkreditasiLembagaPelatihanKerja.vue";
import PersentaseLPKTerhadapPencariKerja from "./PersentaseLPKTerhadapPencariKerja.vue";
import KapasitasLPK from "./KapasitasLPK.vue";
import TrenJumlahPesertaPelatihan from "./TrenJumlahPesertaPelatihan.vue";
import ProduktifitasTenagaKerja from "./ProduktifitasTenagaKerja.vue";

import FilterProvinsi from "../Shared/FilterProvinsi.vue";
import { DatePicker } from 'ant-design-vue';
import { 
  COffcanvas, 
  COffcanvasHeader, 
  COffcanvasTitle, 
  COffcanvasBody } from '@coreui/vue';
export default {
  layout: 'network-node-page',
  name: "TheDashboard",
    components: {
      TingkatAkreditasiLembagaPelatihanKerja,
      PersentaseLPKTerhadapPencariKerja,
      KapasitasLPK,
      JumlahLembagaPelatihanKerja,
      ProduktifitasTenagaKerja,
      TrenJumlahPesertaPelatihan,
      FilterProvinsi,
      DatePicker,
      COffcanvas,
      COffcanvasBody,
      COffcanvasTitle,
      COffcanvasHeader,
    },

  data() {
    return {
      // form: this.$form.Form(this, { name: 'form' }),
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

      filterProvinsi            : "/recap-capacity-lpk",
      filterTrenJumlah          : "/recap-trends-number-trainees",
      filterProduktifitas       : "/recap-labor-productivity",
      selectedDate              : null,
      selectedYear              : null,
    }
  },

  computed: {
    language() {
      return this.$store.state.languageActive.key
    },
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

    async resetRepositories() {
      const token = JSON.parse(localStorage.getItem("token"));
      await fetch(
        import.meta.env.VITE_API_URL + '/repositories',
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

      this.institutionContents = await fetch(
        import.meta.env.VITE_API_URL + '/repositories',
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
      this.provinceId = ''
      this.cityId = ''
      this.institutionId = ''
      this.trainingCapacityValue = ''
      this.isDisable = true
      // this.form.resetFields()
      this.initMap(true)
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
        import.meta.env.VITE_API_URL + '/repositories?limit=' + allRepo,
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
            markers.addLayer(marker) //CLUSTER
            map.addLayer(markers) // marker.on('click', this.onMapClick(nn))
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
          this.visible = true
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
            this.filterProvinsi = "/recap-capacity-province-lpk/" + data.id;
          } else {
            this.filterProvinsi = "/recap-capacity-lpk";
          }
          break;

        default:
          break;
      }
    },
    handleTrenJumlahChanged(date) {
      if (date.$y != 0) {
        this.filterTrenJumlah = "/recap-trends-number-trainees-year/" + date.$y;
      } else {
        this.filterTrenJumlah = "/recap-trends-number-trainees";
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

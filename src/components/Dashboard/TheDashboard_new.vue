<template>
  <!-- <div class="network-node-container">
    <div class="legend-container">
      <a-form class="legend-form">
        <a-form-item class="provinsi">
          <a-select
            placeholder="Pilih Provinsi"
            @change="onProvinceChange($event)"
            v-decorator="['province', {}]"
          >
            <a-select-option
              v-for="(provinceContent, index) in provinceContents"
              :key="index"
              :value="provinceContent.id"
              >{{ provinceContent.name }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item class="city">
          <a-select placeholder="Pilih Kab/Kota" v-decorator="['city', {}]">
            <a-select-option
              v-for="(cityContent, index) in cityContents"
              :key="index"
              :value="cityContent.id"
              >{{ cityContent.name }}</a-select-option
            >
          </a-select>
        </a-form-item>
        <a-form-item class="instance">
          <a-select placeholder="Pilih Instansi" v-decorator="['instance', {}]">
            <a-select-option
              v-for="(instanceContent, index) in institutionContents"
              :key="index"
              :value="instanceContent.id"
              >{{ instanceContent.nameParallel }}</a-select-option
            >
          </a-select>
        </a-form-item>
      </a-form>
    </div>
    <div id="map">
      <div v-if="isOpenDetail" class="detail-container">
        <img :src="detailProfile.logo" :alt="detailProfile.name" />

        <div class="name" id="name">{{ detailProfile.name }}</div>
        <div id="detail-container-name" class="display: none">
          <div class="title">Nama</div>
          <div class="info">{{ detailProfile.name }}</div>
        </div>
        <div id="detail-container-id">
          <div class="title">KODE</div>
          <div class="info">{{ detailProfile.code }}</div>
        </div>
        <div id="detail-container-tipe">
          <div class="title">TIPE</div>
          <div class="info">{{ detailProfile.type }}</div>
        </div>
        <div id="detail-container-email">
          <div class="title">EMAIL</div>
          <div class="info">{{ detailProfile.email }}</div>
        </div>
        <div id="detail-container-telp">
          <div class="title">NOMOR TELEPON</div>
          <div class="info">{{ detailProfile.telp }}</div>
        </div>
        <div id="detail-container-province">
          <div class="title">PROVINSI</div>
          <div class="info">{{ detailProfile.province }}</div>
        </div>
        <div id="detail-container-city">
          <div class="title">KOTA/KABUPATEN</div>
          <div class="info">{{ detailProfile.city }}</div>
        </div>
        <div id="detail-container-address">
          <div class="title">ALAMAT</div>
          <div class="info">{{ detailProfile.address }}</div>
        </div>
        <div id="detail-container-time">
          <div class="title">WAKTU LAYANAN</div>
          <div class="info">{{ detailProfile.serviceDate }}</div>
        </div>
        <div id="detail-container-amount">
          <div class="title">JUMLAH KHAZANAH</div>
          <div class="info">{{ detailProfile.archiveCount }}</div>
        </div>
        <a-button
          class="detail-button"
          @click="redirectProfileSJ(detailPrfofile.code)"
          >Detail Simpul Jaringan</a-button
        >

        <div class="close-container">
          <a-icon class="close" type="close" @click="closeDetail" />
        </div>
      </div>
    </div>
  </div> -->

  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Pelatihan Kerja Indonesia
      </h5>
      <a-form class="filter-form">
        <a-form-item class="provinsi">
          <a-select
            placeholder="Pilih Provinsi"
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
        <a-form-item class="kota">
          <a-select placeholder="Semua Kabupaten/Kota" show-search>
            <a-select-option v-for="kabKota in cityContents" :key="kabKota.id" :value="kabKota.id" :id_provinsi="kabKota.id_provinsi">
              {{ kabKota.nama_kabupaten_kota }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item class="tipeLembaga">
          <a-select placeholder="Semua Tipe Lembaga" show-search>
            <a-select-option v-for="tipeLembaga in institutionContents" :key="tipeLembaga.id" :value="tipeLembaga.nama_tipe_lembaga">
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
          <!-- <a-button @click="resetMap" type="primary" style="background-color: blue; border-color: blue; color: white;">
            Reset
          </a-button> -->
      </a-form>
    </div>
    <div id="map">
      <!-- <div v-if="isOpenDetail" class="detail-container">
        <img :src="detailProfile.logo" :alt="detailProfile.name" />

        <div class="name" id="name">{{ detailProfile.name }}</div>
        <div id="detail-container-name" class="display: none">
          <div class="title">Nama</div>
          <div class="info">{{ detailProfile.name }}</div>
        </div>
        <div id="detail-container-id">
          <div class="title">KODE</div>
          <div class="info">{{ detailProfile.code }}</div>
        </div>
        <div id="detail-container-tipe">
          <div class="title">TIPE</div>
          <div class="info">{{ detailProfile.type }}</div>
        </div>
        <div id="detail-container-email">
          <div class="title">EMAIL</div>
          <div class="info">{{ detailProfile.email }}</div>
        </div>
        <div id="detail-container-telp">
          <div class="title">NOMOR TELEPON</div>
          <div class="info">{{ detailProfile.telp }}</div>
        </div>
        <div id="detail-container-province">
          <div class="title">PROVINSI</div>
          <div class="info">{{ detailProfile.province }}</div>
        </div>
        <div id="detail-container-city">
          <div class="title">KOTA/KABUPATEN</div>
          <div class="info">{{ detailProfile.city }}</div>
        </div>
        <div id="detail-container-address">
          <div class="title">ALAMAT</div>
          <div class="info">{{ detailProfile.address }}</div>
        </div>
        <div id="detail-container-time">
          <div class="title">WAKTU LAYANAN</div>
          <div class="info">{{ detailProfile.serviceDate }}</div>
        </div>
        <div id="detail-container-amount">
          <div class="title">JUMLAH KHAZANAH</div>
          <div class="info">{{ detailProfile.archiveCount }}</div>
        </div>
        <a-button
          class="detail-button"
          @click="redirectProfileSJ(detailPrfofile.code)"
          >Detail Simpul Jaringan</a-button
        >

        <div class="close-container">
          <a-icon class="close" type="close" @click="closeDetail" />
        </div>
      </div> -->
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
  .map {
    width: 100% !important;
  }
  .detail-container {
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
  height: 100vh;
  position: relative;
  z-index: 0;
}

.network-node-container .custom-marker {
  width: 36px !important;
  height: 36px !important;
  margin-left: -18px !important;
  margin-top: -18px !important;
  border-radius: 100px;
  color: #31353f;
  background-color: rgba(255, 149, 89, 0.6);
  outline: 5px solid rgba(255, 149, 89, 0.3) !important;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 5px;
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
  padding: 0 25px;
  font-weight: bold;
  margin-top: 10px;
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

/* Legend */
.network-node-container .legend-container {
  background: transparent;
  position: absolute;
  z-index: 100;
  width: 70%;
  top: 6%;
  left: 30%;
}

.filter-form {
  display: flex;
  gap: 10px;
  padding: 10px;
}

.provinsi,
.kota,
.tipeLembaga,
.kapasitasLatih {
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
import { DatePicker } from 'ant-design-vue';
import FilterProvinsi from "../Shared/FilterProvinsi.vue";
import ButtonReset from "../Shared/ButtonReset.vue";

import * as L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen/Control.FullScreen.js";
import {
  LMap,
  LTileLayer,
  LMarker,
} from "@vue-leaflet/vue-leaflet";

export default {
  name: "TheDashboardNew",
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
    ButtonReset,
    LMap,
    LTileLayer,
    LMarker
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
      host                      : import.meta.env.VITE_API_URL,

      networkNodes: [],
      provinceContents: [],
      cityContents: [],
      institutionContents: [],
      isOpenDetail: false,
      detailProfile: {},
      key: '',
    };
  },

  async created() {
    await this.fetchProvinceContents();
    await this.getInstitution();
  },

  methods: {
    async fetchProvinceContents() {
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
          this.provinceContents = response.data.data;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    onProvinceChange(value) {
      this.getCity(value);
    },
    async getCity(value) {
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
          this.cityContents = response.data.data;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    async getInstitution() {
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
          this.institutionContents = response.data.data;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    async initMap() {
      this.institutionContents = this.getInstitution();

      var map = L.map('map', {
        zoomControl: false,
        center: new L.latLng(
          this.institutionContents[0].contact.latitude,
          this.institutionContents[0].contact.longitude
        ),
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: 'bottomright',
        },
      }).setView([-3, 122], 5)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 5,
        attribution: '© OpenStreetMap',
      }).addTo(map)

      var markersLayer = new L.LayerGroup()

      L.control
        .zoom({
          position: 'bottomright',
        })
        .addTo(map)

      L.control
        .resetView({
          cssClass: 'redo-icon',
          content: '',
        })
        .addTo(map)

      var markers = L.markerClusterGroup()
      var controlSearch = new L.Control.Search({
        position: 'topright',
        layer: markersLayer,
        initial: false,
        zoom: 12,
        marker: false,
      })

      map.addControl(controlSearch)

      this.institutionContents.forEach((element) => {
        console.log(element);
        if (element.contact != null) {
          var name_search = element.nameParallel,
            latitude = element.contact.latitude,
            // longitude = element.contact.longitude
            longitude = 110
          let marker = L.marker(new L.latLng(latitude, longitude), {
            // title: name_search,
            // alt: name_search,
            // name: name_search,
            // code: element.identifier,
            // email: element.contact.email,
            // telp: element.contact.phone,
            // type: element.type.name,
            // province: element.contact.region.province.name,
            // city: element.contact.region.city.name,
            // address: element.contact.streetAddress,
            // serviceDate: element.openingTimes,
            // archiveCount: 'Ini Archive Count',
          })
          markers.addLayer(marker) //CLUSTER
          map.addLayer(markers) // marker.on('click', this.onMapClick(nn))
          markersLayer.addLayer(marker) // SEARCH MARKER
          marker.on('click', this.onMapClick)
        }
      })
    },
    onMapClick(e) {
      console.log('map clicked!');
      // this.detailProfile = []
      // this.isOpenDetail = true
      // this.detailProfile.logo = '/picture/logo_anri.png'
      // this.detailProfile.name = e.target.options.name
      // this.detailProfile.code = e.target.options.code
      // this.detailProfile.type = e.target.options.type
      // this.detailProfile.email = e.target.options.email
      // this.detailProfile.telp = e.target.options.telp
      // this.detailProfile.province = e.target.options.province
      // this.detailProfile.city = e.target.options.city
      // this.detailProfile.address = e.target.options.address
      // this.detailProfile.serviceDate = e.target.options.serviceDate
      // this.detailProfile.archiveCount = e.target.options.archiveCount
    },

    closeDetail() {
      this.isOpenDetail = false
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
  },
};
</script>

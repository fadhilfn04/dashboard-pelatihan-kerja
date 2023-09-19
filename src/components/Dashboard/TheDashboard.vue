<template>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="p-5">
      <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
        Peta Persebaran Pelatihan Kerja Indonesia
      </h5>
      <div class="network-node-container">
        <a-form class="filter-form">
            <a-form-item class="provinsi">
              <a-select
                show-search
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
                show-search
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
                show-search
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
              <a-select placeholder="Semua Kapasitas Latih">
                <a-select-option value="kurang_500">Kurang dari 500</a-select-option>
                <a-select-option value="lebih_500">Lebih dari 500</a-select-option>
                <a-select-option value="kurang_1000">Kurang dari 1000</a-select-option>
                <a-select-option value="lebih_1000">Lebih dari 1000</a-select-option>
              </a-select>
            </a-form-item>
        </a-form>
        <div id="map">
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

  .network-node-container .legend-container {
    display: none;
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

@media only screen and (min-width: 600px) and (max-width: 992px) {
  .legend-container {
    display: none;
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

/* Legend */
.network-node-container .legend-container {
  background: transparent;
  position: absolute;
  z-index: 999999;
  width: 70%;
  left: 30%;
}

.network-node-container .legend-container .filter-form {
  display: flex;
  gap: 10px;
  padding: 10px;
}

.network-node-container .legend-container .filter-form .provinsi,
.network-node-container .legend-container .filter-form .city,
.network-node-container .legend-container .filter-form .institutionType,
.network-node-container .legend-container .filter-form .trainingCapacity {
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
import JumlahLembagaPelatihanKerja from "./JumlahLembagaPelatihanKerja.vue";
import TingkatAkreditasiLembagaPelatihanKerja from "./TingkatAkreditasiLembagaPelatihanKerja.vue";
import PersentaseLPKTerhadapPencariKerja from "./PersentaseLPKTerhadapPencariKerja.vue";
import KapasitasLPK from "./KapasitasLPK.vue";
import TrenJumlahPesertaPelatihan from "./TrenJumlahPesertaPelatihan.vue";
import ProduktifitasTenagaKerja from "./ProduktifitasTenagaKerja.vue";

import FilterProvinsi from "../Shared/FilterProvinsi.vue";
import { DatePicker } from 'ant-design-vue';
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
    },

  data() {
    return {
      // form: this.$form.createForm(this, { name: 'form' }),
      codeProvince: '',
      codeCity: '',
      typeId: '',
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
      detailProfile: {},
      allRepo: [],

      filterProvinsi            : "/rekap-kapasitas-lpk",
      filterTrenJumlah          : "/rekap-tren-jumlah-peserta-pelatihan",
      filterProduktifitas       : "/rekap-produktifitas-tenaga-kerja",
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
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
    },

    urlFile(path) {
      return this.$config.FILE_SERVICE_BASE_URL + '/' + path
    },

    async getProvince() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.provinceContents = await fetch(
        import.meta.env.VITE_API_URL + '/list-provinsi',
        {
          headers: {
              Authorization: "Bearer " + token.value,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.data)

      this.institutionTypeContents = await fetch(
        import.meta.env.VITE_API_URL + '/list-tipe-lembaga',
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
      var arr = []
      arr = value.split('/')
      value = arr[0]
      this.codeProvince = arr[1]
      if (this.isDisable == false) {
        this.typeId = ''
        this.codeCity = ''
        this.codeProvince = ''
        this.filterRepositories()
        this.getCity(value)
        return false
      }
      this.filterRepositories()
      this.isDisable = false
      this.getCity(value)
    },

    async resetRepositories() {
      const token = JSON.parse(localStorage.getItem("token"));
      var allRepo = await fetch(
        import.meta.env.VITE_API_URL + '/kabKota',
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
      .then((data) => data.data);

      this.institutionContents = await fetch(
        import.meta.env.VITE_API_URL + '/kabKota?limit=' + allRepo
      )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => data.data);
      this.typeId = ''
      this.codeCity = ''
      this.codeProvince = ''
      this.isDisable = true
      this.initMap(true)
    },

    onCityChange(value) {
      this.codeCity = value
      this.filterRepositories()
    },

    onInstitutionTypeChange(value) {
      this.typeId = value
      this.filterRepositories()
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
        import.meta.env.VITE_API_URL + '/list-kab-kota/' + value,
        {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.data)
    },

    async filterRepositories() {
      const token = JSON.parse(localStorage.getItem("token"));
      this.institutionContents = await fetch(
        import.meta.env.VITE_API_URL + '/kabKota',
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
      .then((data) => data.data);
      this.initMap(true)
    },

    async getInstitution() {
      const token = JSON.parse(localStorage.getItem("token"));
      var allRepo = await fetch(
          import.meta.env.VITE_API_URL + '/kabKota',
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
      .then((data) => data.data);

      var b = await fetch(
        import.meta.env.VITE_API_URL + '/kabKota?limit=' + allRepo,
        {
            headers: {
                Authorization: "Bearer " + token.value,
            },
          }
      )
        .then((res) => res.json())
        .then((data) => data.data)
      return b
    },

    async initMap(value) {
      if (value != true) {
        var map = L.map('map', {
          zoomControl: false,
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: 'bottomright',
          },
        }).setView([-3, 122], 5)
      } else {
        this.isMaker.clearLayers()
        this.institutionContents.forEach((element) => {
          if (
            element.contact != null &&
            element.contact.latitude != null &&
            element.contact.longitude != null
          ) {
            var name_search = element.name,
              latitude = element.contact.latitude,
              longitude = element.contact.longitude
            var provinceRepo = '-'
            var cityRepo = '-'
            if (element.contact.region != null) {
              if (element.contact.region.province != null) {
                provinceRepo = element.contact.region.province.name
              }
              if (element.contact.region.city != null) {
                cityRepo = element.contact.region.city.name
              }
            }
            let marker = L.marker(new L.latLng(latitude, longitude), {
              title: name_search,
              alt: name_search,
              name: name_search,
              id: element.repositoryId,
              code: element.identifier,
              email: element.contact.email,
              telp: element.contact.phone,
              type: element.type.name,
              logo: element.logo,
              province: provinceRepo,
              city: cityRepo,
              address: element.contact.streetAddress,
              serviceDate: element.openingTimes,
              archiveCount: 'Ini Archive Count',
            })
            this.isMaker.addLayer(marker) //CLUSTER
            marker.on('click', this.onMapClick)
          }
        })
        return false
      }
      this.institutionContents = await this.getInstitution()
      console.log(this.institutionContents)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 5,
        attribution: '© OpenStreetMap',
      }).addTo(map)

      L.control
        .zoom({
          position: 'bottomright',
        })
        .addTo(map)

      var markers = L.markerClusterGroup()
      this.isMaker = markers

      if (this.institutionContents && this.institutionContents.length > 0) {
        this.institutionContents.forEach((element) => {
          if (
            // Contact penting dan tidak boleh null (akan ditampilkan di data simpul)
            element.contact != null &&
            element.contact.latitude != null &&
            element.contact.longitude != null
          ) {
            var name_search = element.name,
              latitude = element.contact.latitude,
              longitude = element.contact.longitude
            var provinceRepo = '-'
            var cityRepo = '-'
            if (element.contact.region != null) {
              if (element.contact.region.province != null) {
                provinceRepo = element.contact.region.province.name
              }
              if (element.contact.region.city != null) {
                cityRepo = element.contact.region.city.name
              }
            }
            let marker = L.marker(new L.latLng(latitude, longitude), {
              title: name_search,
              alt: name_search,
              name: name_search,
              id: element.repositoryId,
              code: element.identifier,
              email: element.contact.email,
              telp: element.contact.phone,
              type: element.type.name,
              logo: element.logo,
              province: provinceRepo,
              city: cityRepo,
              address: element.contact.streetAddress,
              serviceDate: element.openingTimes,
              archiveCount: 'Ini Archive Count',
            })
            markers.addLayer(marker) //CLUSTER
            map.addLayer(markers) // marker.on('click', this.onMapClick(nn))
            // markersLayer.addLayer(marker) // SEARCH MARKER
            marker.on('click', this.onMapClick)
          }
        })
      }
    },
    onMapClick(e) {
      this.detailProfile = []
      this.isOpenDetail = true
      this.detailProfile.logo = e.target.options.logo
      this.detailProfile.id = e.target.options.id
      this.detailProfile.name = e.target.options.name
      this.detailProfile.code = e.target.options.code
      this.detailProfile.type = e.target.options.type
      this.detailProfile.email = e.target.options.email
      this.detailProfile.telp = e.target.options.telp
      this.detailProfile.logo = e.target.options.logo
      this.detailProfile.province = e.target.options.province
      this.detailProfile.city = e.target.options.city
      this.detailProfile.address = e.target.options.address
      this.detailProfile.serviceDate = e.target.options.serviceDate
      this.detailProfile.archiveCount = e.target.options.archiveCount
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

    // addHamburgerActive() {
    //   let that = this
    //   that.clearHamburgerActive()
    //   that.$store.commit('hamburgerActive/add', 'simpul-jaringan')
    // },

    // ...mapMutations({
    //   clearHamburgerActive: 'hamburgerActive/reset',
    // }),
  },
  mounted() {
    this.initMap()
  },
  beforeMount() {
    // this.addHamburgerActive()
  },
}
</script>

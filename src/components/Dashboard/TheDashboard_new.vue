<template>
  <!-- <a-spin :tip="$t('loader')" :spinning="isLoading"> -->
    <div class="network-node-container">
      <div class="legend-container">
        <a-form :form="form" class="legend-form">
          <a-form-item class="provinsi">
            <a-select
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
              show-search
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="onProvinceChange($event)"
              v-decorator="['province', {}]"
            >
              <a-select-option
                v-for="(provinceContent, index) in provinceContents"
                :key="index"
                :value="provinceContent.id + '/' + provinceContent.code"
                >{{ provinceContent.name }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item class="city">
            <a-select
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
              show-search
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="onCityChange($event)"
              v-decorator="['city', {}]"
              :disabled="isDisable"
            >
              <a-select-option
                v-for="(cityContent, index) in cityContents"
                :key="index"
                :value="cityContent.code"
                >{{ cityContent.name }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item class="instance">
            <a-select
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
              show-search
              option-filter-prop="children"
              :filter-option="filterOption"
              @change="onTypeChange($event)"
              v-decorator="['instance', {}]"
            >
              <a-select-option
                v-for="(entityTypeContent, index) in entityTypeContents"
                :key="index"
                :value="entityTypeContent.id"
                >{{ entityTypeContent.name }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item class="reset">
            <a-tooltip placement="topRight">
              <template slot="title">Reset Filter</template>
              <a-button
                @click="resetRepositories"
                class="reset-button"
                shape="circle"
                icon="retweet"
              />
            </a-tooltip>
          </a-form-item>
        </a-form>
      </div>
      <div id="map">
      </div>
    </div>
  <!-- </a-spin> -->
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

.network-node-container .legend-container .legend-form {
  display: flex;
  gap: 10px;
  padding: 10px;
}

.network-node-container .legend-container .legend-form .provinsi,
.network-node-container .legend-container .legend-form .city,
.network-node-container .legend-container .legend-form .instance {
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
// import { mapMutations } from 'vuex'
import axios from "axios";
export default {
  layout: 'network-node-page',

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
      entityTypeContents: [],
      cityContents: [],
      instanceContents: [],
      isOpenDetail: false,
      detailProfile: {},
      allRepo: [],
    }
  },

  async fetch() {
    this.provinceContents = await fetch(
      this.$config.CORE_SERVICE_BASE_URL +
        '/regions/province?limit=' +
        this.limitData
    )
      .then((res) => res.json())
      .then((data) => data.data)

    this.entityTypeContents = await fetch(
      this.$config.CORE_SERVICE_BASE_URL + '/types?limit=20'
    )
      .then((res) => res.json())
      .then((data) => data.data)

    this.isLoading = false
  },

  computed: {
    language() {
      return this.$store.state.languageActive.key
    },
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

    onProvinceChange(value) {
      var arr = []
      arr = value.split('/')
      value = arr[0]
      this.codeProvince = arr[1]
      if (this.isDisable == false) {
        this.form.resetFields()
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
      var allRepo = await fetch(
        import.meta.env.VITE_API_URL + '/list-provinsi'
      )
        .then((res) => res.json())
        .then((data) => data.pageSummary.total)

      this.instanceContents = await fetch(
        import.meta.env.VITE_API_URL + '/list-provinsi?limit=' + allRepo
      )
        .then((res) => res.json())
        .then((data) => data.data)
      this.typeId = ''
      this.codeCity = ''
      this.codeProvince = ''
      this.isDisable = true
      this.form.resetFields()
      this.initMap(true)
    },

    onCityChange(value) {
      this.codeCity = value
      this.filterRepositories()
    },

    onTypeChange(value) {
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
      this.cityContents = await fetch(
        this.$config.CORE_SERVICE_BASE_URL +
          '/regions/province/' +
          value +
          '/city?limit=' +
          this.limitData
      )
        .then((res) => res.json())
        .then((data) => data.data)
    },

    async filterRepositories() {
      this.instanceContents = await fetch(
        import.meta.env.VITE_API_URL +
          '/list-provinsi?typeId=' +
          this.typeId +
          '&provinceCode=' +
          this.codeProvince +
          '&cityCode=' +
          this.codeCity
      )
        .then((res) => res.json())
        .then((data) => data.data)
      this.initMap(true)
    },

    async getInstance() {
      const token = JSON.parse(localStorage.getItem("token"));
      var allRepo = await fetch(
          import.meta.env.VITE_API_URL + '/list-provinsi',
          {
            headers: {
                Authorization: "Bearer " + token.value,
            },
          }
      )
          .then((res) => res.json())  
          .then((data) => data);


      var b = await fetch(
        import.meta.env.VITE_API_URL + '/list-provinsi?limit=' + allRepo,
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
        this.instanceContents.forEach((element) => {
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
      this.instanceContents = await this.getInstance()

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

      this.instanceContents.forEach((element) => {
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

    redirectProfileSJ(id) {
      let routeData = this.$router.resolve({
        name: 'deskripsi-arsip-sj-id___' + this.language,
        params: { id: id },
      })
      window.open(routeData.href, '_blank')
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

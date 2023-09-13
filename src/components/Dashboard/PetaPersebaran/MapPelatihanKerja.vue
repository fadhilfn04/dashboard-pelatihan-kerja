<template>
  <div class="h-[32rem] w-full" id="container">
    <LMap
      ref="map"
      style="z-index: 0;"
      :use-global-leaflet="true"
      :center="center"
      :zoom="zoomMap"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      :zoomAnimation="true"
      :markerZoomAnimation="true"
    >
    <template>
      <LTileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      >
      </LTileLayer>
    </template>
    </LMap>
  </div>

  <div v-if="showCanvas">
    <CButton color="primary" @click="() => { visible = !visible }">Toggle offcanvas</CButton>
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
</template>

<style>
  .detail-lembaga {
    height: 100vh;
    position: relative;
    z-index: 0;
  }
  .detail-container {
    width: 100% !important;
  }
  .detail-container-name {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    border-top: 1px solid rgba(227, 227, 227, 1);
    padding-top: 35px;
  }
  .detail-container-id {
    font-size: 15px;
  }
  .detail-container-address {
    font-size: 15px;
  }
  .detail-container-tipe {
    display: none;
  }
  .detail-container-email {
    display: none;
  }
  .detail-container-telp {
    display: none;
  }
  .detail-container-province {
    display: none;
  }
  .detail-container-city {
    display: none;
  }
  .detail-container-time {
    display: none;
  }
  .detail-container-amount {
    display: none;
  }
  .title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .info {
    margin-bottom: 15px;
  }
</style>

<script>
import axios from "axios";
import * as L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen/Control.FullScreen.js";
import { Modal } from "flowbite-vue";
import { 
  CAlert, 
  CButton, 
  COffcanvas, 
  COffcanvasBody, 
  COffcanvasTitle, 
  COffcanvasHeader, 
  CCloseButton } from '@coreui/vue';
import {
  LMap,
  LTileLayer,
  LMarker,
} from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapPelatihanKerja",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Modal,
    CAlert,
    CButton,
    COffcanvas,
    COffcanvasBody,
    COffcanvasTitle,
    COffcanvasHeader,
    CCloseButton
  },
  emits: ["refresh-map"],
  data() {
    return {
      minZoom: 5,
      maxZoom: 12,
      zoomMap: 5,
      dataMap: undefined,
      isOpenDetail: false,
      selectedMarker: null,
      visible: false,
      showCanvas: false,
      host: import.meta.env.VITE_API_URL,
      markerCluster: null
    };
  },
  props: {
    zoom: Number,
    level: Number,
    center: Array,
    legends: Array,
    selectedProvinceId: Number,
    dataMarker: {
      type: Array,
      required: true,
    },
  },
  methods: {
    markerLatLng(marker) {
      return [marker.lat, marker.lng];
    },
    initMap() {   
      if (this.formattedDataMarker && this.formattedDataMarker.length > 0) {
        const self = this;
        const dataMarker = this.formattedDataMarker;
        
        L.Map.addInitHook(function () {
          if (self.markerCluster) {
            self.markerCluster.clearLayers();
          }

          self.markerCluster = L.markerClusterGroup({
            removeOutsideVisibleBounds: true,
            chunkedLoading: true,
          }).addTo(this);

          const fullscreenControl = L.control.fullscreen({
            position: "topright"
          });
          fullscreenControl.addTo(this);

          let markers = [];
          dataMarker.forEach((markerData) => {
            const lat = markerData.lat;
            const lng = markerData.lng;

            const marker = L.marker(L.latLng(lat, lng), {
              markerData: markerData
            });

            marker.on('click', function(event) {
              const id = event.target.options.markerData.id;
              const url = import.meta.env.VITE_API_URL + "/lembaga/" + id;
              
              const token = JSON.parse(localStorage.getItem("token"));
              const config = {
                headers: {
                  Authorization: "Bearer " + token.value,
                },
              };
              
              axios.get(url, config).then((response) => {
                if (response.data && response.data.length > 0) {
                  self.detailLembaga = {};
                  self.showCanvas = true;
                  self.detailLembaga.nama_lembaga = response.data[0].nama_lembaga;
                  self.detailLembaga.no_vin = response.data[0].no_vin;
                  self.detailLembaga.tipe_lembaga = response.data[0].tipe_lembaga;
                  self.detailLembaga.email = response.data[0].email;
                  self.detailLembaga.no_telp = response.data[0].no_telp;
                  self.detailLembaga.provinsi = response.data[0].provinsi;
                  self.detailLembaga.kabupaten_kota = response.data[0].kabupaten_kota;
                  self.detailLembaga.alamat = response.data[0].alamat;
                  self.detailLembaga.status_akreditasi = response.data[0].status_akreditasi;
                  self.detailLembaga.kapasitas_latih = response.data[0].kapasitas_latih;
                } else {
                  marker.bindPopup("Tidak ada data Lembaga Pelatihan!");
                }
              });
            })
            markers.push(marker);
          });

          self.markerCluster.addLayers(markers);  
        });
      }
    },
  },
  mounted() {
    this.initMap();
  },
  computed: {
    formattedDataMarker() {
      return this.dataMarker.map((marker) => {
        if (typeof marker.value === "number") {
          return {
            marker,
            value: marker.value.toLocaleString(),
          };
        }
        return marker;
      });
    },
  },
};
</script>

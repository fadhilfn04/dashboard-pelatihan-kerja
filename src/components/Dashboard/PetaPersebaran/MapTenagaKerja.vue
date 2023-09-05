<template>
  <div class="h-[32rem] w-full" id="container">
    <LMap
      ref="map"
      style="z-index: 0"
      :use-global-leaflet="true"
      :center="center"
      :zoom="zoomMap"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      :zoomAnimation="true"
      :markerZoomAnimation="true"
      :options="{ zoomControl: false }"
      @ready="onLeafletReady"
    >
    <template v-if="leafletReady">
      <l-control-zoom position="topright" />
      <LTileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      >
      </LTileLayer>
    </template>
    </LMap>
  </div>

  <Modal size="2xl" v-if="isShowModal" @close="closeModal" class="z-1000">
    <template #header>
      <div class="flex items-center text-lg">
        Detail Lembaga Pelatihan
      </div>
    </template>
    <template #body>
      <div class="h-80 overflow-y-auto">
        <div id="detail-container-name" class="display: none">
          <div class="title">Nama Lembaga</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-id">
          <div class="title">No. VIN</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-tipe">
          <div class="title">Tipe Lembaga</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-email">
          <div class="title">Email</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-telp">
          <div class="title">Nomor Telepon</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-province">
          <div class="title">Provinsi</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-city">
          <div class="title">Kota/Kabupaten</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-address">
          <div class="title">Alamat</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-time">
          <div class="title">Status Akreditasi</div>
          <div class="info">test</div>
        </div>
        <div id="detail-container-amount">
          <div class="title">Kapasitas Latih</div>
          <div class="info">test</div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModal"
          type="button"
          class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Kembali
        </button>
      </div>
    </template>
  </Modal>

  <!-- <div v-if="isShowModal" class="detail-container" style="">
    <div id="detail-container-name" class="display: none">
      <div class="title">Nama Lembaga</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-id">
      <div class="title">No. VIN</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-tipe">
      <div class="title">Tipe Lembaga</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-email">
      <div class="title">Email</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-telp">
      <div class="title">Nomor Telepon</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-province">
      <div class="title">Provinsi</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-city">
      <div class="title">Kota/Kabupaten</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-address">
      <div class="title">Alamat</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-time">
      <div class="title">Status Akreditasi</div>
      <div class="info">test</div>
    </div>
    <div id="detail-container-amount">
      <div class="title">Kapasitas Latih</div>
      <div class="info">test</div>
    </div>
    <button
      @click="closeModal"
      type="button"
      class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300">
      Kembali
    </button>
  </div> -->
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
  .close-container {
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
  .title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .info {
    margin-bottom: 15px;
  }
</style>

<script>
import * as L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { Modal } from "flowbite-vue";
import {
  LMap,
  LTileLayer,
  LControlZoom,
  LMarker,
  LTooltip,
  LControl
} from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapTenagaKerja",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LControl,
    LControlZoom,
    Modal
  },
  emits: ["update-data"],
  data() {
    return {
      minZoom: 5,
      maxZoom: 12,
      zoomMap: 5,
      dataMap: undefined,
      leafletReady: false,
      leafletObject: null,
      visible: false,
      isOpenDetail: false,
      selectedMarker: null,
      isShowModal: false,
    };
  },
  props: ["zoom", "level", "center", "dataMarker", "legends"],
  methods: {
    async onLeafletReady() {
      await this.$nextTick();
      this.leafletReady = true;
    },
    markerLatLng(marker) {
      return [marker.lat, marker.lng];
    },
    openMarkerModal(markerData) {
      this.selectedMarker = markerData;
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
  mounted() {
    if (this.formattedDataMarker && this.formattedDataMarker.length > 0) {
      const self = this;
      const dataMarker = this.formattedDataMarker;
      
      L.Map.addInitHook(function () {
        const markerCluster = L.markerClusterGroup({
          removeOutsideVisibleBounds: true,
          chunkedLoading: true,
        }).addTo(this);

        let markers = [];
        dataMarker.forEach((markerData) => {
          const lat = markerData.lat;
          const lng = markerData.lng;
          const marker = L.marker(L.latLng(lat, lng));

          marker.on('click', function(e) {
            self.isShowModal = true;
          })
          markers.push(marker);
        });

        markerCluster.addLayers(markers);
      });
    }
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
  watch: {
    zoom: function (val) {
      setTimeout(() => {
        this.zoomMap = val;
      }, 250);
    },
    dataMarker(newData) {
      this.dataMap = newData;
    },
  },
};
</script>

<template>
  <div class="h-[32rem] w-full" id="container">
    <LMap
      ref="map"
      :use-global-leaflet="false"
      :center="center"
      :zoom="zoomMap"
      :min-zoom="minZoom"
      :fullscreen="fullscreenControl"
      :fullscreen-options="fullscreenControlOptions"
      style="z-index: 0"
    >
      <LTileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      >
      </LTileLayer>
      <LMarker
        v-for="(marker) in formattedDataMarker"
        :key="marker.id"
        :lat-lng="markerLatLng(marker)"
        @click="detailProvinsi(marker, marker.id)"
      >
        <LTooltip>
          <span class="text-md font-bold">{{ marker.name }}</span>
        </LTooltip>
      </LMarker>
    </LMap>
  </div>
</template>
<script>
import { LMarker, LMap, LTileLayer, LTooltip, LControl } from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapTenagaKerja",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LControl,
  },
  emits: ["update-data"],
  data() {
    return {
      minZoom: 5,
      zoomMap: 5,
      dataMap: undefined,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topLeft',
      }
    };
  },
  props: ["zoom", "level", "center", "dataMarker", "legends"],
  methods: {
    detailProvinsi(marker, id) {
      if (this.level == 2) {
        const isKecamatan = true;
        const level = 3;
        const newData = {
          api: "/provinsi/lembaga/" + id,
          level: level,
          isKecamatan: isKecamatan,
        };
        this.$emit("update-data", newData);
      } else if (this.level == 1) {
        const center = [marker.lat, marker.lng];
        const level = 2;
        const newData = {
          api: "/provinsiFilterKota/" + id,
          level: level,
          center: center,
        };
        this.$emit("update-data", newData);
      }
    },
    markerLatLng(marker) {
      return [marker.lat, marker.lng];
    },
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

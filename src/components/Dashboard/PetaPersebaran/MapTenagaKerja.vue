<template>
  <div class="h-[32rem] w-full" id="container">
    <LMap
      ref="map"
      :use-global-leaflet="false"
      :center="center"
      :zoom="zoomMap"
      style="z-index: 0"
    >
      <LTileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      >
      </LTileLayer>
      <LMarker
        v-for="(marker, index) in formattedDataMarker"
        :key="marker.uuid"
        :lat-lng="markerLatLng(marker)"
        @click="detailProvinsi(marker, marker.uuid)"
      >
        <LTooltip>
          <span class="text-md font-bold">{{ marker.name }}</span>
        </LTooltip>
      </LMarker>
    </LMap>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import { LMarker, LMap, LTileLayer, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapTenagaKerja",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  emits: ["update-data"],
  data() {
    return {
      zoomMap: 5,
      dataMap: undefined,
    };
  },
  props: ["zoom", "level", "center", "dataMarker", "legends"],
  methods: {
    detailProvinsi(marker, uuid) {
      if (this.level == 2) {
        const isKecamatan = true;
        const level = 3;
        const newData = {
          api: "/provinsi/lembaga/" + uuid,
          level: level,
          isKecamatan: isKecamatan,
        };
        this.$emit("update-data", newData);
      } else if (this.level == 1) {
        const center = [marker.lat, marker.lng];
        const level = 2;
        const newData = {
          api: "/provinsiFilterKota/" + uuid,
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
            ...marker,
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

<template>
  <div class="h-[32rem] w-full" id="container">
    <LMap
      ref="map"
      :use-global-leaflet="false"
      :center="center"
      :zoom="zoomMap"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      style="z-index: 0"
    >
      <LTileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      >
      </LTileLayer>
      <l-polygon
        v-for="(polygon, index) in formattedDataPolygon"
        :key="polygon.uuid"
        :lat-lngs="polygon.polygon"
        color="#FFFFFF"
        :weight="1"
        :fill="true"
        :fillOpacity="1"
        :fillColor="polygon.color"
      >
        <l-tooltip>
          <span class="text-md font-bold">{{ polygon.name }}</span
          ><br />
          <span class="text-xs font-normal">Jumlah LPK Terakreditasi : {{ polygon.accredited }}</span>
          <br />
          <span class="text-xs font-normal">Jumlah LPK Tidak Terakreditasi : {{ polygon.not_accredited }}</span>
        </l-tooltip>
      </l-polygon>
    </LMap>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import { LPolygon, LMap, LTileLayer, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapLPKTerakreditasi",
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    LTooltip,
  },
  emits: ["update-data"],
  data() {
    return {
      zoomMap: 5,
      dataMap: undefined,
      minZoom: 5,
      maxZoom: 12,
    };
  },
  props: ["zoom", "level", "center", "dataPolygon", "legends"],
  computed: {
    formattedDataPolygon() {
      return this.dataPolygon.map((polygon) => {
        if (typeof polygon.value === "number") {
          return {
            ...polygon,
            value: polygon.value.toLocaleString(),
          };
        }
        return polygon;
      });
    },
  },
  watch: {
    zoom: function (val) {
      setTimeout(() => {
        this.zoomMap = val;
      }, 250);
    },
    dataPolygon(newData) {
      this.dataMap = newData;
    },
  },
};
</script>

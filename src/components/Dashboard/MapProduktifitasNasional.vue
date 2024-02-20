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
          <span class="text-xs font-normal">Jumlah : {{ polygon.value }} Juta</span>
        </l-tooltip>
      </l-polygon>
    </LMap>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import { LPolygon, LMap, LTileLayer, LTooltip } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";

export default {
  name: "MapTenagaPelatihan",
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
  methods: {
    detailProvinsi(polygon, uuid) {
      if (this.level == 2) {
        const isKecamatan = true;
        const level = 3;
        const newData = {
          api: "/provinsi/kab_kota/" + uuid,
          level: level,
          isKecamatan: isKecamatan,
        };
        this.$emit("update-data", newData);
      } else if (this.level == 1) {
        const center = L.polygon(polygon.polygon).getBounds().getCenter();
        const level = 2;
        const newData = {
          api: "/provinsigis/" + uuid,
          level: level,
          center: center,
        };
        this.$emit("update-data", newData);
      }
    },
  },
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

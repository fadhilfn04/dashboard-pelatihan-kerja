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
      <l-polygon
        v-for="(polygon, index) in formattedDataPolygon"
        :key="polygon.uuid"
        :lat-lngs="polygon.polygon"
        color="#FFFFFF"
        :weight="1"
        :fill="true"
        :fillOpacity="1"
        :fillColor="polygon.color"
        @click="detailProvinsi(polygon, polygon.uuid)"
      >
        <l-tooltip>
          <span class="text-md font-bold">{{ polygon.name }}</span
          ><br />
          <span class="text-xs font-normal">Jumlah : {{ polygon.value }}</span>
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
  name: "MapTenagaKerja",
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
    };
  },
  props: ["zoom", "level", "center", "dataPolygon", "legends"],
  methods: {
    reverseCoordinates(coordinates) {
      if (Array.isArray(coordinates[0][0][0])) {
        return coordinates.map(polygon => 
          polygon.map(ring => 
            ring.map(([lat, lng]) => [lng, lat])
          )
        );
      }
      if (Array.isArray(coordinates[0][0])) {
        return coordinates;
      }
      return coordinates.map(ring => 
        ring.map(([lat, lng]) => [lng, lat])
      );
    },
    detailProvinsi(polygon, uuid) {
      if (this.level == 2) {
        const isLembagaPelatihan = true;
        const level = 3;
        const newData = {
          api: "/province-training-institutions/" + uuid,
          level: level,
          isLembagaPelatihan: isLembagaPelatihan,
        };
        this.$emit("update-data", newData);
      } else if (this.level == 1) {
        const center = L.polygon(polygon.polygon).getBounds().getCenter();
        const level = 2;
        const newData = {
          api: "/province-city/" + uuid,
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
        const reversedCoordinates = this.reverseCoordinates(polygon.polygon);

        if (typeof polygon.value === "number") {
          return {
            ...polygon,
            polygon: reversedCoordinates,
            value: polygon.value.toLocaleString(),
          };
        }
        return {
          ...polygon,
          polygon: reversedCoordinates,
        };
      });
    }
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

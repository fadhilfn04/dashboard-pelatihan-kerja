<template>
    <div class="w-screen h-screen bg-brand-background">
      <div class="relative w-full h-full overflow-x-hidden">
       
        <div class="absolute top-0 left-0 right-0 h-96 bg-brand-blue-1"></div>
        <div
          class="absolute -top-20 -right-8 w-72 h-72 z-10 bg-contain bg-no-repeat bg-center"
          :style="{ 'background-image': 'url(' + imageUrl + ')' }"
        ></div>
        <div
          class="absolute top-44 right-52 w-40 h-40 z-10 bg-contain bg-no-repeat bg-center"
          :style="{ 'background-image': 'url(' + imageUrl + ')' }"
        ></div>
        <div
          class="absolute top-80 -left-8 w-24 h-24 z-10 bg-contain bg-no-repeat bg-center"
          :style="{ 'background-image': 'url(' + imageUrl + ')' }"
        ></div>
        <div class="absolute px-16 z-20 w-full h-80 top-64">
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
                <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                    Peta Persebaran Tenaga Kerja Indonesia
                    </h5>
                </a>
                <LeafletMap v-if="legends" :level="level" :center="center" :geojson="geojson" :zoom="zoom" @update-data="updateData" :legends="legends"/>
                <TheLegendMap v-if="legends" :level="level" :geojson="geojson" :legends="legends" @update-data="updateData"/>
                </div>
            </div>
        </div>
      </div>
      <!-- <footer class="bg-brand-blue-1 py-3">
        <p class="text-sm text-white text-center">
          © 2023 | Pusat Data dan Teknologi Informasi Ketenagakerjaan, Kementrian
          Ketenagakerjaan Republik Indonesia
        </p>
      </footer> -->
    </div>
    <Modal size="2xl" v-if="isShowModal" @close="closeModal" class="z-20">
    <template #header>
      <div class="flex items-center text-lg">
        Detail Persebaran Tenaga Kerja Kabupaten/Kota Bandung Barat
      </div>
    </template>
    <template #body>
      <div class="h-80 overflow-y-auto">
        <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-2 py-3">Wilayah Kabupaten/Kota</th>
            <th scope="col" class="px-2 py-3">Jumlah Tenaga Kerja</th>
            <th scope="col" class="px-2 py-3">Persentase</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b"
          >
            <td class="px-2 py-4"><a href="#" class="text-brand-blue-1 font-semibold">Kec. A</a></td>
            <td class="px-2 py-4">1,000</td>
            <td class="px-2 py-4">20%</td>
          </tr>
        </tbody>
      </table>
      </div> 
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModal"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Kembali
        </button>
      </div>
    </template>
  </Modal>
  </template>
  
  <script>
//   import MainNav from "@/components/Navigation/MainNav.vue";

  import PetaTenagaKerja from "@/components/Portal/PetaTenagaKerja.vue";
  import TheLegendMap from "@/components/Portal/TheLegendMap.vue";
  import LeafletMap from "@/components/Portal/LeafletMap.vue";
  import { Modal } from "flowbite-vue";
  import { ref } from "vue";
  import axios from "axios";

  export default {
    name: "PetaIndonesiaView",
    components: {
      TheLegendMap,
      LeafletMap,
      Modal,
    },
    data() {
      return {
        level: 1,
        center: [-0.884123, 116.038462],
        api: "https://raw.githubusercontent.com/TheMaggieSimpson/IndonesiaGeoJSON/main/provinsi.json",
        imageUrl: window.BASE_URL + "assets/images/bg-item.png",
        geojson: undefined,
        legends: [],
        zoom: 5,
        isKecamatan: false,
      };
    },
    watch: {
      api(newApi) {
        this.fetchData();
      },
      geojson(newGeojson) {
        this.processingData();
      },
      center(newCenter) {
        if(this.level == 1 ){
          this.zoom = 5;
        }else if(this.level == 2){
          this.zoom = 8;
        }
      },
    },
    created() {
      this.fetchData();
    },
    methods:{
      fetchData(){
        if(this.level == 1){
          axios
              .get(this.api)
              .then((response) => {
                  if (response.data) {
                      this.geojson = response.data;
                  }
              });
        }else if(this.level == 2){
          fetch(this.api)
            .then(response => response.json())
            .then(data => {
              this.geojson = data;
            })
            .catch(error => {
              console.error(error);
            });
        }
      },
      updateData(newData){
        this.api = newData.api;
        this.level = newData.level;
        this.center = newData.center;
        this.isKecamatan = newData.isKecamatan;
        if(this.isKecamatan == true){
          this.showModal();
        }
      },
      generateGradientColors(max, interval) {
        
        this.legends = [];
        const startColor = '#06337A';
        const endColor = '#cdd6e4';
        
        const startR = parseInt(startColor.substring(1, 3), 16);
        const startG = parseInt(startColor.substring(3, 5), 16);
        const startB = parseInt(startColor.substring(5, 7), 16);
        
        const endR = parseInt(endColor.substring(1, 3), 16);
        const endG = parseInt(endColor.substring(3, 5), 16);
        const endB = parseInt(endColor.substring(5, 7), 16);

        let batasAtas = max;
        for (let i = 1; i <= 10; i++) {
          const factor = i / 9;
          const newR = Math.floor(startR + (endR - startR) * factor);
          const newG = Math.floor(startG + (endG - startG) * factor);
          const newB = Math.floor(startB + (endB - startB) * factor);

          const newColor = `#${this.componentToHex(newR)}${this.componentToHex(newG)}${this.componentToHex(newB)}`;
          if(i != 1){
            batasAtas = batasAtas - interval;
          }
          const dataLegend = {
            legend : batasAtas,
            color: newColor,
          };

          this.legends.push(dataLegend);
        }
        this.legends.reverse();
      },
      componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      },
      processingData() {
        const data = this.geojson.features.map((feature) => {
          return {
            id: feature.properties.KODE,
          };
        });

        const max = Math.max(...data.map((item) => item.id));
        const min = 0;
        const interval = Math.floor((max - min) / 10);
        this.generateGradientColors(max, interval);
      },
    },
    setup() {
        const isShowModal = ref(false);

        function closeModal() {
            isShowModal.value = false;
        }

        function showModal() {
            isShowModal.value = true;
        }

        return {
            isShowModal,
            closeModal,
            showModal
        };
    }, 
  };
  </script>
  
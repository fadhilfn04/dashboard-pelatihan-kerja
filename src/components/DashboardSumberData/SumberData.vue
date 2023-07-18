<template>
  <div class="flex gap-8">
    <SummarySumber
      v-for="(item, index) in detail_sumber"
      :key="item.category"
      :summary="item"
      :order="index + 1"
    />
  </div>
  <div class="mt-8 flex gap-8">
    <DetailSumber
      v-for="(item, index) in detail_sumber"
      :key="item.category"
      :detail="item"
      :order="index + 1"
    />
  </div>
  <div class="mt-8 grid grid-cols-2 gap-8">
    <StatistikData
      v-for="(item, index) in statistik_data"
      :key="item.category"
      :statistik="item"
      :order="index + 1"
      :color="color_statistik[index]"
    />
  </div>
</template>

<script>
import DetailSumber from "./DetailSumber.vue";
import StatistikData from "./StatistikData.vue";
import SummarySumber from "./SummarySumber.vue";

export default {
  name: "SumberData",
  data() {
    return {
      statistik_data: [
        {
          category: "NIK",
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
        {
          category: "Jenis Kelamin",
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
        {
          category: "Alamat Domisili",
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
        {
          category: "Alamat Asli",
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
        {
          category: "Pendidikan",
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
        {
          category: "Daerah Domisili",
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
      ],
      detail_sumber: [
        {
          category: "Data Awal",
          total: 360247423,
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
        {
          category: "Data Berhasil Diproses",
          total: 246213780,
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
        {
          category: "Data Tereliminasi",
          total: 113333257,
          data: [
            {
              id: "SK",
              source: "SiapKerja",
              total: 105984904,
            },
            {
              id: "P3KE",
              source: "P3KE",
              total: 83684400,
            },
            {
              id: "PK",
              source: "PraKerja",
              total: 90490667,
            },
            {
              id: "BPUM",
              source: "BPUM",
              total: 63748849,
            },
            {
              id: "PKH",
              source: "PKH",
              total: 67152440,
            },
            {
              id: "DJ",
              source: "Daerah Jateng",
              total: 67152440,
            },
            {
              id: "WLKP",
              source: "WLKP",
              total: 67152440,
            },
          ],
        },
      ],
      color_statistik: [
        "#2C9AFF",
        "#FF8181",
        "#FF9559",
        "#49D3CC",
        "#3CC59C",
        "#945FFB",
      ],
    };
  },
  components: {
    DetailSumber,
    StatistikData,
    SummarySumber,
  },
};
</script>

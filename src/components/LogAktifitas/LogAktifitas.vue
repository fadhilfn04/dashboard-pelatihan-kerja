<script setup>
  import axios from 'axios';
  import { onMounted } from "vue";
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net';
  import Particles from '../Shared/Particles.vue';

  DataTable.use(DataTablesCore);

  let logData = [
    [1, 'http://localhost:5173/log-aktifitas', 'Upload Source Master Data Pelatihan', 'Upload', 'Admin', '30 Agustus 2023', '31 Agustus 2023'],
    [2, 'http://localhost:5173/log-aktifitas', 'Upload Pendukung Master Data Pelatihan', 'Upload', 'Admin', '30 Agustus 2023', '31 Agustus 2023'],
  ];

  // let logData = [];

  onMounted(async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(
        import.meta.env.VITE_API_URL + '/activity-log',
        {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        }
      );

      if (response.data.success) {
        logData = response.data.data;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
</script>

<template>
  <particles></particles>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="border-b-2 p-6">
      <h5 class="text-lg font-semibold">Log Aktifitas</h5>
    </div>
    <div class="p-6">
      <div class="relative overflow-x-auto">
        <DataTable :data="logData" class="display">
          <thead class="text-xs uppercase">
              <tr>
                  <th>No</th>
                  <th>URL</th>
                  <th>Desc</th>
                  <th>Aktifitas</th>
                  <th>Aksi Oleh</th>
                  <th>Dibuat Pada</th>
                  <th>Pembaharuan Terakhir</th>
              </tr>
          </thead>
      </DataTable>
      </div>
    </div>
  </div>
</template>

<style>
  @import 'datatables.net-dt';
</style>

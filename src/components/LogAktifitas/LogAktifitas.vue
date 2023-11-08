<script setup>
  import axios from 'axios';
  import { onMounted, ref } from "vue";
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net';  
  import Particles from '../Shared/Particles.vue';

  // DataTable.use(DataTablesCore);

  let logActivityData = ref([]);

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
        logActivityData.value = response.data.data;
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
      <div class="relative overflow-x-auto mt-2">
        <!-- <DataTable :data="logActivityData" class="display">
          <thead class="text-xs uppercase">
              <tr>
                  <th>URL Asal</th>
                  <th>URL Tujuan</th>
                  <th>Aksi Oleh</th>
                  <th>Dibuat Pada</th>
              </tr>
          </thead>
      </DataTable> -->

        <table class="w-full text-left text-sm text-gray-500">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">URL Asal</th>
              <th scope="col" class="px-6 py-3">URL Tujuan</th>
              <th scope="col" class="px-6 py-3">Aksi Oleh</th>
              <th scope="col" class="px-6 py-3">Dibuat Pada</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800" v-for="(logActivity, index) in logActivityData" :key="index">
              <td class="px-6 py-3"> {{ index + 1 }} </td>
              <td class="px-6 py-3"> {{ logActivity.from }} </td>
              <td class="px-6 py-3"> {{ logActivity.to }} </td>
              <td class="px-6 py-3"> {{ logActivity.email }} </td>
              <td class="px-6 py-3"> {{ logActivity.created_at }} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<!-- <style>
  @import 'datatables.net-dt/css/jquery.dataTables.css';
</style> -->


<template>
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
    <div class="p-6 border-b-2">
      <h5 class="font-semibold text-lg">Upload Management</h5>
    </div>
    <div class="p-6">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Nama Sumber Data</th>
              <th scope="col" class="px-6 py-3">Jenis Sumber</th>
              <th scope="col" class="px-6 py-3">Uploader</th>
              <th scope="col" class="px-6 py-3">Pembaharuan Terakhir</th>
              <th scope="col" class="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">Data Pelatihan Kerja 2023</td>
              <td class="px-6 py-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >File Import</span
                >
              </td>
              <td class="px-6 py-4">Kemnaker</td>
              <td class="px-6 py-4">22 Januari 2023</td>
              <td>
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal"
                >
                  Upload
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadManagement",
};
</script>

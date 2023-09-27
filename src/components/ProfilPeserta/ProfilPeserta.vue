<template>
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
    <div class="p-6 border-b-2">
      <h5 class="font-semibold text-lg">Cari Profil Peserta</h5>
    </div>
    <div class="p-6">
      <form @submit.prevent="searchProfile">
        <div class="flex justify-between">
          <input v-model="nik" placeholder="masukkan NIK" type="text" id="nik" name="nik" class="border rounded px-2 py-1 focus:outline-none focus:border-blue-400 w-full" />
          <button type="submit" class="bg-blue-500 text-white rounded px-4 py-1 ml-2 hover:bg-blue-600 transition">Cari</button>
        </div>
      </form>
      <div v-if="searchedProfile" class="mt-4">
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg">Profil Peserta:</h5>
        </div>
        <div class="bg-gray-100 p-4 rounded mt-2">
          <p><span class="font-semibold">NIK:</span> {{ searchedProfile.nik }}</p>
          <p><span class="font-semibold">Nama:</span> {{ searchedProfile.nama }}</p>
        </div>
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg mt-2">Tanggal Lulus Pelatihan Terakhir:</h5>
        </div>
        <div class="bg-gray-100 p-4 rounded mt-2">
          <p><span class="font-semibold">Nama Perusahaan Bekerja Terakhir:</span></p>
          <p><span class="font-semibold">Alamat Perusahaan Bekerja Terakhir:</span></p>
          <p><span class="font-semibold">Tanggal Mulai Bekerja Terakhir:</span></p>
          <p><span class="font-semibold">Masih Bekerja Terakhir:</span></p>
        </div>
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg mt-2">Daftar Program Pelatihan:</h5>
        </div>
        <div class="relative overflow-x-auto mt-2">
          <table class="w-full text-left text-sm text-gray-500">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">Kode Transaksi Pelatihan Peserta</th>
                <th scope="col" class="px-6 py-3">Nama Lembaga Pelatihan</th>
                <th scope="col" class="px-6 py-3">Nama Program Pelatihan</th>
                <th scope="col" class="px-6 py-3">Nama Kejuruan</th>
                <th scope="col" class="px-6 py-3">Nama Sub Kejuruan</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800" v-for="(trainingPrograms, index) in searchedTrainingPrograms" :key="index">
                <td class="px-6 py-3">{{ index + 1 }}</td>
                <td class="px-6 py-3">{{ trainingPrograms.kode_transaksi_pelatihan }}</td>
                <td class="px-6 py-3">{{ trainingPrograms.nama_lembaga }}</td>
                <td class="px-6 py-3">{{ trainingPrograms.judul_program }}</td>
                <td class="px-6 py-3">{{ trainingPrograms.nama_kejuruan }}</td>
                <td class="px-6 py-3">{{ trainingPrograms.nama_sub_kejuruan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg mt-2">Daftar Program Pemagangan:</h5>
        </div>
        <div class="relative overflow-x-auto mt-2">
          <table class="w-full text-left text-sm text-gray-500">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">Kode Transaksi Pelatihan Peserta</th>
                <th scope="col" class="px-6 py-3">Nama Penyelenggara Magang</th>
                <th scope="col" class="px-6 py-3">Nama KBJI Digit 3</th>
                <th scope="col" class="px-6 py-3">Nama Negara Tujuan Pemagangan</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800" v-for="(apprenticePrograms, index) in searchedApprenticePrograms" :key="index">
                <td class="px-6 py-3">{{ index + 1 }}</td>
                <td class="px-6 py-3">{{ apprenticePrograms.kode_transaksi_pelatihan }}</td>
                <td class="px-6 py-3">{{ apprenticePrograms.nama_penyelenggara }}</td>
                <td class="px-6 py-3">{{ apprenticePrograms.nama_kbji }}</td>
                <td class="px-6 py-3">{{ apprenticePrograms.negara_tujuan_pemagangan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.nikAlert {
  width: 300px;
  height: 300px;
  font-size: small;
}
</style>

<script>
import axios from "axios";
import { Modal, Alert } from "flowbite-vue";
import { ref } from "vue";

export default {
  name: "ProfilPeserta",
  data() {
    return {
      nik                         : "",
      nama                        : "",
      searchedProfile             : null,
      searchedTrainingPrograms    : ref([]),
      searchedApprenticePrograms  : ref([]),
    };
  },

  components: {
    Modal,
    Alert,
  },

  methods: {
    emptyNikAlert() {
      this.$swal
      .fire({
        title: "Masukkan NIK terlebih dahulu!",
        icon: "warning",
        customClass: {
          popup: 'nikAlert'
        },
      });
    },
    wrongNikAlert() {
      this.$swal
      .fire({
        title: "NIK yang dimasukkan tidak ada di database!",
        icon: "warning",
        customClass: {
          popup: 'nikAlert'
        },
      });
      // window.location.reload();
    },
    systemErrorAlert() {
      this.$swal
      .fire({
        title: "Terjadi galat pada sistem!",
        icon: "warning",
        customClass: {
          popup: 'nikAlert'
        },
      });
      // window.location.reload();
    },
    loadTrainingPrograms() {
      const url = import.meta.env.VITE_API_URL + "/participant-training-program-list/" + this.nik
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      axios.get(url, config).then((response) => {
        if (response.data.success) {
          this.searchedTrainingPrograms = response.data.data;
        }
      });
    },
    loadApprenticePrograms() {
      const url = import.meta.env.VITE_API_URL + "/participant-apprentice-program-list/" + this.nik
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      axios.get(url, config).then((response) => {
        if (response.data.success) {
          this.searchedApprenticePrograms = response.data.data;
        }
      });
    },
    searchProfile() {
      const url = import.meta.env.VITE_API_URL + "/participant-profile/" + this.nik
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      if(this.nik != ""){
        axios.get(url, config).then((response) => {
          if(response.data.data.length > 0 && this.nik === response.data.data[0].nik){
            if (response.data) {
              this.searchedProfile = {
                nik           : this.nik,
                nama          : response.data.data[0].nama_peserta,
              };

              this.loadTrainingPrograms();
              this.loadApprenticePrograms();
            } else {
              this.systemErrorAlert()
            }
          } else {
            this.wrongNikAlert()
          }
        });
      } else {
        this.emptyNikAlert()
      }
    },
  },
};
</script>

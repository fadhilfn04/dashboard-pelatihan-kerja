<template>
  <particles></particles>
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
    <div class="p-6 border-b-2">
      <h5 class="font-semibold text-lg">Cari Profil Peserta</h5>
    </div>
    <div class="p-6">
      <form @submit.prevent="searchProfile">
        <div class="flex justify-between">
          <input v-model="nik" placeholder="Masukkan NIK" type="text" id="nik" name="nik" class="border rounded px-2 py-1 focus:outline-none focus:border-blue-400 w-full" />
          <button type="submit" class="bg-blue-500 text-white rounded px-4 py-1 ml-2 hover:bg-blue-600 transition">Cari</button>
        </div>
      </form>
      <div v-if="searchedProfile" class="mt-4">
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg">Profil Peserta:</h5>
        </div>
        <div class="bg-gray-100 p-4 rounded mt-2">
          <p><span class="font-semibold">NIK:</span> {{ searchedProfile.nik }} </p>
          <p><span class="font-semibold">Nama:</span> {{ searchedProfile.nama }} </p>
          <p><span class="font-semibold">Tanggal Lulus Pelatihan Terakhir:</span> {{ searchedProfile.lulusTerakhir }} </p>

          <p><span class="font-semibold">Nama Perusahaan Bekerja Terakhir:</span> {{ companyData.namaPerusahaanBekerjaTerakhir }} </p>
          <p><span class="font-semibold">Alamat Perusahaan Bekerja Terakhir:</span> {{ companyData.alamatPerusahaanBekerjaTerakhir }} </p>
          <p><span class="font-semibold">Tanggal Mulai Bekerja Terakhir:</span> {{ companyData.tanggalMulaiBekerjaTerakhir }} </p>
          <p><span class="font-semibold">Masih Bekerja Terakhir:</span> {{ companyData.masihBekerjaTerakhir }} </p>

          <p><span class="font-semibold">Masa Tunggu Lulus Bekerja:</span> {{ searchedProfile.masaTunggu }} </p>
        </div>
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg mt-2">Daftar Program Pelatihan</h5>
        </div>
        <a-table 
          :columns="trainingProgramsColumns" 
          :dataSource="searchedTrainingPrograms" 
          :pagination="pagination"
          :loading="loading"
          bordered>
        </a-table>
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg mt-2">Daftar Program Pemagangan:</h5>
        </div>
        <a-table 
          :columns="apprenticeProgramsColumns" 
          :dataSource="searchedApprenticePrograms" 
          :pagination="pagination"
          :loading="loading"
          bordered>
        </a-table>
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
import Particles from '../Shared/Particles.vue';

export default {
  name: "ProfilPeserta",
  data() {
    return {
      nik                             : "",
      nama                            : "",
      searchedProfile                 : null,
      companyData                     : null,
      searchedTrainingPrograms        : ref([]),
      searchedApprenticePrograms      : ref([]),

      trainingProgramsColumns: [
        { title: 'Kode Transaksi Pelatihan Peserta', dataIndex: 'kode_transaksi_pelatihan', key: 'kode_transaksi_pelatihan' },
        { title: 'Nama Lembaga Pelatihan', dataIndex: 'nama_lembaga', key: 'nama_lembaga' },
        { title: 'Nama Program Pelatihan', dataIndex: 'judul_program', key: 'judul_program' },
        { title: 'Nama Kejuruan', dataIndex: 'nama_kejuruan', key: 'nama_kejuruan' },
        { title: 'Nama Sub Kejuruan', dataIndex: 'nama_sub_kejuruan', key: 'nama_sub_kejuruan' },
      ],

      apprenticeProgramsColumns: [
        { title: 'Kode Transaksi Pelatihan Peserta', dataIndex: 'kode_transaksi_pelatihan', key: 'kode_transaksi_pelatihan' },
        { title: 'Nama Penyelenggara Magang', dataIndex: 'nama_penyelenggara', key: 'nama_penyelenggara' },
        { title: 'Nama KBJI Digit 3', dataIndex: 'nama_kbji', key: 'nama_kbji' },
        { title: 'Nama Negara Tujuan Pemagangan', dataIndex: 'negara_tujuan_pemagangan', key: 'negara_tujuan_pemagangan' },
      ],
    };
  },

  components: {
    Modal,
    Alert,
    Particles,
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
        title: "Terjadi galat pada sistem, mohon dicoba kembali secara berkala!",
        icon: "warning",
        customClass: {
          popup: 'nikAlert'
        },
      });
      // window.location.reload();
    },
    loadCompanyData() {
      const url = import.meta.env.VITE_API_URL + "/participant-company-data/" + this.nik
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      axios.get(url, config).then((response) => {
        if (response.data.success) {
          this.companyData = response.data.data;
        }
      });
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
                masaTunggu    : response.data.data[0].masa_tunggu,
                lulusTerakhir : response.data.data[0].lulus_terakhir,
              };

              this.loadTrainingPrograms();
              this.loadApprenticePrograms();
              // this.loadCompanyData();
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
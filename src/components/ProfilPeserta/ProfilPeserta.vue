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
      <div v-if="searchedProfile && companyData" class="mt-4">
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg">Profil Peserta:</h5>
        </div>
        <div class="bg-gray-100 p-4 rounded mt-2">
          <p><span class="font-semibold">NIK:</span> {{ searchedProfile.nik ? searchedProfile.nik : '-' }} </p>
          <p><span class="font-semibold">Nama:</span> {{ searchedProfile.nama ? searchedProfile.nama : '-' }} </p>
          <p><span class="font-semibold">Tanggal Lulus Pelatihan Terakhir:</span> {{ searchedProfile.lulusTerakhir ? searchedProfile.lulusTerakhir : '-' }} </p>

          <p><span class="font-semibold">Nama Perusahaan Bekerja Terakhir:</span> {{ companyData.namaPerusahaan ? companyData.namaPerusahaan : '-' }} </p>
          <p><span class="font-semibold">Alamat Perusahaan Bekerja Terakhir:</span> {{ companyData.alamatPerusahaan ? companyData.alamatPerusahaan : '-' }} </p>
          <p><span class="font-semibold">Tanggal Mulai Bekerja Terakhir:</span> {{ companyData.tanggalMulaiBekerja ? companyData.tanggalMulaiBekerja : '-' }} </p>
          <p><span class="font-semibold">Masih Bekerja Terakhir:</span> {{ companyData.masihBekerja ? companyData.masihBekerja : '-' }} </p>

          <p><span class="font-semibold">Masa Tunggu Lulus ke Bekerja:</span> {{ searchedProfile.masaTunggu ? searchedProfile.masaTunggu : '-' }} </p>
        </div>
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg mt-2">Daftar Program Pelatihan</h5>
        </div>
        <a-table 
          :columns="trainingProgramsColumns" 
          :dataSource="searchedTrainingPrograms" 
          :pagination="pagination"
          bordered>
        </a-table>
        <div class="p-6 border-b-2">
          <h5 class="font-semibold text-lg mt-2">Daftar Program Pemagangan:</h5>
        </div>
        <a-table 
          :columns="apprenticeProgramsColumns" 
          :dataSource="searchedApprenticePrograms" 
          :pagination="pagination"
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
      this.searchedProfile = null;
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
    },
    async loadCompanyData() {
      const url = import.meta.env.VITE_API_URL + "/participant-company-data/" + this.nik
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };
      axios.get(url, config).then((response) => {
        if(response.data.data.length > 0){
          this.companyData = {
            namaPerusahaan      : response.data.data[0].nama_perusahaan,
            alamatPerusahaan    : response.data.data[0].alamat_perusahaan,
            tanggalMulaiBekerja : response.data.data[0].tgl_update_terakhir,
            masihBekerja        : response.data.data[0].status_bekerja ? 'Ya' : 'Tidak',
          };
        } else {
          this.companyData = {};
        }
      });
    },
    async loadTrainingPrograms() {
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
    async loadApprenticePrograms() {
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
    async searchProfile() {
      const url = import.meta.env.VITE_API_URL + "/participant-profile/" + this.nik;
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      if (this.nik !== "") {
        try {
          const response = await axios.get(url, config);

          if (response.data.data.length > 0 && this.nik === response.data.data[0].nik) {
            if (response.data) {
              this.searchedProfile = {
                nik: this.nik,
                nama: response.data.data[0].nama_peserta,
                masaTunggu: response.data.data[0].masa_tunggu === '00:00:00' ? '-' : response.data.data[0].masa_tunggu,
                lulusTerakhir: response.data.data[0].lulus_terakhir,
              };

              await this.loadTrainingPrograms();
              await this.loadApprenticePrograms();
              await this.loadCompanyData();
            } else {
              this.systemErrorAlert();
            }
          } else {
            this.wrongNikAlert();
          }
        } catch (error) {
          this.systemErrorAlert();
        }
      } else {
        this.emptyNikAlert();
      }
    },
  },
};
</script>
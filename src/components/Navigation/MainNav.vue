<template>
  <header class="absolute top-0 left-0 right-0 z-20 h-48 w-full text-sm">
    <div class="bg-transparancy top-0 left-0 h-full w-full py-12 px-16">
      <div class="mx-auto flex h-full flex-nowrap px-8">
        <a :href="url" class="mr-auto h-full basis-1/3 items-start text-xl">
          <img class="h-12 hover:scale-105 transition-transform duration-300" src="/assets/images/logo-kemnaker.png" alt="" />
        </a>
        <div
          class="flex h-full basis-1/3 items-center px-4 text-center text-2xl font-bold text-white drop-shadow-lg"
        >
          DASHBOARD PELATIHAN KERJA INDONESIA
        </div>

        <div class="h-full basis-1/3 items-start space-x-4 text-right">
          <button
            @click="showAlert"
            class="rounded-lg border-0 bg-white p-3 font-medium text-brand-blue-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
          <a-dropdown :arrow="{ pointAtCenter: true }">
            <template #overlay>
              <a-menu class="rounded-lg shadow-xl border-0">
                <a-menu-item>
                  <router-link to="/" class="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                    </svg>
                    <span>Dashboard</span>
                  </router-link>
                </a-menu-item>
                <a-sub-menu key="dashboardAktifitasETL" title="Dashboard Aktifitas ETL" class="rounded-lg">
                  <a-menu-item v-for="route in dashboardETLRoutes" :key="route.name">
                    <router-link :to="route.to" class="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <span>{{ route.title }}</span>
                    </router-link>
                  </a-menu-item>
                </a-sub-menu>
                <a-menu-item>
                  <router-link to="/cari-profil-peserta" class="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span>Cari Profil Peserta</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item v-if="email !== 'user@gmail.com'">
                  <router-link to="/api-generator" class="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <span>API Generator</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item v-if="email !== 'user@gmail.com'">
                  <router-link to="/upload-management" class="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <span>Upload Management</span>
                  </router-link>
                </a-menu-item>
                <a-menu-item v-if="email !== 'user@gmail.com'">
                  <router-link to="/log-aktifitas" class="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span>Log Aktifitas</span>
                  </router-link>
                </a-menu-item>
              </a-menu>
            </template>
            <button 
              class="rounded-lg border-0 bg-white p-3 font-medium text-brand-blue-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0021C8"
                viewBox="0 0 50 50"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
                />
              </svg>
            </button>
          </a-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.ant-dropdown-menu {
  border-radius: 12px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
  border: none !important;
}

.ant-dropdown-menu-item:hover {
  background-color: #eff6ff !important;
}

.logoutAlert {
  width: 300px;
  height: 300px;
  font-size: small;
}
</style>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      url: "/",
      isDropdownOpen: false,
      email: localStorage.getItem('email') || '',
    };
  },
  computed: {
    dashboardETLRoutes() {
      return [
        { name: 'Dashboard ETL Lembaga Pelatihan', title: 'Profil Lembaga Pelatihan', to: '/dashboard-etl/lembaga-pelatihan' },
        { name: 'Dashboard ETL Program Pelatihan', title: 'Profil Program Pelatihan', to: '/dashboard-etl/program-pelatihan' },
        { name: 'Dashboard ETL Tenaga Pelatihan', title: 'Profil Tenaga Pelatihan', to: '/dashboard-etl/tenaga-pelatihan' },
        { name: 'Dashboard ETL Peserta Pelatihan', title: 'Profil Peserta Pelatihan', to: '/dashboard-etl/peserta-pelatihan' },
        { name: 'Dashboard ETL Penyelenggara Magang', title: 'Profil Penyelenggara Magang', to: '/dashboard-etl/penyelenggara-magang' },
        { name: 'Dashboard ETL Peserta Pemagangan', title: 'Profil Peserta Pemagangan', to: '/dashboard-etl/peserta-pemagangan' },
        // { name: 'Dashboard ETL Program Pemagangan', title: 'Profil Program Pemagangan', to: '/dashboard-etl/program-pemagangan' },
        { name: 'Dashboard ETL Instruktur', title: 'Instruktur', to: '/dashboard-etl/instruktur' },
      ];
    },
  },
  methods: {
    showAlert() {
      this.$swal
      .fire({
        title: "Apakah anda yakin ingin logout?",
        icon: "warning",
        customClass: {
          popup: 'logoutAlert'
        },
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Logout!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          this.$router.push("/sign-in");
        }
      });
    },

  },
};
</script>

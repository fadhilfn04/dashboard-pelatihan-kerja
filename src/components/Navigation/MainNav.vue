<template>
  <header class="absolute top-0 left-0 right-0 z-20 h-48 w-full text-sm">
    <div class="bg-transparancy top-0 left-0 h-full w-full py-12 px-16">
      <div class="mx-auto flex h-full flex-nowrap px-8">
        <a :href="url" class="mr-auto h-full basis-1/3 items-start text-xl">
          <img class="h-12" src="/assets/images/logo-kemnaker.png" alt="" />
        </a>
        <div
          class="flex h-full basis-1/3 items-center px-4 text-center text-2xl font-semibold text-white"
        >
          DASHBOARD PELATIHAN KERJA INDONESIA
        </div>

        <div class="h-full basis-1/3 items-start space-x-4 text-right">
          <button
            @click="showAlert"
            class="rounded-lg border-0 bg-white p-3 font-medium text-brand-blue-1 shadow-lg"
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
              <a-menu>
                <a-menu-item>
                  <router-link to="/dashboard">Dashboard</router-link>
                </a-menu-item>
                <a-sub-menu key="dashboardAktifitasETL" title="Dashboard Aktifitas ETL">
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Lembaga Pelatihan</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Program Pelatihan</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Tenaga Pelatihan</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Peserta Pelatihan</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Penyelenggara Magang</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Peserta Pemagangan</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Program Pemagangan</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/dashboard-etl">Profil Instruktur</router-link>
                  </a-menu-item>
                </a-sub-menu>
                <a-menu-item>
                  <router-link to="/cari-profil-peserta">Cari Profil Peserta</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/api-generator">API Generator</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/upload-management">Upload Management</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/log-aktifitas">Log Aktifitas</router-link>
                </a-menu-item>
              </a-menu>
            </template>
            <button 
              class="rounded-lg border-0 bg-white p-3 font-medium text-brand-blue-1 shadow-lg"
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
    };
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

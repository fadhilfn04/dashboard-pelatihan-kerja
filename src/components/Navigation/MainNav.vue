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
            @click="$router.push('/sumber-data')"
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
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
          </button>
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
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      url: "/",
    };
  },
  methods: {
    showAlert() {
      console.log("Hello");
      this.$swal
        .fire({
          title: "Apakah anda yakin ingin logout?",
          icon: "warning",
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

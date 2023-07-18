<template>
  <header class="absolute top-0 left-0 right-0 z-20 h-48 w-full text-sm">
    <div class="bg-transparancy top-0 left-0 h-full w-full py-12 px-16">
      <div class="mx-auto flex h-full flex-nowrap px-8">
        <a :href="url" class="mr-auto h-full basis-1/3 items-start text-xl">
          <div class="flex items-center">
            <img
              class="h-14"
              src="/assets/images/kemnaker-icon-white.png"
              alt=""
            />
            <div class="ml-4 flex flex-col">
              <h5 class="text-2xl font-semibold tracking-wide text-white">
                Dashboard
              </h5>
              <p class="text-sm font-light text-gray-300">
                Diperbaharui 05 Juli 2023 14:00 WIB
              </p>
            </div>
          </div>
        </a>

        <div class="h-full basis-1/3 items-start space-x-4 text-right">
          <button
            class="rounded-lg border-0 bg-white p-3 font-medium text-brand-blue-1 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            class="rounded-lg border-0 bg-white p-3 font-medium text-brand-blue-1 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
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
  name: "SumberDataNav",
  data() {
    return {
      url: "/",
    };
  },
  methods: {
    showAlert() {
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

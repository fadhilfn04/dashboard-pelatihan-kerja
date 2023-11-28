<template>
  <div class="w-screen h-screen bg-brand-blue-1">
    <div class="relative w-full h-full overflow-hidden">
      <div
        class="absolute -top-20 -right-8 w-72 h-72 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute -top-56 left-40 w-80 h-80 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-48 right-40 w-56 h-56 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-72 -left-16 w-32 h-32 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute -bottom-72 left-12 w-80 h-80 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="relative grid grid-cols-2 w-full h-full gap-4 content-center place-items-center z-20"
      >
        <img
          class="justify-center"
          src="/assets/images/logo-kemnaker.png"
          alt=""
        />
        <div class="w-7/12 h-fit bg-white rounded-[40px] p-16 mr-24">
          <h5 class="text-2xl font-semibold mb-8">
            Halo, Selamat Datang Kembali !
          </h5>
          <Alert v-if="loginError" type="danger" closable class="mb-2">{{ alertMsg }}</Alert>
          <form @submit.prevent="login">
            <div class="mb-6">
              <input
                type="text"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                v-model="username"
                required
              />
            </div>
            <div class="mb-8">
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="********"
                v-model="password"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Alert } from 'flowbite-vue'

export default {
  name: "SignIn",
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
      username: "",
      password: "",
      alertMsg : "Email atau Password tidak sesuai",
      loginError: false,
    };
  },
  components: {
    Alert
  },
  methods: {
    async login() {
      axios.post(import.meta.env.VITE_API_URL + '/login', {
        email: this.username,
        password: this.password
      })
      .then(response => {
        if (response.data.metadata.code == 200) {
          const token = response.data.response.token;
          localStorage.setItem("token", JSON.stringify({
            value: token,
            expiredAt: Date.now()+(60*60*1000)
          }));
          localStorage.setItem("email", this.username);
          const redirect = this.$route.query.redirect;
          const redirectPath = redirect ? decodeURIComponent(redirect) : "/dashboard";
          this.$router.push(redirectPath);
          return true;
        }else {
          this.loginError = true;
          return true;
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          this.loginError = true;
          return true;
        } else if (error.request) {
          this.loginError = true;
          return true;
        } else {
          this.loginError = true;
          return true;
        }
      }); 
    },
  },
};
</script>

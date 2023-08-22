<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <RouterLink :to="link.url">
      <img
        class="w-full px-16 py-8"
        src="/assets/images/kemnaker-icon.png"
        alt=""
      />
    </RouterLink>
    <div>
      <RouterLink :to="link.url">
        <h5
          class="mb-8 text-xl font-semibold tracking-tight text-gray-900 text-center"
        >
          {{ link.title }}
        </h5>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "PortalItem",
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  components: { RouterLink },
};
</script>

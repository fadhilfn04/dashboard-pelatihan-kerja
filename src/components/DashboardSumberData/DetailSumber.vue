<template>
  <div class="flex-1 rounded-xl bg-white p-8 shadow-md">
    <h5 :class="'text-lg font-semibold' + primaryClass">
      Detail {{ detail.category }}
    </h5>
    <div class="mt-4 flex flex-col">
      <div
        v-for="item in detail.data"
        :key="item.source"
        class="my-3 flex items-center"
      >
        <div
          :class="
            'flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold' +
            secondaryClass +
            primaryClass
          "
        >
          {{ item.id }}
        </div>
        <div class="ml-4 flex flex-col">
          <h6 class="text-md font-normal text-gray-800">
            {{ formatNumber(item.total) }}
          </h6>
          <p class="text-sm font-light tracking-wider text-gray-400">
            {{ item.source }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailSumber",
  props: {
    detail: Object,
    order: Number,
  },
  methods: {
    formatNumber(number) {
      return new Intl.NumberFormat("id-ID").format(number);
    },
  },
  computed: {
    primaryClass() {
      if (this.order == 1) {
        return " text-sumber-data-1";
      } else if (this.order == 2) {
        return " text-sumber-data-2";
      } else if (this.order == 3) {
        return " text-sumber-data-3";
      }
    },
    secondaryClass() {
      if (this.order == 1) {
        return " bg-sumber-data-secondary-1 ";
      } else if (this.order == 2) {
        return " bg-sumber-data-secondary-2";
      } else if (this.order == 3) {
        return " bg-sumber-data-secondary-3";
      }
    },
  },
};
</script>

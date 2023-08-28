<template>
  <select ref="selectElement" class="select2"></select>
</template>

<script>
import 'select2'; // Import Select2 JS
import 'select2/dist/css/select2.min.css'; // Import Select2 CSS

export default {
  name: 'Select2Wrapper',
  props: ['options', 'value'],
  mounted() {
    const $select = $(this.$refs.selectElement);

    // Initialize Select2
    $select.select2(this.options);

    // Update the value when props change
    $select.val(this.value).trigger('change');

    // Emit changes to parent
    $select.on('change', (event) => {
      this.$emit('input', event.target.value);
    });
  },
  watch: {
    value(newValue) {
      // Update value when prop changes
      $(this.$refs.selectElement).val(newValue).trigger('change');
    }
  },
  beforeDestroy() {
    $(this.$refs.selectElement).select2('destroy');
  }
};
</script>

<style scoped>
/* Any custom styles for your component */
</style>

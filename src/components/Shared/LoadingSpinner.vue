<template>
    <div class="full-screen-loader">
        <div class="loading-kemnaker"></div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner',
};
</script>

<style scoped>
.full-screen-loader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    /* Adjust the background color and opacity as needed */
}

.loading-kemnaker {
    background-image: url(../kemnaker.gif);
    width: 100px;
    height: 100px;
    background-size: cover;
}
</style>
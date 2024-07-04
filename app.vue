<template>
  <!-- <IntroVideo @ended="videoIsPlaying = false" v-if="videoIsPlaying"/> -->
    <Header />
    <HeroSection />

</template>

<script setup lang="ts">
const videoIsPlaying = ref(true);

useHead({
  bodyAttrs: {
    class: "bg-black min-h-svh min-w-svh",
  },
});
</script>

<style>
body {
  cursor: url("http://www.rw-designer.com/icon-image/11106-32x32x32.png"),
    default;
  font-family: 'Ocra Extended', sans-serif;
}
</style>

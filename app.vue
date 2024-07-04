<template>
  <IntroVideo @ended="videoIsPlaying = false" v-if="videoIsPlaying"/>
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
  cursor: url("./assets/img/pentagramicon.png"),
    default;
  font-family: 'Ocra Extended', sans-serif;
}
</style>

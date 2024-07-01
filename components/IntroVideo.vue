<template>
    <video
      class="fixed right-0 bottom-0 min-h-svh min-w-svh bg-black cursor-none"
      src="@/assets/video/intro.webm"
      autoplay
      muted
      @ended="$emit('ended')"
    />
</template>

<script setup lang="ts">
defineEmits(['ended']);
</script>
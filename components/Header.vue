<template>
  <header class="flex justify-between container mx-auto py-8">
    <div class="relative">
      <img
        src="@/assets/img/avernic_studios_logo_vernie.png"
        alt="Avernic Studio Logo Vernie"
        class="h-24"
      />
      <div
        ref="eye"
        :style="`transform: rotate(${rotationDegrees - 40}deg)`"
        class="absolute left-[35px] top-[52px] h-3"
      >
        <div
          class="grid place-content-center bg-red-500 size-1 rounded-full shadow-[0_0_8px_4px_#FF0000]"
        ></div>
      </div>
      <div
        ref="eye"
        :style="`transform: rotate(${rotationDegrees - 40}deg)`"
        class="absolute left-[67px] top-[52px] h-3"
      >
        <div
          class="grid place-content-center bg-red-500 size-1 rounded-full shadow-[0_0_8px_4px_#FF0000]"
        ></div>
      </div>
    </div>
    <!-- <nav class="text-white flex items-center space-x-4">
      <a href="#" class="">What we do</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav> -->
  </header>
</template>

<script setup lang="ts">
const { x: mouseX, y: mouseY } = useMouse();
const { width, height } = useWindowSize();
const eye = ref(null as Element | null);
const eyeLocation = ref<DOMRect | undefined>(undefined);
onMounted(() => {
  eyeLocation.value = eye?.value?.getBoundingClientRect();
});
debouncedWatch(
  [width, height],
  () => {
    eyeLocation.value = eye?.value?.getBoundingClientRect();
  },
  { debounce: 200 }
);
const rotationDegrees = ref(0);

throttledWatch(
  [mouseX, mouseY],
  ([x, y]) => {
    if (eyeLocation.value) {
      const radianDegrees = Math.atan2(
        x - eyeLocation.value.right,
        y - eyeLocation.value.top
      );
      rotationDegrees.value = radianDegrees * (180 / Math.PI) * -1 + 180;
    }
  },
  { throttle: 1000 / 60 }
);
</script>

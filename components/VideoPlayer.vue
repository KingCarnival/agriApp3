<script lang="ts" setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true
  }
});
</script>

<template>
  <iframe
  width="560"
  height="315" 
  :src="`https://www.youtube.com/embed/${props.videoId}`" 
  title="VideoPlayer"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
</template>

<style scoped></style>

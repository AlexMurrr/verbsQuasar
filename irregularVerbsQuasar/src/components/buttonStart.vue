<template>
  <div>
    <q-btn color="amber" glossy :label="label"></q-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
});
</script>

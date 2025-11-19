<script setup lang="ts">
const showMsg = ref(false);
const loading = ref(false);

const reset = async () => {
  loading.value = true;
  await $fetch("/api/reset");
  await refreshNuxtData();
  loading.value = false;
  showMsg.value = true;

  setTimeout(() => {
    showMsg.value = false;
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <button
    class="fixed opacity-50 bottom-10 right-10 bg-blue-500 px-3 py-1 rounded-md font-semibold flex justify-center items-center w-48 gap-2 hover:opacity-100 z-50"
    :class="{ 'bg-green-600': showMsg, 'opacity-100': loading || showMsg }"
    @click="reset"
  >
    <Icon v-show="loading" name="material-symbols:refresh-rounded" size="20" class="animate-spin" />
    {{ showMsg ? "Done" : "Reset database" }}
  </button>
</template>

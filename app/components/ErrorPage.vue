<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object as () => NuxtError,
});

defineEmits(["buttonClicked"]);
</script>

<template>
  <section class="relative z-10 py-[120px]">
    <div class="container mx-auto">
      <div class="-mx-4 flex">
        <div class="w-full px-4">
          <div class="mx-auto max-w-[400px] text-center">
            <h2 class="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
              {{ error?.statusCode }}
            </h2>
            <h4 class="mb-3 text-[22px] font-semibold leading-tight text-white">
              {{ error?.statusMessage || error?.message }}
            </h4>
            <p v-if="error?.statusCode === 404" class="mb-8 text-lg text-white">
              The page you are looking for doesn't exist
            </p>

            <button
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-gradient-to-r to-sky-700/25 from-purple-500/25 shadow-md hover:to-sky-700/50 transition-all"
              @click="$emit('buttonClicked')"
            >
              <span>Return to Homepage</span>
              <Icon name="material-symbols:home" style="color: white; font-weight: bolder; font-size: 18px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

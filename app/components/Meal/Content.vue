<script setup lang="ts">
import type { Meal } from "~/types/types";

defineProps<{
  meal: Meal;
}>();
</script>

<template>
  <article class="mx-auto w-full max-w-3xl bg-gradient-to-r to-sky-950/25 from-sky-700/25 p-10 my-5 rounded-md">
    <header class="mb-4 lg:mb-6">
      <div class="w-full h-96 rounded-md overflow-hidden mb-10">
        <img :src="meal.thumbnail" class="w-full h-full object-cover" width="768" height="384" />
      </div>
      <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        {{ meal.title }}
      </h1>
    </header>

    <p class="text-sm lg:text-base leading-6 lg:leading-7 text-gray-300" v-html="meal.instructions"></p>
  </article>
</template>

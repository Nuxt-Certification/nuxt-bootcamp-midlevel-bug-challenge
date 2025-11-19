<script setup lang="ts">
import type { Meal } from "~/types/types";

defineProps<{
  meals: Meal[];
}>();

defineEmits<{
  saveMeal: [id: number];
}>();
</script>

<template>
  <div class="grid grid-cols-2">
    <template v-for="meal in meals" :key="meal.id">
      <div class="max-w-sm bg-gradient-to-r to-sky-950/25 from-sky-700/25 rounded-lg m-5 relative">
        <div
          class="bg-white border-2 border-blue-800 rounded-full w-9 h-9 hover:scale-110 transition-all cursor-pointer flex justify-center items-center absolute top-4 right-4"
          @click="$emit('saveMeal', meal.id)"
        >
          <Icon name="material-symbols:add" size="30" :style="{ backgroundColor: 'black' }" />
        </div>
        <div class="h-40">
          <img
            class="rounded-t-lg w-full h-full object-cover"
            height="160"
            width="382"
            :src="meal.thumbnail"
            alt="meal thumbnail"
          />
        </div>

        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ meal.title }}</h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate" v-html="meal.instructions"></p>
          <NuxtLink
            :to="`/meals/${meal.slug}`"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-gradient-to-r to-sky-700/25 from-purple-500/25 shadow-md hover:to-sky-700/50 transition-all"
          >
            <span>Read more</span>
            <Icon
              name="material-symbols:arrow-right-alt-rounded"
              style="color: white; font-weight: bolder; font-size: 20px"
            />
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

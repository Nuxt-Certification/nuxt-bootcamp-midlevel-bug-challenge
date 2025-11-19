<script setup lang="ts">
import type { Meal } from "~/types/types";

defineProps<{
  meals: Meal[];
}>();

defineEmits<{
  clickedMeal: [id: number];
}>();
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3 w-80">Meal title</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meal in meals" :key="meal.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ meal.title }}
          </th>
          <td class="px-6 py-4">
            <button
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-gradient-to-r to-sky-700/25 from-purple-500/25 shadow-md hover:to-sky-700/50 transition-all"
              @click="$emit('clickedMeal', meal.id)"
            >
              <span>Delete</span>
              <Icon name="material-symbols:delete" style="color: white; font-weight: bolder; font-size: 18px" />
            </button>
          </td>
        </tr>
        <tr v-if="!meals?.length" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            You got no food left!
          </th>
          <td class="px-6 py-4"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

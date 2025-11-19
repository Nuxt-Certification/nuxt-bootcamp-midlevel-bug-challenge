<template>
  <div class="h-16 mb-5">
    <div
      class="w-[98%] h-28 sm:h-16 bg-linear-to-r to-sky-950/25 from-sky-700/25 rounded-md absolute top-5 left-2/4 -translate-x-[50%]"
    >
      <div class="flex sm:flex-row flex-col justify-center items-center sm:gap-5 h-full w-full font-semibold">
        <NuxtLink class="hover:text-gray-300 hover:underline" to="/"> Homepage </NuxtLink>
        <span class="hidden sm:block">|</span>
        <NuxtLink class="hover:text-gray-300 hover:underline" to="/meals"> Meals </NuxtLink>
        <span class="hidden sm:block">|</span>
        <NuxtLink class="hover:text-gray-300 hover:underline" to="/dashboard"> Dashboard </NuxtLink>
      </div>
    </div>
  </div>
</template>

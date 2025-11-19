<script setup></script>
<template>
  <div class="min-h-screen bg-stone-900 antialiased relative text-white">
    <Navbar />
    <main class="min-h-[80vh] flex justify-center items-center flex-col">
      <h1 class="font-bold text-5xl mb-10">Admin Dashboard</h1>
      <slot />
    </main>
  </div>
</template>

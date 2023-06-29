<template>
  <div class="flex justify-center h-screen space-x-4 items-center">
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://i.imgur.com/EQv76zR.jpg" alt="dog in alley" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Apartment {{ id }}</h2>
        <p class="mt-4 mb-1">Address:</p>
        <p class="mb-1">Floor:</p>
        <p class="mb-4">Door Number:</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">View Inventory</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>

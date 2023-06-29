<template>
  <div class="flex justify-center h-screen space-x-4 items-center">
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <img :src="imageUrl" :alt="address" />

      <div class="card-body">
        <h3 class="mt-2 text-xl">
          {{ address }} #{{ floor }}-{{ doorNumber }}
        </h3>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">View Inventory</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
import { getApartments } from "@/mock-db/api";

const apartments = await getApartments();
const { address, floor, doorNumber, imageUrl, area, status } =
  apartments[id - 1];

definePageMeta({
  layout: "apartments",
});
</script>

<style scoped></style>

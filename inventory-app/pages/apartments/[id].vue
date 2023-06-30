<!-- This is the apartment + inventory Preview page -->
<template>
  <div class="flex justify-center h-screen items-center">
    <div>
      <header class="w-10/12 mx-auto px-8 mb-4">
        <!-- default goes back to list of apartments -->
        <!-- TODO: replace BACK with icon -->
        <NuxtLink to="/apartments" class="text-xl btn pt-0 pb-1 rounded-3xl"
          >←</NuxtLink
        >
      </header>

      <div class="w-11/12 mx-auto flex flex-wrap justify-center">
        <div class="w-5/12 py-2 pr-8 border-r-2 border-[#dfe6e9] mr-8">
          <img :src="imageUrl" :alt="address" />

          <h3 class="my-3 font-bold tracking-wider text-2xl truncate">
            {{ address }} #{{ floor }}-{{ doorNumber }}
          </h3>
        </div>

        <!-- Display when inventory is empty - prompt to add -->
        <div
          class="w-5/12 py-8 flex justify-center items-center space-x-8 border-2 border-dashed rounded-xl"
        >
          <p class="tracking-wider text-xl truncate">
            No items in the inventory.
          </p>
          <button class="btn btn-primary">Add Items</button>
        </div>

        <!-- Display when inventory has items - prompt to edit/update/delete -->
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

// definePageMeta({
//   layout: "apartments",
// });
</script>

<style scoped></style>

<!-- /apartments/_id -->
<!-- This is the apartment + inventory Preview page -->
<template>
  <div class="flex justify-center h-screen items-center">
    <div>
      <!-- TOP: title + back redirectory -->
      <header class="w-10/12 mx-auto px-8 mb-8 flex items-center">
        <!-- redirect back to list of apartments -->
        <NuxtLink to="/apartments" class="text-xl btn pt-0 pb-1 rounded-3xl"
          >←</NuxtLink
        >
        <h1 class="ml-8 text-3xl font-bold tracking-wider">Inventory List</h1>
      </header>

      <!-- BOTTOM: -->
      <div class="w-11/12 mx-auto flex flex-wrap justify-center">
        <!-- LEFT: Apartment selected -->
        <div class="w-5/12 py-2 pr-8 border-r-2 border-[#dfe6e9] mr-8">
          <img :src="imageUrl" :alt="address" />

          <h3 class="my-3 font-bold tracking-wider text-2xl truncate">
            {{ address }} #{{ floor }}-{{ doorNumber }}
          </h3>
        </div>

        <!-- RIGHT: Inventory display -->
        <div
          class="w-5/12 flex flex-col p-6 border-2 border-dashed border-[#b2bec3] rounded-xl hover:shadow-xl"
        >
          <div v-if="!inventory" class="flex justify-center space-x-8 my-auto">
            <!-- Display when inventory is empty - prompt to add -->
            <p class="tracking-wider text-xl truncate">
              No items in the inventory.
            </p>
            <NuxtLink :to="`/inventory/${id}`" class="btn btn-primary">
              Add Items
            </NuxtLink>
          </div>

          <div v-else>
            <!-- Display when inventory has items - prompt to edit/update/delete -->
            <InventoryPreview :items="inventory" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
import { getApartments, getInventory } from "@/mock-db/api";

const apartments = await getApartments();
const { address, floor, doorNumber, imageUrl, area, status } =
  apartments[id - 1];

// get inventory list for particular apartment[id]
const inventory = await getInventory(parseInt(id));
console.log(
  "[server] Checking for inventory from mock-db...",
  inventory,
  !inventory
);
</script>

<style scoped></style>

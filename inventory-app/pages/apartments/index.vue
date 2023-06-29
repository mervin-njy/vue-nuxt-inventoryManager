<!-- NOTE: vue's default base route / apartment's root page, i.e., not /index route -->

<!-- TODO:  -->

<!-- 1. fetch list of apartments from server / mock-db via simluated API -->

<!-- 2. Display apartment details {Address, Floor, Door Number} -->

<!-- 3. (STRETCH GOAL) Search function to filter -->

<template>
  <div>
    <h1 class="font-bold text-4xl">Apartments</h1>
    <ul>
      <div v-for="apartment in apartments" :key="apartment.id">
        <img :src="apartment.imageUrl" :width="500" />
        <h3>
          {{ apartment.address }} - Floor {{ apartment.floor }}, Door
          {{ apartment.doorNumber }}
        </h3>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { getApartments } from "@/mock-db/api";

const apartments = await getApartments();
</script>

<style scoped></style>

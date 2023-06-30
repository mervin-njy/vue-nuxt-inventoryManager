<!-- NOTE: vue's default base route / apartment's root page, i.e., not /index route -->

<!-- TODO:  -->
<!-- (DONE) 1. fetch list of apartments from server / mock-db via simluated API -->
<!-- (DONE) 2. Display apartment details {Address, Floor, Door Number} -->
<!-- 3. (STRETCH GOAL) Search function to filter -->

<template>
  <div class="mx-auto w-8/12 pb-60 pt-20">
    <h1 class="mx-auto py-14 text-5xl font-bold">Apartments</h1>
    <section class="grid grid-cols-3 gap-12">
      <!-- class="solid rounded-lg border-2 border-violet-200 p-3 shadow-md hover:shadow-xl" -->
      <div v-for="a in apartments" :key="a.id">
        <ApartmentCard :apartment="a" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { getApartments } from "@/mock-db/api";

const apartments = await getApartments();
const colourTag = (status) => {
  if (status === "Available") return "#12b488";
  if (status === "Pending") return "#fdcb6e";
  if (status === "Occupied") return "#d63031";
};
</script>

<style scoped></style>

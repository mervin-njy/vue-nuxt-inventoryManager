<!-- This displays the list of inventory (Preview) -->
<template>
  <div>
    <header class="flex justify-between pb-4 mb-2 border-b-2 border-[#b2bec3]">
      <h3 class="font-bold tracking-wider text-2xl pl-2">Item</h3>
      <h3 class="font-bold tracking-wider text-2xl pr-2">Quantity</h3>
    </header>

    <table class="w-full">
      <tr
        v-for="i in items"
        class="flex justify-between py-1 even:bg-[#dfe6e9] hover:bg-[#636e72] hover:text-[#55efc4] rounded-md"
      >
        <p class="tracking-wider text-lg pl-3 truncate">{{ i.item }}</p>
        <p class="tracking-wider text-lg pr-4">{{ i.quantity }}</p>
      </tr>
    </table>

    <div class="flex justify-end mt-6">
      <NuxtLink :to="`/inventory/${id}`" class="btn btn-primary"
        >Edit Items</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { items } = defineProps(["items"]);
</script>

<style scoped></style>

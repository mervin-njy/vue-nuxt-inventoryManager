<!-- This displays the list of inventory (Preview) -->
<template>
  <div>
    <header class="flex justify-between pb-4 mb-2 border-b-2 border-[#b2bec3]">
      <h3 class="font-bold tracking-wider text-2xl pl-2">Item</h3>
      <h3 class="font-bold tracking-wider text-2xl pr-2">Quantity</h3>
    </header>

    <table class="w-full">
      <tr
        v-for="(item, index) in items"
        class="flex justify-between py-1 even:bg-[#dfe6e9] hover:bg-[#636e72] hover:text-[#55efc4] rounded-md"
      >
        <div class="flex justify-start pl-2 w-full">
          <p class="font-medium text-lg pl-2 w-1/12">{{ index + 1 }}.</p>
          <p class="tracking-wider text-lg pl-3 truncate">{{ item.item }}</p>
        </div>
        <p class="tracking-wider text-lg pr-4">{{ item.quantity }}</p>
      </tr>
    </table>

    <div class="flex justify-end mt-6">
      <NuxtLink
        :to="`/inventory/${id}`"
        class="btn btn-primary bg-[#6c5ce7] hover:bg-[#a29bfe] hover:text-white"
        >Edit Items</NuxtLink
      >
    </div>

    <!-- <div v-else class="flex justify-end mt-20 space-x-3">
      <p class="flex items-center italic tracking-wider text-xl pl-2">
        Confirm update?
      </p>
      <NuxtLink
        :to="{
          path: `/apartments/${id}`,
          query: { preview: false },
        }"
      >
        <button @click="handleConfirm" class="btn btn-primary">Approve</button>
      </NuxtLink>
      <NuxtLink
        :to="`/inventory/${id}`"
        class="btn btn-primary bg-[#d63031] hover:bg-[#ff7675] hover:text-white"
        >Cancel</NuxtLink
      >
    </div> -->
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { items } = defineProps(["items"]);

const handleConfirm = () => {};
</script>

<style scoped></style>

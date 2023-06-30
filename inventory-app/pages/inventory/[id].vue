<!-- /inventory/_id -->
<!-- This is the Inventory editing modal / popup -->
<template>
  <div class="flex justify-center h-screen items-center">
    <div
      class="flex flex-col p-6 border-2 border-dashed border-[#b2bec3] rounded-xl hover:shadow-xl"
    >
      <!-- 1. title to show address -->
      <div class="mb-8 flex items-center">
        <!-- redirect back to list of apartments -->
        <NuxtLink
          :to="`/apartments/${id}`"
          class="text-xl btn pt-0 pb-1 rounded-3xl"
          >←</NuxtLink
        >
        <h1 class="ml-6 text-2xl tracking-wider">
          Edit Inventory for: {{ address }} #{{ floor }}-{{ doorNumber }}
        </h1>
      </div>

      <!-- 2. item & qty header -->
      <header
        class="flex justify-between pb-4 mb-2 border-b-2 border-[#b2bec3]"
      >
        <h3 class="font-bold tracking-wider text-2xl pl-2">Item</h3>
        <h3 class="font-bold tracking-wider text-2xl pr-2">Quantity</h3>
      </header>

      <!-- 3. table of inventory list -->
      <table class="w-full">
        <!-- for each row of items from existing inventory -->
        <tr
          v-for="(item, index) in inventory"
          class="flex justify-between py-1 border-2 rounded-md odd:border-white even:bg-[#dfe6e9] hover:border-[#12b488]"
        >
          <!-- LEFT: dropdown for individual items -->
          <!-- STRETCH GOALS: item must be unique -->
          <select
            class="select w-full max-w-xs ml-2 pl-4 rounded-md hover:bg-[#6c5ce7] hover:text-white"
          >
            <option disabled selected>
              {{ inventory[index].item }}
            </option>
            <option v-for="o of itemOptions" :key="o">
              {{ o }}
            </option>
          </select>

          <!-- RIGHT: + - counter for quantity -->
          <div class="flex justify-end space-x-4 pr-4">
            <button
              class="tracking-wider text-lg btn px-0 py-0 w-8 h-auto"
              @click="handleMinus(index)"
            >
              -
            </button>
            <p class="tracking-wider text-lg font-bold">
              {{ inventory[index].quantity }}
            </p>
            <button
              class="tracking-wider text-lg btn px-0 py-0 w-8 h-auto"
              @click="handlePlus(index)"
            >
              +
            </button>
          </div>
        </tr>
      </table>

      <!-- 4. Options to add row, confirm, or delete list -->
      <section class="flex justify-between mt-6">
        <button
          class="tracking-wider text-md btn w-2/12 h-1/5 rounded-lg"
          @click="handleAddRow"
        >
          Add Row
        </button>

        <div class="flex justify-end space-x-4 w-9/12">
          <button
            class="tracking-wider text-md btn w-2/12 rounded-lg bg-[#6c5ce7] hover:bg-[#a29bfe] hover:text-white"
            @click="handlePreview"
          >
            Preview
          </button>
          <button
            class="tracking-wider text-md btn w-2/12 rounded-lg bg-[#d63031] hover:bg-[#ff7675] hover:text-white"
            @click="handleDelete"
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
import {
  getApartments,
  getInventory,
  getInventoryOptions,
  createInventory,
  updateInventory,
  deleteInventory,
} from "@/mock-db/api";
import { ref } from "vue";

// const { apartment, inventory } = defineProps(["apartment", "inventory"]);
const apartments = await getApartments();
const { address, floor, doorNumber, imageUrl, area, status } =
  apartments[id - 1];

// get inventory list for particular apartment[id] onMount => to be changed in this page
const inventory = ref([]);
onMounted(async () => {
  inventory.value = await getInventory(parseInt(id));
});

const itemOptions = await getInventoryOptions();

// event handlers
const handleMinus = (index) => {
  if (inventory.value[index].quantity > 0) {
    inventory.value[index].quantity--;
  } else {
    inventory.value.splice(index, 1);
  }
};

const handlePlus = (index) => {
  inventory.value[index].quantity++;
};

const handleAddRow = () => {
  inventory.value.push({ item: itemOptions[0], quantity: 1 });
};
</script>

<style scoped></style>

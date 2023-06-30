<!-- /inventory/_id -->
<!-- This is the Inventory editing modal / popup -->
<template>
  <div class="flex justify-center items-center py-40">
    <div
      class="flex flex-col p-6 border-2 border-dashed border-[#b2bec3] rounded-xl hover:shadow-xl"
    >
      <!-- 1. title to show address -->
      <div class="mb-8 flex items-center">
        <!-- redirect back to list of apartments -->
        <NuxtLink
          :to="`/apartments/${id}`"
          class="text-xl btn text-center w-20 pt-0 pb-1 rounded-3xl"
          >←</NuxtLink
        >
        <h1 class="ml-4 text-2xl tracking-wider">
          Edit Inventory for: {{ address }} #{{ floor }}-{{ doorNumber }}
        </h1>
      </div>

      <!-- 2. item & qty header -->
      <header
        class="flex justify-between pb-4 mb-2 border-b-2 border-[#b2bec3]"
      >
        <!-- <h3 class="font-bold tracking-wider text-2xl pl-2 w-1/12">S/N</h3> -->
        <h3 class="font-bold tracking-wider text-2xl pl-2 w-9/12">Item</h3>
        <h3 class="font-bold tracking-wider text-2xl pr-2">Quantity</h3>
      </header>

      <!-- ~3. if no inventory items -->
      <p
        v-if="inventory.length === 0"
        class="flex w-full items-center pl-3 text-lg italic tracking-wider font-medium"
      >
        There are no items in the list.
      </p>

      <!-- 3. table of inventory list -->
      <table class="w-full">
        <!-- for each row of items from existing inventory -->
        <tr
          v-for="(item, index) in inventory"
          class="flex justify-between py-1 border-2 rounded-md odd:border-white even:bg-[#dfe6e9] hover:border-[#12b488]"
        >
          <!-- LEFT: dropdown for individual items -->
          <!-- STRETCH GOALS: item must be unique -->
          <div class="flex justify-start pl-2">
            <p class="font-medium text-lg pr-3">{{ index + 1 }}.</p>
            <!-- Toggle previewMode off-->
            <select
              class="select w-full max-w-xs pl-2 rounded-md hover:bg-[#6c5ce7] hover:text-white"
              v-if="!approvedMode && !previewMode"
              @change="handleDropdownChange($event.target.value, index)"
            >
              <option disabled selected>
                {{ inventory[index].item }}
              </option>
              <option v-for="o of itemOptions" :value="o" :key="o">
                {{ o }}
              </option>
            </select>

            <!-- Toggle previewMode on OR approvedMode => changed items -->
            <p
              v-if="approvedMode || previewMode"
              class="flex w-full items-center pl-3 text-lg italic tracking-wider font-medium"
            >
              {{ inventory[index].item }}
            </p>
          </div>

          <!-- RIGHT: + - counter for quantity -->
          <div class="flex justify-end space-x-4 pr-4">
            <button
              class="tracking-wider text-lg btn px-0 py-0 w-8 h-auto"
              v-if="!approvedMode && !previewMode"
              @click="handleMinus(index)"
            >
              -
            </button>
            <p class="tracking-wider text-lg font-bold">
              {{ inventory[index].quantity }}
            </p>
            <button
              class="tracking-wider text-lg btn px-0 py-0 w-8 h-auto"
              v-if="!approvedMode && !previewMode"
              @click="handlePlus(index)"
            >
              +
            </button>
          </div>
        </tr>
      </table>

      <!-- 4. Options to add row, confirm, or delete list -->
      <section
        v-if="!approvedMode && !previewMode"
        class="flex justify-between mt-6"
      >
        <!-- Toggle previewMode off -->
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

      <section
        v-if="!approvedMode && previewMode"
        class="flex justify-end space-x-4 w-full mt-6"
      >
        <!-- Toggle previewMode on -->

        <button
          class="tracking-wider text-md btn w-2/12 rounded-lg"
          @click="handleApprove"
        >
          Approve
        </button>
        <button
          class="tracking-wider text-md btn w-2/12 rounded-lg bg-[#d63031] hover:bg-[#ff7675] hover:text-white"
          @click="handlePreview"
        >
          Cancel
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
import {
  getApartments,
  getInventory,
  getInventoryOptions,
  updateInventory,
  deleteInventory,
} from "@/mock-db/api";
import { ref } from "vue";

const { id } = useRoute().params;
const apartments = await getApartments();
const { address, floor, doorNumber, imageUrl, area, status } =
  apartments[id - 1];

// boolean to toggle render mode
const previewMode = ref(false);
const approvedMode = ref(false);

// get inventory list for particular apartment[id] onMount => to be changed in this page
const inventoryChanges = ref([]); // boolean
const inventoryInitial = (await getInventory(parseInt(id))) || []; // initial array to compare with for changes
const inventory = ref([]);
onMounted(async () => {
  // empty array if initial inventory doesn't exist => else inventory.value = undefined
  inventory.value = (await getInventory(parseInt(id))) || [];
});

const itemOptions = await getInventoryOptions();

// functions ---------------------------------------------------------------------------------------
const getInitialValues = (initialArr) => {
  // trigger this every time "Approve" gets clicked => restructure arr into kv-pair
  const kvPair = {};
  for (let i = 0; i < initialArr.length; i++) {
    kvPair[initialArr[i].item] = initialArr[i].quantity;
  }
  return kvPair;
};

// needs refactoring...
const compareChanges = (arr, initialVals) => {
  // returns true/false in the same format as array => render display changes to text
  const boolChanges = [];
  console.log("compareChanges - new inventory", arr);
  console.log("initial values", initialVals);
  for (let i = 0; i < arr.length; i++) {
    const boolRow = {};
    boolRow["item"] = Object.keys(initialVals).includes(arr[i].item);
    if (boolRow["item"]) {
      boolRow["quantity"] = arr[i].quantity === initialVals[arr[i].item];
    }

    boolChanges.push(boolRow);
  }

  return boolChanges;
};

// event handlers ----------------------------------------------------------------------------------
const handleDropdownChange = (selectedOption, index) => {
  inventory.value[index].item = selectedOption;
};

const handleMinus = (index) => {
  if (inventory.value[index].quantity > 1) {
    inventory.value[index].quantity--;
  } else {
    inventory.value.splice(index, 1);
  }
};

const handlePlus = (index) => {
  inventory.value[index].quantity++;
};

const handleAddRow = () => {
  if (inventory.value.length < 20) {
    inventory.value.push({ item: itemOptions[0], quantity: 1 });
  } else {
    alert("Maximum of 20 items please!");
  }
};

const handlePreview = () => {
  // toggles previewMode to disable select/dropdown & +/- qty
  console.log("handlePreview", previewMode.value);
  console.log(inventory.value);
  previewMode.value = !previewMode.value;
};

async function handleDelete() {
  console.log("handleDelete", id);
  await deleteInventory(parseInt(id));
  inventory.value = [];
  approvedMode.value = !approvedMode.value;
}

async function handleApprove() {
  console.log("handleApprove", id, toRaw(inventory.value));
  await updateInventory(parseInt(id), toRaw(inventory.value));
  approvedMode.value = !approvedMode.value;
  const initialVals = getInitialValues(inventoryInitial);
  inventoryChanges.value = compareChanges(inventory.value, initialVals);
}
</script>

<style scoped></style>

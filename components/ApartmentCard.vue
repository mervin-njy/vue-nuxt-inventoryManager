<template>
  <div>
    <div class="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl">
      <img :src="apartment.imageUrl" :width="400" :alt="apartment.address" />

      <div class="card-body">
        <h3 class="my-2 text-xl truncate">
          {{ apartment.address }} #{{ apartment.floor }}-{{
            apartment.doorNumber
          }}
        </h3>

        <div class="card-actions flex justify-end">
          <NuxtLink
            :to="{
              path: `/apartments/${apartment.id}`,
              query: { preview: false },
            }"
            class="btn btn-primary"
            >View Inventory</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { apartment } = defineProps(["apartment"]);
</script>

<style scoped></style>

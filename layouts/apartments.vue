<!-- TO BE REMOVED -->
<!-- default layout with nav links for individual apartments -->
<template>
  <div class="mx-auto w-11/12 h-screen">
    <header>
      <!-- default goes back to list of apartments -->
      <!-- TODO: replace BACK with icon -->
      <NuxtLink to="/apartments">BACK</NuxtLink>
    </header>

    <!-- output page contents -->
    <div><slot /></div>

    <footer>
      <!-- TODO: add next / prev to go through list -->
    </footer>
  </div>
</template>

<script setup></script>

<style scoped></style>

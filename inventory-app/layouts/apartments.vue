<!-- default layout with nav links for individual apartments -->
<template>
  <div>
    <header>
      <nav>
        <!-- default goes back to list of apartments -->
        <!-- TODO: replace BACK with icon -->
        <NuxtLink to="/apartments">BACK</NuxtLink>
      </nav>
    </header>

    <!-- output page contents - woah nice shows the number of references here!!! -->
    <div><slot /></div>

    <footer>
      <!-- TODO: add next / prev to go through list -->
    </footer>
  </div>
</template>

<script setup></script>

<style scoped></style>

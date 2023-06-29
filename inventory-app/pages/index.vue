<!-- NOTE: vue's default base route / home page -->
<!-- Added redirect (@nuxt.config.ts) from "/" to "/apartments" for this project -->
<!-- Only notes here -->

<template>
  <div>
    <header>
      <NuxtLink to="/">SiteTitle</NuxtLink>
      <nav>
        <!-- why NuxtLink over <a> tags -->
        <!-- 1. While sending requests to server, Nuxt intercepts and swaps out components depending on page  -->
        <!-- 2. Automatically set up Active class Links (when clicked) for styling -->
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/apartments">Apartments</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas
      a vero recusandae perspiciatis iusto beatae ipsa veniam error quasi!
    </p>
  </div>
</template>

<script setup></script>

<style scoped></style>

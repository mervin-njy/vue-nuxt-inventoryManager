# Inventory Manager for Apartments in Vue-Nuxt

Simple CRUD app where user can view a list of apartments, each with inventory management features.

## Tech Stack

- Nuxt 3 / Vue 3 with SSR
- tailwind css, daisyUI

## Pages

1. Apartment list
   List of apartments is fixed.
2. Inventory list (CRUD)
   Each apartment has one inventory list where users could create/update/delete.
   User can select an item from a dropdown list (refrigerator, air-conditioner, sofa…) and the corresponding quantities.
   User could add maximum of 20 items.
3. Inventory list preview and approve
   After the list is completed there is a “Preview” button that shows the user the preview of the list without editing it.
   On that page, the “Approve” button and that will save the list (Editing -> Preview -> Approve).

### Dependencies

npm install --save-dev @nuxtjs/tailwindcss
npm i daisyui
npm i -D prettier-plugin-tailwindcss => removed due to long save time

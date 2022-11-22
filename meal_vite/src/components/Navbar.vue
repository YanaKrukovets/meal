<template>
    <header class="bg-white shadow h-16 flex justify-between">
      
      <router-link :to="{name: 'home'}" class="inline-flex items-center px-5">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full hover:bg-indigo-200">
          Search Meals by Name
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full hover:bg-indigo-200">
          Search Meals by Letter
        </router-link>
        <router-link :to="{name: 'byIngredients'}" class="inline-flex items-center px-2 h-full hover:bg-indigo-200">
          Ingredient description
        </router-link>
      </div>

    </header>
</template>
<script setup lang="ts">
import Button from "../components/Button.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="w-full h-screen grid place-items-center">
    <div class="container text-center">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Quiz App!</h1>
      <h3 class="text-xl text-gray-700 dark:text-gray-300 mb-4">
        Let's test your knowledge about Computer Science
      </h3>
      <RouterLink to="/quiz">
        <Button>
          Start Now
        </Button>
      </RouterLink>
    </div>
  </main>
</template>
<script lang="ts">
export default {

}
</script>
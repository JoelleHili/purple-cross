<template>
  <div id="app">
    <UApp>
      <Navbar />
      <router-view />
    </UApp>
  </div>
</template>

<script setup lang="ts">
import { Navbar } from "@/modules/Navbar";
</script>

<style lang="scss">
@use "@/styles/global.scss";
</style>

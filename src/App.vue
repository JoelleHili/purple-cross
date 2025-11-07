<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { Navbar } from "@/modules/Navbar";
</script>

<style lang="scss">
@use "@/styles/global.scss";
</style>

<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../app-header/app-header";
import appContent from "../app-content/app-content";
import appFooter from "../app-footer/app-footer";
export default {
  components: {
    appHeader,
    appContent,
    appFooter
  }
};
</script>

<style scoped>
</style>
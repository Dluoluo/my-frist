<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
    <app-mask></app-mask>
    <app-alert></app-alert>
  </div>
</template>

<script>
import appHeader from "../app-header";
import appContent from "../app-content";
import appFooter from "../app-footer";
import appMask from "../app-Mask";
import appAlert from "../app-alert";
export default {
  components: {
    appHeader,
    appContent,
    appFooter,
    appMask,
    appAlert
  }
};
</script>

<style scoped>
</style>
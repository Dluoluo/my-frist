<template>
  <div>
    <app-hearder></app-hearder>
    <app-content></app-content>
    <app-footer></app-footer>
    <app-mask></app-mask>
    <app-alert></app-alert>
  </div>
</template>

<script>
import appHearder from '../app-header'
import appContent from '../app-content'
import appFooter from '../app-footer'
import appMask from '../app-mask'
import appAlert from '../app-alert'
export default {
  components: {
    appHearder,
    appContent,
    appFooter,
    appMask,
    appAlert
  }
};
</script>

<style scoped>
</style>
<template>
  <div id="app">
    <p>server status {{ status }}</p>
    <app-server-status></app-server-status>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'critical'
    }
  }
}
</script>

<style>

</style>

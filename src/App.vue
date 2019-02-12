<template>
  <div id="app">
    <router-link to="/fractions">Дроби</router-link>
    <router-link to="/comments">Комментарии</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>

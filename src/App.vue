<template>
  <div id="app">
    <AppHeader /> <!-- Poprawiona nazwa komponentu -->
    <div class="container content">
      <router-view></router-view>
    </div>
    <AppFooter /> <!-- Poprawiona nazwa komponentu -->
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'; // Import poprawionego komponentu
import AppFooter from './components/Footer.vue'; // Import poprawionego komponentu

export default {
  name: 'App',
  components: {
    AppHeader, // Upewnij się, że komponent jest używany
    AppFooter  // Upewnij się, że komponent jest używany
  }
}
</script>

<style src="./assets/App.css"></style>

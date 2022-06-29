<template>
  <div id="app">
   <!-- <Formulario/>
   <Cliente /> -->
   <barra-nav/>
   <router-view/>
  </div>
</template>

<script>

/* import Formulario from './componentes/Formulario.vue'
import Cliente from './componentes/Cliente.vue' */
import BarraNav from './componentes/BarraNav.vue'
export default {
  name: 'App',
  components: {
   BarraNav
   /* Formulario,
   Cliente */
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

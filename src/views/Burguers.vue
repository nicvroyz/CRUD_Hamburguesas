<template>
  <div>
    <lista-hamburguesas></lista-hamburguesas>

  </div>
</template>

<script>
// Acá se carga el componente de la Lista de hamburguesas
// para aparecer en la vista de "Hamburguesas"

import Listar from '../components/Listar.vue';
export default {
  name: "Burguers",
  components: {
    // Lista de hamburguesas,
    'lista-hamburguesas': Listar,

  },
};
</script>

<style>
</style>

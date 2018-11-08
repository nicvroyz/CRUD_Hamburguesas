<template>
  <div class="agregar_hamburguesa">
    
    <add-burguer></add-burguer>
  </div>
</template>

<script>

import Agregar from '../components/Agregar.vue';

export default {
  name: 'agregar_hamburguesa',
  components: {
    // Agregar hamburguesas,
    'add-burguer': Agregar,
  },
};


</script>

<template>
  <div class="actualizar_hamburguesa">
    
    <update-burguer></update-burguer>
  </div>
</template>

<script>

import Actualizar from '../components/Actualizar.vue';

export default {
  name: 'actualizar_hamburguesa',
  components: {
    // Actualizar hamburguesa,
    'update-burguer': Actualizar,
  },
};


</script>

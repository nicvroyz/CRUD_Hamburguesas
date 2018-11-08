<template lang="html">
 <!-- Formulario para agregar una hamburguesa -->
  <div id="add" class="add-burguer"> 
   <h3>Agregar Hamburguesa</h3> 
     <div class="container">
     <form v-on:submit = "addBurguer">
         <div class="form-group">
             <label>Nombre</label>
            <input type="text" class="form-control" placeholder="Nombre Hamburguesa" v-model="burguer.nombre">
         </div>
              <div class="form-group">
             <label>Ingredientes</label>
            <input type="text" class="form-control" placeholder="Ingredientes" v-model="burguer.ingredientes">
         </div>
           <div class="form-group">
             <label>Calorías</label>
            <input type="text" class="form-control" placeholder="Calorías de Hamburguesa" v-model="burguer.calorias">
         </div>
         <div>
             <button class="btn btn-success" type="submit" data-toggle="modal" data-target="#confirmacion" value="Enviar"> Enviar</button> 
             </div>
     </form>
     <div class="modal fade" id="confirmacion" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Agregar Hamburguesa</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¡{{burguer.nombre}} agregada de forma éxitosa!</p>
      </div>
      <div class="modal-footer">
        <router-link class="btn btn-success" :to="'/hamburguesas/'" data-dismiss="modal">Aceptar</router-link>
      </div>
    </div>
  </div>
</div>
      </div>
  </div>
  

</template>

<script>


export default {
  name: "Agregar",
  props: ["algo"],
  data() {
    return {
      burguer: {}
    };
  },
  methods: {
    // En este método se agrega una hamburguesa cuando los campos no estén vacíos
    addBurguer(e) {
      if (
        //Valida que los campos estén completos
        !this.burguer.nombre ||
        !this.burguer.ingredientes ||
        !this.burguer.calorias
      ) {
        console.log("Los campos no pueden estar vacíos");
      } else {
        //Crea un objeto hamburguesa
        let newBurguer = {
          nombre: this.burguer.nombre,
          ingredientes: this.burguer.ingredientes,
          calorias: this.burguer.calorias
        };
        this.$http
          .post("https://prueba-hamburguesas.herokuapp.com/burguer", newBurguer)
          .then(function(response) {
           
          });

        e.preventDefault();
      }

    }
  },
  created() {
    this.addBurguer();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

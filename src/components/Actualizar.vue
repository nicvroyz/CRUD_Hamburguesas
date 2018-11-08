<template lang="html">
<!-- Formulario para actualizar una hamburguesa -->
  <div id="update" class="update-burguer">
     <h3>Actualizar Hamburguesa</h3> 
     <div class="container">
     <form v-on:submit = "updateBurguer">
         <div class="form-group">
             <label for="nombre" class="text-left">Nombre</label>
            <input name="nombre" type="text" class="form-control" placeholder="Nombre Hamburguesa" v-model="burguer.nombre">
         </div>
              <div class="form-group">
             <label for="ingredientes">Ingredientes</label>
            <input id="ingredientes"type="text" class="form-control" placeholder="Ingredientes" v-model="burguer.ingredientes">
         </div>
           <div class="form-group">
             <label for="calorias" class="text-left">Calorías</label>
            <input name="calorias" type="text" class="form-control" placeholder="Calorías de Hamburguesa" v-model="burguer.calorias">
         </div>
         <div>
             <button class="btn btn-primary" type="submit" data-toggle="modal" data-target="#confirmacion" value="Enviar"> Actualizar</button> 
             </div>
     </form>
     <div class="modal fade" id="confirmacion" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Actualizar Hamburguesa</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¡{{burguer.nombre}} actualizada de forma éxitosa!</p>
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
  name: "Actualizar",
  props: ["algo"],
  data() {
    return {
      burguer: {}
    };
  },
  methods: {
  //  En este método se recuperan todas las hamburguesas y luego se recorre 
  // para encontrar por su id la que se va a actualizar 
    getBurguer(id){
      this.$http
        .get("https://prueba-hamburguesas.herokuapp.com/burguer/")
        .then (function(response) {
          //Se recuperan todas las hamburguesas
          let burguers = response.data;
          //Recorre todas las hamburguesas
          for (let i = 0; i < burguers.length; i++){
            //Se compara el id de cada hamburguesa con el id del parámetro
              if(burguers[i]._id == id){
                  this.burguer = burguers[i];
              }
          }          
        });
    },


    updateBurguer(e) {
      // En este método se actualiza una hamburguesa cuando los campos no estén vacíos
      if (
        !this.burguer.nombre ||
        !this.burguer.ingredientes ||
        !this.burguer.calorias
      ) {
        console.log("Los campos no pueden estar vacíos");
      } else {
        let updateBurguer = {
          nombre: this.burguer.nombre,
          ingredientes: this.burguer.ingredientes,
          calorias: this.burguer.calorias
        };
        this.$http
          .put("https://prueba-hamburguesas.herokuapp.com/burguer/" + this.$route.params.id, updateBurguer)
          .then(function(response) {
          });

        e.preventDefault();
      }

    }
  },
  created(){
      this.getBurguer(this.$route.params.id);
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

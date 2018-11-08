<template lang="html">
<!-- Lista de hamburguesas -->
  <div id="del" class="listar-hamburguesas">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6">
    <h1 class="text-center" style="font-size:26px; margin-bottom:20px; margin-left: 40px;">
     Listado de Hamburguesas</h1>
     </div>
    <div class="col-12 col-sm-6 text-center" >
      <router-link class="btn btn-success" style="margin-bottom:30px;" to="/agregar_hamburguesa">Nueva Hamburguesa</router-link>
    </div>
    </div>
    <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Ingredientes</th>
      <th scope="col">Calorías</th>
      <th scope="col">Actualizar</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <!-- Recupero las hamburguesas para que se muestren en la lista -->
  <tbody>
    <tr :key="item._id" v-for="item in lists">
      <td>{{item.nombre}}</td>
      <td>
        <!-- Recupero todos los ingredientes que existen en "ingredientes" -->
        <p v-for="ingrediente in item.ingredientes">
          {{ingrediente}}
          </p>
           </td>
      <td>{{item.calorias}}</td>
      <td><router-link class="btn btn-outline-primary" v-bind:to="'/actualizar_hamburguesa/'+item._id">Editar</router-link></td>
      <td><button class="btn btn-outline-danger" v-on:click="confirmacionModal(item._id, vueInst)">Eliminar</button></td>
     </tr>
    </tbody>
    </table>
    </div>
     <div class="modal fade" id="confirmacion" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar Hamburguesa</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿Desea eliminar esta hamburguesa?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="eliminar" type="button" class="btn btn-danger" data-dismiss="modal">Eliminar</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Listar",
  props: ["algo"],
  data() {
    return {
      lists: "lista_hamburguesas",
      //Retorna una instancia de Vue para utilizar en comportamiento de botón "Eliminar"
      vueInst: this
    };
  },
  methods: {
    // En este método se listan las hamburguesas
    getBurguers: function() {
      this.$http
        .get("https://prueba-hamburguesas.herokuapp.com/burguer")
        .then(function(response) {
          this.lists = response.data;
        });
    },
    // En este método elimino una hamburguesa específica por su id
    deleteBurguer: function(id) {
      console.log(id);
      this.$http.delete("https://prueba-hamburguesas.herokuapp.com/burguer/" + id)
      .then(response => {
        this.$router.push({ path: "/hamburguesas" });
       });
    },
    confirmacionModal: function(id, instancia_vue){
      // Mostrar modal
      $('#confirmacion').modal('show'); 
      //Agregar la función para eliminar en el click 
     $('#eliminar').click(function(){
       //Llamado a método para eliminar
       instancia_vue.deleteBurguer(id);

     });
    }

  },
  created() {
    //Cargar lista
    this.getBurguers();
  },
  updated(){
    //Recarga la lista de la página
    this.getBurguers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
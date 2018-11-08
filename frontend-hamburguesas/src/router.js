import Vue from 'vue';
import Router from 'vue-router';
import vueResource from 'vue-resource';
import Home from './views/Home.vue';
import Burguers from './views/Burguers.vue'
import VueRouter from 'vue-router';
import Agregar from './views/Agregar.vue'
import Actualizar from './views/Actualizar.vue'

Vue.use(vueResource)
Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hamburguesas',
      name: 'hamburguesas',
      component: Burguers,
    },

    {
    path: '/agregar_hamburguesa',
    name: 'agregar_hamburguesa',
    component: Agregar,
    },
    {
      path: '/actualizar_hamburguesa/:id',
      name: 'actualizar_hamburguesa',
      component: Actualizar,
      },

  ],
});

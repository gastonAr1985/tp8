import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './componentes/Formulario.vue'
import Cliente from './componentes/Cliente.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect:'/Formulario'},
        { path: '/formulario', component: Formulario },
        { path: '/cliente', component: Cliente },
        

    ]
})
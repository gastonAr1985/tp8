import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        formState: {},
        campos: {
            nombre: '',
            edad: '',
            email: ''
            },
        usuarios: [],
        usuariosAwait:[],
        url: 'https://62aa470c3b31438554453166.mockapi.io/users',
        mostrar:false
    },
    actions : {
        async Form({commit}){
            try{ 
                let { data } = await axios(this.state.url)		
                commit('addUser', data)
            }catch(error) {
                console.error('Error Axios', error)
            }
        },
        async agregarUser({commit}, obj){
            try{
                await axios.post(this.state.url, obj) 
                let { data } = await axios(this.state.url)

                commit('addUser', data)
            }catch(error) {
                console.error('Error Axios', error)
            }
        },
        reset({commit}){
            let dataInicial = {
                nombre: '',
                edad: '',
                email: ''
            }
            commit('resetForm', dataInicial)
        },
        async pedirAwait({commit}){
            console.warn('pedir await action')
            try{
                let {data} = await axios(this.state.url)
                let obj = data
                commit('darAwait', obj)
                }catch(error){
                   console.log("Error Axios", error)
                }
        },

       async pedirThen({commit}){
        axios(this.state.url)
        .then(({data})=>{
        commit('darAwait', data)
        })
        .catch(error => console.log("Error Axios", error))
       },

       ocultar({commit}){
console.log('oculto')
        commit('oculto')
       }
    },
    mutations : {
        oculto(state){

          state.mostrar = false
        },
        darAwait(state, dato){
            console.warn('dar await')
          state.usuariosAwait = dato
          state.mostrar = true
          console.log(state.usuariosAwait)
        },

        addUser(state, data){
            state.usuarios = data
        },
        reset(state, dataInicial){
            state.formState._reset()
            state.campos = dataInicial
        }
    }

})
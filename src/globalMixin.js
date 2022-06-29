import Vue from 'vue'

const mixinGlobal ={

    methods : {
        enviarForm(objeto){
            //this.contador++
            console.warn('entreee')
            //paso el nombre de que action estoy llamando y la cantidad
            this.$store.dispatch('agregarUser',objeto)
    
          },

          pedidoAwait(){
            console.warn('pedir await')
            this.$store.dispatch('pedirAwait')
            
          },

          pedidoThen(){
            console.warn('pedir Then')
            this.$store.dispatch('pedirThen')
            
          },

          noMostrar(){
            console.warn('ocultar')
            this.$store.dispatch('ocultar')
          }

    }

}


Vue.mixin(mixinGlobal)
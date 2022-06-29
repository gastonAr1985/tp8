import Vue from 'vue'
import vueForm from 'vue-form'

var options = {
    //dentro de opctios el objeto validators que tiene
    //la funcion no-espacios que recibe un valor(string)
    //y con la funcion includes(espacio) retorna boolean
    validators: {
        'no-espacios' : function(valor){
            return !valor.includes(' ')
        }
    }
}

//paso option por parametro a Vue.use

Vue.use(vueForm, options)
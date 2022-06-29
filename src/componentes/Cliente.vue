<template >

  <section class="src-componentes-cliente">
     <div class="jumbotron">
      <h1>Pedir datos</h1>
      
      <br>


      
      <button class="btn btn-success my-3 mr-3"  @click="pedidoAwait()">Con Await</button>
      <button class="btn btn-success my-3 mr-3" @click="pedidoThen()">Con Then</button>
      <button class="btn btn-danger my-3 mr-3" @click="noMostrar()">Borrar </button>

      <div v-if="obtenerUser && this.$store.state.mostrar" class="table-responsive" >
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
          </tr>

          <tr v-for="(cliente, index) in obtenerUser" :key="index">
              <td>{{cliente.nombre}}</td>
              <td>{{cliente.email}}</td>
              <td>{{cliente.edad}}</td>

          </tr>

        </table>
         <h4 class="alert alert-primary">se encontraron {{obtenerUser.length}}</h4>
      </div>

     </div>
  </section>

</template>

<script >
 
  export default  {
    name: 'src-componentes-cliente',
    props: [],
    mounted () {

    },
    data () {
      return {
         url:'https://62aa470c3b31438554453166.mockapi.io/users',
        mostrar:true
      }
    },
    methods: {
  
    },
    computed: {
      obtenerUser(){
        let clientesAsync = this.$store.state.usuariosAwait
        console.log('usuarios' )

        return clientesAsync
      }

    }
}
</script>

<style scoped lang="css">
  .src-componentes-cliente {

  } .jumbotron {
    background-color: green;
    color:white;
  }
  hr{
    background-color: #bbb;
  }
</style>

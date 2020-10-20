<template lang='html'>
<!--  para la conexion con el template lo hacemos atraves de un v-model y el nombre de la propiedad-->
  <input
    name='search'
    type='text'
    placeholder='Write an user!'
    class='search'
    v-on:keyup.enter='onSearch' 
	v-focus/>
	<!-- Con v-on puedo quitar el watch y poner un metodo para que este escuchando cuando levante el dedo de enter -->
	<!-- Si queremos utilizar la directiva focus en cualquier componente global tendriamos que declarar el import 
	en el main.js import @/directives/focus.js -->
	

</template>

<script>
/* eslint-disable */
// importamos nuestro bus de datos
  import bus from '@/busdata.js'

  // importamos la directiva creada por nosotros
  import focus from '@/directives/focus.js'

  export default {
    name: 'CoSearch',
    // propiedades
    data () {
      return {
        criteria: ''
        // valor que introducira el usuario para buscar en el input
      }
    },
    // para realizar alguna funcion una vez el usuario haya cambiado el valor de la propiedad en el template
    // watch: {
    //   criteria () {
    //     // emitimos un evento de busqueda hacia el padre App.vue
	// 	// this.$emit('search', this.criteria)
		
	// 	// para emitirlo con bus de eventos (el mismo evento de antes pero con el bus de eventos) 
	// 	// lo mandamos a codevelopers.vue
    //     bus.$emit('search', this.criteria)
    //   }
	// }
	methods: {
		onSearch () {
			this.$emit('search', this.criteria)
			//bus.$emit('search', this.criteria)
		}
	  }
  }
  

</script>

<style lang='css'>

</style>

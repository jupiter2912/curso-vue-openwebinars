<template lang='html'>
<!--  para la conexion con el template lo hacemos atraves de un v-model y el nombre de la propiedad-->
  <input
    name='search'
    type='text'
    placeholder='Write an user!'
    class='search'
    v-model='criteria' 
    />

</template>

<script>
/* eslint-disable */
// importamos nuestro bus de datos
  import bus from '@/busdata.js'

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
    watch: {
      criteria () {
        // emitimos un evento de busqueda hacia el padre App.vue
		// this.$emit('search', this.criteria)
		
		// para emitirlo con bus de eventos (el mismo evento de antes pero con el bus de eventos) 
		// lo mandamos a codevelopers.vue
        bus.$emit('search', this.criteria)
      }
    }
  }
</script>

<style lang='css'>

</style>

<template lang='html'>
  <ul class="developers">
    <li class="developers__item">
      <co-developer></co-developer>
    </li>
  </ul>
</template>


<script>
/* eslint-disable */
  import bus from '@/busdata.js'

  export default {
    name: 'CoDevelopers',
    // data son los valores iniciales que toma el componente y son exclusivos de dicho
    // componente
    data () {
      return {
        users: []  // nuestro componente va a empezar con una lista vacia que se ira llenando
      }
    },

    mounted () {
	  console.log('CoDeverloper mounted')
    },
	
	// en otro ciclo de vida como es created() recogemos el evento con $on
    created () {
	  bus.$on('search', criteria => {
		console.log('Codevelopers ', criteria)
	  })
	}

  }
</script>

<style lang='css'>
</style>

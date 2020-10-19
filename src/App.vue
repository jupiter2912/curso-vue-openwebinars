<template lang='html' src ="./App.html">
 
</template>



<script>
/* eslint-disable */
import CoLogo from '@/components/CoLogo'
import CoSearch from '@/components/CoSearch'

// Si queremos hacer que Codevelopers se haga de manera asincrona, ya no haria falta importarlo de aqui para que 
// se cargase despues
 import CoDevelopers from '@/components/CoDevelopers'

import CoBookmarks from '@/components/CoBookmarks'
//  necesitamos importar los componentes necesarios

export default {
  name: 'CoApp',
  methods: {
    onSearch (searchCriteria) {
      console.log('Search ', searchCriteria)
    }
  },

  // Definimos en components los components necesarios e importados que queremos mostrar
  components: {
    CoLogo,
	CoSearch,
	CoBookmarks,
	// Aqui seria donde lo implementariamos para que se llamase de manera asincrona
	// dandole las opciones que consideremos
    // CoDevelopers : () => ({
	// 	component : import('@/components/CoDevelopers'),
	// 	delay : 400,
	// 	timeout : 5000,
	// 	loading : CoLoading,
	// 	error : CoErrorLoading
	// })
	CoDevelopers
  }
}
</script>

<style lang='css'>
</style>


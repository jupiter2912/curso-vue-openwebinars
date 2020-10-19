<template lang='html'>
  <div class='codit'>
    <div class='container'>
      <nav class='menu'>

        <!-- Evento recibido en el padre con el metodo onSearch() 
        que definimos en el script -->
        <co-search
          v-on:search='onSearch'>
        </co-search>
        <co-bookmarks></co-bookmarks>
      </nav>
      <main class='content'>
        <header class='content__header'>
          <co-logo></co-logo>
        </header>
        <co-developers></co-developers>
      </main>
    </div>
  </div>
</template>



<script>
/* eslint-disable */
import CoLogo from '@/components/CoLogo'
import CoSearch from '@/components/CoSearch'

// Si queremos hacer que Codevelopers se haga de manera asincrona, ya no haria falta importarlo de aqui para que 
// se cargase despues
// import CoDevelopers from '@/components/CoDevelopers'

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
    CoDevelopers : () => ({
		component : import('@/components/CoDevelopers'),
		delay : 400,
		timeout : 5000,
		loading : CoLoading,
		error : CoErrorLoading
	})
  }
}
</script>

<style lang='css'>
</style>


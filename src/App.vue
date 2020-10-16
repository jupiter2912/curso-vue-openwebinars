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
import CoLogo from '@/components/CoLogo'
import CoSearch from '@/components/CoSearch'
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
    CoDevelopers,
    CoBookmarks
  }
}
</script>

<style lang='css'>
</style>


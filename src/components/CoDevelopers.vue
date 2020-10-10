<template lang='html'>
  <ul class="developers">
    <li class="developers__item">
      <co-developer></co-developer>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CoDevelopers', 

    //data son los valores iniciales que toma el componente y son exclusivos de dicho
    //componente
      data(){
        return {
          users : []  // nuestro componente va a empezar con una lista vacia que se ira llenando
        }
      },

    mounted (){
      console.log ('CoDeverloper mounted');
    }

  }
</script>

<style lang='css'>
</style>

<template lang='html'>
<!-- Aqui realizo la interpolacion para acceder a esas variables con la sintaxis {{ }} -->
  <h1 class='logo'>{{ appName }}</h1>
</template>

<script>
/* eslint-disable */
  export default {
	name: 'CoLogo',
	// para la interpolacion de las variables definimos un su propiedad data()
	data () {
		return {
			appName : ' Soy Sonnie '
		}
	}
  }
</script>

<style lang='css'>
</style>

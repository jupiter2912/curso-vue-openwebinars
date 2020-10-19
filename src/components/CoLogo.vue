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
/** Con scoped conseguimos que el css se encapsule */
 <style lang='css' scoped> 

	@import '../assets/css/colors.css';

	.logo {
		margin: 0;

		color: var(--color-lighter-grey);

		line-height: 2rem;
		font-size: 2rem;
		font-weight: 800;
		letter-spacing: -2px;

		text-shadow: 0 0 20px color(var(--color-blue));
	}
</style>

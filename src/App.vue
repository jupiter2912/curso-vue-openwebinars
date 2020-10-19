 /** Para ejecutarlo con marcaje HTML  */

 /**
 <template lang='html' src ="./App.html">
 <!--  -->
</template>
 
*/

/** Para ejecuarlos con marcaje PUG */
 <template lang='pug' src ="./App.pug">

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
/* css global a la aplicacion */
	@import 'assets/css/reset';
	@import 'assets/css/global';
</style>

/** Podemos crear todos los styles que queramos siempre que identifiquemos el scope */
/** css de app.vue */
<style lang="css" scoped>
	@import './assets/css/colors.css'; /** Importa los colores */
	@import './assets/css/mixins.css';

/** post css */
/** creamos una clase codit */
	.codit {
		@apply --flex-col; /** aplicas el mixing flex-col */

		align-items: center;
		justify-content: center;

		width: 100vw;
		height: 100vh;

		padding: 1px;
		
		word-break: break-word;
	}
	

		  .container {
			@apply --flex-row;
			background-color: var(--color-lighter-grey);
			width: 100%;
			height: 100%;
			max-width: 80vh;
			min-width: 400px;
			max-height: 90vh;
			min-height: 300px;
			}
			 .menu {
			@apply --flex-col;
			max-width: 15rem;
			background-color: var(--color-blue);
			}
			 .content {
			@apply --flex-col;
			flex: 1;
			}
			 .content__header {
			padding: 1rem;
			text-align: center;
			background-color: var(--color-blue);
		}
	
		</style>


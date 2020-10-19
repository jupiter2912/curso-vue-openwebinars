<template lang='html'>
  <ul class="developers">
    <!-- <li class="developers__item" v-bind:class="{ 'userConNombre': user.name === false }"> -->
		<!-- Podemos ponerlo como si fuese un objeto -->
    <li v-for='user in users' class="developers__item" v-bind:style="userConNombre">
		<!-- Utilizo un binding del objeto creado en user -->
      <co-developer
        v-bind:avatar='user.avatar_url'
        v-bind:name='user.name'
        v-bind:login='user.login'
        v-bind:email='user.email'
        v-bind:location='user.location'
        v-bind:company='user.company'
        v-bind:repos='user.public_repos'
        v-bind:gists='user.public_gists'
      ></co-developer>
    </li>
  </ul>
</template>


<script>
/* eslint-disable */

  import mocks from '@/mocks/users.js' // fichero con serie de datos fijos

  import bus from '@/busdata.js'

  import CoDeveloper from '@/components/CoDeveloper'

  export default {
    name: 'CoDevelopers',
    // data son los valores iniciales que toma el componente y son exclusivos de dicho
    // componente
    data () {
      return {
		users: mocks, // la llenamos con los datos fijos de mocks

		userConNombre : {
			fontWeight: 900,
			color: 'red'
		}
      }
	},
	
	components: {
		CoDeveloper
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


<style lang='css' scoped>
  @import '../assets/css/colors.css';
  @import '../assets/css/mixins.css';

  .developers {
    overflow-x: none;
    overflow-y: auto;
    & .developers__item {
      position: relative;
    }
    & .developers__item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 1px;
      background-color: var(--color-light-grey);
    }
    & .developer {
      padding: 1rem 2rem;
    }
  }
</style>
